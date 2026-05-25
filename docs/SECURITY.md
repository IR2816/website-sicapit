# 🔒 Security Documentation - Website Sicapit

> Last Updated: 2026-05-25  
> Status: ✅ Audit Completed & All Issues Fixed

---

## Overview

Website Sicapit telah melalui comprehensive security audit. Semua critical dan high-risk vulnerabilities telah ditgatasi. Dokumentasi ini menjelaskan security measures yang sudah diimplementasikan.

---

## 🎯 Security Fixes Implemented

### 1. **Input Validation & Sanitization**

#### Location
- File: [src/lib/validation.ts](src/lib/validation.ts) (NEW)
- Integrated in: Booking form, Footer links, Contact forms

#### Validators Available
```typescript
// Phone Number Validation
validatePhoneNumber(phone)           // Validates Indonesian format
normalizePhoneForWhatsApp(phone)     // Converts to 62XXXXXXXXXX format

// Email Validation
validateEmail(email)                 // RFC-compliant email validation

// Text Input Protection
sanitizeTextInput(text, maxLength)   // Removes control chars, limits length
validateName(name)                   // Allows letters, spaces, hyphens, apostrophes

// Form Validation
validateBookingForm(data)            // Comprehensive form validation
```

#### Example Usage
```tsx
import { validateBookingForm, normalizePhoneForWhatsApp } from '@/lib/validation'

// Validate before submission
const { valid, errors } = validateBookingForm({
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  package: formData.package,
  pax: formData.pax,
  date: formData.date,
})

if (!valid) {
  alert(`Errors: ${Object.values(errors).join('\n')}`)
  return
}

// Normalize phone for WhatsApp
const normalizedPhone = normalizePhoneForWhatsApp(formData.phone)
```

---

### 2. **Hardcoded Secrets Removal**

#### ❌ BEFORE (Vulnerable)
```tsx
// BAD: Phone number hardcoded in code
const fallbackPhone = "6281318251218"
window.location.href = `https://wa.me/${fallbackPhone}?text=...`
```

#### ✅ AFTER (Secure)
```tsx
// GOOD: Use environment variables only
import { normalizePhoneForWhatsApp } from '@/lib/validation'

const rawPhone = process.env.NEXT_PUBLIC_CONTACT_1_PHONE
const normalizedPhone = normalizePhoneForWhatsApp(rawPhone)
window.location.href = `https://wa.me/${normalizedPhone}?text=...`
```

#### Files Modified
- [src/app/rafting/page.tsx](src/app/rafting/page.tsx) - Booking form & WA button
- [src/app/page.tsx](src/app/page.tsx) - Contact section
- [src/components/Footer.tsx](src/components/Footer.tsx) - Contact links

#### Environment Variables Template
See [.env.example](.env.example) for reference. Template includes:
```bash
# Contact Information (NEXT_PUBLIC_ = visible to client)
NEXT_PUBLIC_CONTACT_1_NAME=Your Name
NEXT_PUBLIC_CONTACT_1_PHONE=+62-xxx-xxxx-xxxx

# Address Information
NEXT_PUBLIC_ADDRESS_TITLE=Kampung Wisata Sicapit
NEXT_PUBLIC_ADDRESS_LINE1=...

# Google Services
NEXT_PUBLIC_GOOGLE_MAPS_EMBED=...
```

**⚠️ IMPORTANT**: 
- `.env` dan `.env.local` sudah di `.gitignore` ✅
- JANGAN commit file `.env` dengan real values
- JANGAN share `.env` file dengan orang lain
- Always use `.env.example` sebagai template

---

### 3. **Content Security Policy (CSP) Enhancement**

#### Location
- File: [next.config.ts](next.config.ts)

#### Changes Made

**REMOVED** (Security Risk):
- ❌ `'unsafe-eval'` dari script-src (XSS vulnerability)

**ADDED** (Security Enhancement):
- ✅ `form-action 'self' https://wa.me` - Only allow form submissions to WhatsApp
- ✅ `base-uri 'self'` - Prevent base tag injection
- ✅ `object-src 'none'` - Prevent Flash/plugin attacks
- ✅ `upgrade-insecure-requests` - Force HTTPS
- ✅ `X-Robots-Tag: index, follow`

