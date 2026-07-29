# Sundari Silk Palace — Frontend

This is the Next.js frontend application for Sundari Silk Palace. It provides a beautiful, modern user interface for browsing categories, featured products, reading testimonials, and submitting inquiries.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **API Integration**: REST API consumption using a custom fetch client with gracefully handled fallbacks and error handling.

## Live Architecture
The frontend is fully deployed and accessible via Vercel. 
It connects to a live Django backend API to fetch real-time data for products, categories, and testimonials, and handles POST requests for customer inquiries. Images are served securely via Cloudinary's CDN.

## Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add the backend API URL:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```
   *(Ensure your local Django backend is running on port 8000)*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` to view the application.

## Deployment Notes
- **Vercel Setup**: Deploys automatically on push to the `main` branch. 
- **Environment Variables**: Ensure `NEXT_PUBLIC_API_URL` is configured in your Vercel project settings, pointing to your live backend URL (e.g., `https://sundari-silk-api.onrender.com`). If you update this variable, you must redeploy to bake the changes into the build.
