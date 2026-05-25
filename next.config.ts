import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security Headers - OWASP Best Practices
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          // Additional Security Headers
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Robots-Tag', value: 'index, follow' },
          // Upgrade insecure requests to HTTPS
          { key: 'Content-Security-Policy', value: "upgrade-insecure-requests" },
          // Enhanced Content Security Policy - More Restrictive & Secure
          // REMOVED 'unsafe-eval' - Improves XSS Protection
          // REMOVED unnecessary 'unsafe-inline' for scripts - Using nonce strategy instead
          { 
            key: 'Content-Security-Policy', 
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' cdn.jsdelivr.net https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob:; font-src 'self' data: https: https://fonts.gstatic.com; connect-src 'self' https: wss:; frame-src 'self' https://www.google.com/maps/embed https://www.google.com/maps; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://wa.me; object-src 'none';"
          }
        ]
      }
    ]
  },
  /* config options here */
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      }
    ],
  },
};

export default nextConfig;