#### Full CSP Policy
```
default-src 'self'
script-src 'self' 'unsafe-inline' cdn.jsdelivr.net https://maps.googleapis.com https://maps.gstatic.com
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com
img-src 'self' data: https: blob:
font-src 'self' data: https: https://fonts.gstatic.com
connect-src 'self' https: wss:
frame-src 'self' https://www.google.com/maps/embed https://www.google.com/maps
frame-ancestors 'self'
base-uri 'self'
form-action 'self' https://wa.me
object-src 'none'
```

#### Additional Security Headers
- `X-Frame-Options: SAMEORIGIN` - Clickjacking protection
- `X-Content-Type-Options: nosniff` - Prevent MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Privacy
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` - HTTPS enforcement
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()` - Feature permissions

---

### 4. **Phone Number Handling**

#### Issue
- Phone numbers dapat diformat dalam berbagai cara: `08xx`, `+6281xx`, `6281xx`
- Regex patterns tidak robust
- Potensi injection melalui WhatsApp URL

#### Solution: `normalizePhoneForWhatsApp()`

**Accepts**:
- `08123456789` → `628123456789`
- `+628123456789` → `628123456789`
- `628123456789` → `628123456789`

**Validates**:
- Indonesian phone format (must start with 08, +62, or 62)
- 9-12 digits after country code
- No special characters

**Returns**: 
- `"62XXXXXXXXXX"` if valid
- `null` if invalid

**Example**:
```tsx
const phone = "+62 8123-456-789"
const normalized = normalizePhoneForWhatsApp(phone)
// Returns: "628123456789"

const whatsappUrl = `https://wa.me/${normalized}?text=Hello`
// Safe to use in href
```

---

### 5. **Form Validation & Sanitization**

#### Booking Form Validation

**Fields Validated**:
1. **Name** - 2-100 chars, letters/spaces/hyphens/apostrophes only
2. **Email** - Valid RFC format, max 254 chars
3. **Phone** - Indonesian format with proper normalization
4. **Package** - Must be selected from valid options
5. **Pax (Quantity)** - 1-500 people
6. **Date** - Today or later, within 5 years
7. **Notes** - Max 500 chars, sanitized

#### Sanitization Process
```tsx
// Remove control characters & limit length
const sanitized = sanitizeTextInput(userInput, 500)
```

#### Validation Errors (User-Friendly)
```
❌ "Nama harus 2-100 karakter (hanya huruf, spasi, tanda hubung)"
❌ "Email tidak valid"
❌ "Nomor telepon Indonesia tidak valid (08xx atau +62xx)"
❌ "Jumlah peserta harus 1-500 orang"
```

---

### 6. **Image Domain Restrictions**

#### Allowed Remote Domains
```javascript
// Only these domains can load images
- ui-avatars.com (for profile avatars)
- picsum.photos (placeholder images)
- fastly.picsum.photos (CDN mirror)
- images.unsplash.com (gallery photos)
```

**Not Allowed**:
- ❌ Arbitrary external domains
- ❌ Data URIs (controlled)
- ❌ Blob URLs (controlled)

---

## 🔐 Security Best Practices

### For Developers

#### 1. Always Use Validation for User Input
```tsx
// ❌ NEVER do this
const message = `Hello ${userInput}`

// ✅ ALWAYS do this
import { sanitizeTextInput } from '@/lib/validation'
const message = `Hello ${sanitizeTextInput(userInput)}`
```

#### 2. Never Hardcode Secrets
```tsx
// ❌ BAD
const apiKey = "sk_live_abc123"

// ✅ GOOD
const apiKey = process.env.SECRET_API_KEY
```

#### 3. Use Proper Phone Normalization
```tsx
// ❌ BAD - Fragile regex
const phone = input.replace(/\D/g, '')

// ✅ GOOD - Proper validation
import { normalizePhoneForWhatsApp } from '@/lib/validation'
const phone = normalizePhoneForWhatsApp(input)
```

#### 4. Validate on Client AND Server
```tsx
// Client-side validation for UX
const { valid, errors } = validateBookingForm(data)

