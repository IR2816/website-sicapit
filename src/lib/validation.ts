/**
 * Input Validation & Sanitization Utilities
 * Protects against XSS, injection attacks, and malformed data
 */

/**
 * Validates Indonesian phone number format
 * Accepts formats: 08xx, 0818xx, +62xxx, 62xxx
 */
export function validatePhoneNumber(phone: string): boolean {
  const trimmed = phone.trim();
  
  // Remove common formatting characters
  const cleaned = trimmed.replace(/[\s\-\(\)\.]/g, '');
  
  // Check if only digits (and optional leading +)
  if (!/^(\+?62|0)[0-9]{9,12}$/.test(cleaned)) {
    return false;
  }
  
  return true;
}

/**
 * Cleans and normalizes Indonesian phone number to WhatsApp format
 * Returns: "62xxxxxxxx" format (without +)
 */
export function normalizePhoneForWhatsApp(phone: string): string | null {
  if (!validatePhoneNumber(phone)) return null;
  
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  
  // Convert to 62 format
  let normalized = cleaned;
  if (normalized.startsWith('0')) {
    normalized = '62' + normalized.slice(1);
  } else if (!normalized.startsWith('62')) {
    normalized = '62' + normalized.replace('+', '');
  }
  
  // Final validation - should be 62 + 9-12 digits
  if (!/^62[0-9]{9,12}$/.test(normalized)) {
    return null;
  }
  
  return normalized;
}

/**
 * Validates email address format
 */
export function validateEmail(email: string): boolean {
  const trimmed = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Basic validation
  if (!emailRegex.test(trimmed) || trimmed.length > 254) {
    return false;
  }
  
  return true;
}

/**
 * Sanitizes text input to prevent XSS
 * Removes potentially dangerous characters while preserving readability
 */
export function sanitizeTextInput(text: string, maxLength: number = 500): string {
  let sanitized = text.trim();
  
  // Remove control characters and very long strings
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  
  // Limit length
  sanitized = sanitized.slice(0, maxLength);
  
  return sanitized;
}

/**
 * Validates name field (allows letters, spaces, hyphens, apostrophes)
 */
export function validateName(name: string): boolean {
  const trimmed = name.trim();
  
  // Check length
  if (trimmed.length < 2 || trimmed.length > 100) {
    return false;
  }
  
  // Allow: letters (any language), spaces, hyphens, apostrophes
  const nameRegex = /^[\p{L}\s\-']+$/u;
  
  return nameRegex.test(trimmed);
}

/**
 * Validates number input for quantity/count
 */
export function validateNumberInput(value: any, min: number = 1, max: number = 10000): boolean {
  const num = Number(value);
  
  if (isNaN(num) || !Number.isInteger(num)) {
    return false;
  }
  
  return num >= min && num <= max;
}

/**
 * Validates date input (future dates only)
 */
export function validateFutureDate(dateString: string): boolean {
  try {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Must be today or later
    return date >= today && date.getFullYear() <= today.getFullYear() + 5;
  } catch {
    return false;
  }
}

/**
 * Sanitizes all form data
 */
export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  package: string;
  pax: number;
  date: string;
  documentation: boolean;
  notes: string;
}

export function validateBookingForm(data: Partial<BookingFormData>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  // Validate name
  if (!data.name || !validateName(data.name)) {
    errors.name = 'Nama harus 2-100 karakter (hanya huruf, spasi, tanda hubung)';
  }
  
  // Validate email
  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Email tidak valid';
  }
  
  // Validate phone
  if (!data.phone || !validatePhoneNumber(data.phone)) {
    errors.phone = 'Nomor telepon Indonesia tidak valid (08xx atau +62xx)';
  }
  
  // Validate package
  if (!data.package || typeof data.package !== 'string' || data.package.length === 0) {
    errors.package = 'Pilih paket rafting';
  }
  
  // Validate pax
  if (!validateNumberInput(data.pax, 1, 500)) {
    errors.pax = 'Jumlah peserta harus 1-500 orang';
  }
  
  // Validate date
  if (!data.date || !validateFutureDate(data.date)) {
    errors.date = 'Tanggal harus hari ini atau lebih lambat (dalam 5 tahun ke depan)';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Encodes text for safe use in URLs (with WhatsApp compatibility)
 */
export function encodeForURL(text: string): string {
  return encodeURIComponent(text);
}
