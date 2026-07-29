/**
 * src/lib/api.js
 * ─────────────────────────────────────────────────────────────────────────
 * Central API client for Sundari Silk Palace.
 *
 * All calls go through this file so the API URL is defined in one place.
 * Set NEXT_PUBLIC_API_URL in:
 *   - .env.local for local development (http://localhost:8000)
 *   - Vercel dashboard for production (https://your-render-app.onrender.com)
 *
 * GRACEFUL FALLBACK: Every function catches errors and returns static fallback
 * data so the site NEVER breaks even if the Django backend is down.
 * ─────────────────────────────────────────────────────────────────────────
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

/**
 * Generic fetch wrapper with timeout and error handling.
 * Returns { data, error } — never throws.
 */
async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE_URL}/api${endpoint}`;

  // 8-second timeout so the page doesn't hang if Render is cold-starting
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      return { data: null, error: `HTTP ${response.status}: ${errorText}` };
    }

    const data = await response.json();
    return { data, error: null };
  } catch (err) {
    clearTimeout(timeoutId);
    if (err.name === 'AbortError') {
      return { data: null, error: 'Request timed out. Is the backend running?' };
    }
    return { data: null, error: err.message };
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Fallback Static Data (shown when backend is unavailable)
// ─────────────────────────────────────────────────────────────────────────

const FALLBACK_FEATURED_PRODUCTS = [
  { id: 1, name: 'Royal Bandhani Saree',       image_url: '/images/featured/bandhani-sari.jpg',   category_name: 'Saree', is_featured: true },
  { id: 2, name: 'Mirror Work Lehenga',         image_url: '/images/featured/lehenga.jpg',          category_name: 'Lehenga', is_featured: true },
  { id: 3, name: 'Elegant Silk Saree',           image_url: '/images/featured/silk-sari.jpg',        category_name: 'Saree', is_featured: true },
  { id: 4, name: 'Traditional Chaniya Choli',   image_url: '/images/featured/chaniya-choli.jpg',    category_name: 'Chaniya Choli', is_featured: true },
  { id: 5, name: 'Festive Kurti Set',            image_url: '/images/featured/kurtis.jpg',           category_name: 'Kurti', is_featured: true },
];

const FALLBACK_ALL_PRODUCTS = [
  { id: 1,  name: 'Bandhani Sarees',    image_url: '/images/collection/bandhani.jpg',     category_name: 'Saree',         category_slug: 'saree' },
  { id: 2,  name: 'Cotton Kurtis',      image_url: '/images/collection/kurtis.jpg',       category_name: 'Kurti',         category_slug: 'kurti' },
  { id: 3,  name: 'Silk Sarees',        image_url: '/images/collection/silk.jpg',          category_name: 'Saree',         category_slug: 'saree' },
  { id: 4,  name: 'Festive Lehenga',    image_url: '/images/collection/lahengas.jpg',     category_name: 'Lehenga',       category_slug: 'lehenga' },
  { id: 5,  name: 'Cotton Sarees',      image_url: '/images/collection/cotton.jpg',       category_name: 'Saree',         category_slug: 'saree' },
  { id: 6,  name: 'Patola Sarees',      image_url: '/images/collection/patolas.jpg',      category_name: 'Saree',         category_slug: 'saree' },
  { id: 7,  name: 'Chaniya Cholis',     image_url: '/images/collection/chaniya-choli.jpg',category_name: 'Chaniya Choli', category_slug: 'chaniya-choli' },
  { id: 8,  name: 'Banarasi Sarees',    image_url: '/images/collection/banarasi.jpg',     category_name: 'Saree',         category_slug: 'saree' },
];

const FALLBACK_TESTIMONIALS = [
  { id: 1, author: 'Priya S.',  quote: 'Amazing collection and very reasonable prices. A must-visit in Ahmedabad!', rating: 5 },
  { id: 2, author: 'Neha M.',   quote: 'The designs are unique and the quality is top-notch. Highly recommended.', rating: 5 },
  { id: 3, author: 'Rina P.',   quote: 'I have been a customer for years. Sundari Silk Palace never disappoints.',  rating: 5 },
];

const FALLBACK_CATEGORIES = [
  { id: 1, name: 'Saree',         slug: 'saree' },
  { id: 2, name: 'Kurti',         slug: 'kurti' },
  { id: 3, name: 'Lehenga',       slug: 'lehenga' },
  { id: 4, name: 'Chaniya Choli', slug: 'chaniya-choli' },
];

// ─────────────────────────────────────────────────────────────────────────
// API Functions
// ─────────────────────────────────────────────────────────────────────────

/**
 * Fetch featured products for the homepage slider.
 * Falls back to local static data if the API is unavailable.
 */
export async function getFeaturedProducts() {
  if (!API_BASE_URL) return FALLBACK_FEATURED_PRODUCTS;

  const { data, error } = await apiFetch('/products/?featured=true');
  if (error || !data) {
    console.warn('[API] getFeaturedProducts fell back to static data:', error);
    return FALLBACK_FEATURED_PRODUCTS;
  }
  // DRF paginated response has a "results" key; handle both formats
  const products = Array.isArray(data) ? data : (data.results || []);
  return products.length > 0 ? products : FALLBACK_FEATURED_PRODUCTS;
}

/**
 * Fetch all products, optionally filtered by category slug.
 */
export async function getProducts({ categorySlug } = {}) {
  if (!API_BASE_URL) return FALLBACK_ALL_PRODUCTS;

  const query = categorySlug ? `?category=${categorySlug}` : '';
  const { data, error } = await apiFetch(`/products/${query}`);
  if (error || !data) {
    console.warn('[API] getProducts fell back to static data:', error);
    return FALLBACK_ALL_PRODUCTS;
  }
  const products = Array.isArray(data) ? data : (data.results || []);
  return products.length > 0 ? products : FALLBACK_ALL_PRODUCTS;
}

/**
 * Fetch all product categories.
 */
export async function getCategories() {
  if (!API_BASE_URL) return FALLBACK_CATEGORIES;

  const { data, error } = await apiFetch('/categories/');
  if (error || !data) {
    console.warn('[API] getCategories fell back to static data:', error);
    return FALLBACK_CATEGORIES;
  }
  const categories = Array.isArray(data) ? data : (data.results || []);
  return categories.length > 0 ? categories : FALLBACK_CATEGORIES;
}

/**
 * Fetch active testimonials for the homepage.
 */
export async function getTestimonials() {
  if (!API_BASE_URL) return FALLBACK_TESTIMONIALS;

  const { data, error } = await apiFetch('/testimonials/');
  if (error || !data) {
    console.warn('[API] getTestimonials fell back to static data:', error);
    return FALLBACK_TESTIMONIALS;
  }
  const testimonials = Array.isArray(data) ? data : (data.results || []);
  return testimonials.length > 0 ? testimonials : FALLBACK_TESTIMONIALS;
}

/**
 * Submit a contact inquiry form.
 * Returns { success: true, message } or { success: false, error, fieldErrors }
 */
export async function submitInquiry({ name, phone, email, message }) {
  if (!API_BASE_URL) {
    // No backend configured — simulate success in dev
    return { success: true, message: 'Thank you! (demo mode — no backend configured)' };
  }

  const { data, error } = await apiFetch('/inquiries/', {
    method: 'POST',
    body: JSON.stringify({ name, phone, email, message }),
  });

  if (error) {
    // Try to parse field-level validation errors from DRF
    try {
      const parsed = JSON.parse(error.replace(/^HTTP \d+: /, ''));
      return { success: false, error: 'Please check the form.', fieldErrors: parsed };
    } catch {
      return { success: false, error: error };
    }
  }

  return { success: true, message: data?.message || 'Inquiry submitted successfully!' };
}