// BUT: Always re-validate on server/API
// Client validation is for user experience, not security
```

#### 5. Use Environment Variables Properly
```tsx
// ✅ CORRECT - Client-safe data
process.env.NEXT_PUBLIC_CONTACT_PHONE  // Safe to expose

// ✅ CORRECT - Server-only secrets
process.env.DATABASE_URL  // NEVER use NEXT_PUBLIC_
process.env.SECRET_API_KEY // NEVER expose to client
```

---

### For DevOps/Admins

#### Environment Variables Setup
1. Create `.env.local` from `.env.example`
2. Fill in actual values (email, phone, database URL)
3. Never commit `.env` to Git
4. Use GitHub Secrets for CI/CD

#### Deployment Checklist
- [ ] `.env` file created with real values
- [ ] `.env` is in `.gitignore`
- [ ] All `NEXT_PUBLIC_*` variables set correctly
- [ ] Security headers enabled in `next.config.ts`
- [ ] CSP headers validated in production
- [ ] HTTPS enabled (Vercel auto-handles)

#### Monitoring
- Monitor CSP violations in browser console
- Check for form validation errors
- Audit phone number formats received

---

## 📋 Validation Rules Reference

### Phone Number
```
Format: 08xx or +62xx or 62xx
Example: 08123456789, +628123456789, 628123456789
Min: 09 digits after country code
Max: 12 digits after country code
Result: Normalized to 62XXXXXXXXXX
```

### Email
```
Format: user@domain.com
Min: 5 chars
Max: 254 chars
RFC compliance: YES
```

### Name
```
Allowed: Letters (any language), spaces, hyphens, apostrophes
Min: 2 chars
Max: 100 chars
Examples: "Budi Santoso", "Muhammad Ali", "Mary-Jane", "O'Connor"
```

### Date
```
Min: Today
Max: 5 years in future
Format: ISO date (YYYY-MM-DD)
```

### Notes/Message
```
Max: 500 chars
Removes: Control characters, null bytes
Allows: Normal text, emojis, special chars
```

---

## 🚨 Security Incidents Handling

### If Breach Detected
1. Immediately rotate all secrets in `.env`
2. Check browser console for CSP violations
3. Review form submissions for malicious input
4. Update security documentation

### If Malicious Form Submissions
1. Check server logs for patterns
2. Update validation rules if needed
3. Consider rate limiting (future implementation)
4. Document findings in security log

---

## 📚 Additional Resources

### OWASP Top 10
- A01: Broken Access Control
- A03: Injection
- A05: Cross-Site Request Forgery (CSRF)
- A07: Cross-Site Scripting (XSS) - Mitigated by CSP
- A10: Server-Side Request Forgery (SSRF)

### Security Headers
- https://securityheaders.com
- https://csp-evaluator.withgoogle.com

### Testing
- Browser DevTools → Network tab (check security headers)
- Browser DevTools → Console (check for CSP violations)
- Manual form validation testing

---

## 📝 Changelog

### Version 1.0 (2026-05-25)
- ✅ Implemented comprehensive input validation
- ✅ Removed hardcoded secrets
- ✅ Enhanced CSP policy
- ✅ Added phone number normalization
- ✅ Created `.env.example` template
- ✅ Documented all security measures

---

## ❓ FAQ

**Q: Is it safe to use NEXT_PUBLIC_ variables?**  
A: Yes, but ONLY for non-sensitive data. Phone numbers, addresses, etc. are public. NEVER use for API keys, tokens, or database URLs.

**Q: What if user enters invalid phone?**  
A: The form will show an error message and won't send. User must correct it. No submission happens until validation passes.

**Q: Can users bypass client-side validation?**  
A: Yes, but there's no server to bypass in this static site. All safety is client-side for this booking system which just sends to WhatsApp.

**Q: What if CSP blocks something?**  
A: Check browser console for CSP violation reports. Add the source to `next.config.ts` if it's legitimate (e.g., new font, analytics, etc).

---

## 📞 Security Contact

For security issues, please contact through WhatsApp using contact info in `.env` or footer.

---

**Remember**: Security is a continuous process, not a one-time fix. 🔒
