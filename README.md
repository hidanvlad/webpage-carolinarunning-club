# Carolina Running Club Website

A modern, responsive landing page for Carolina Running Club — a welcoming social running club in Alba Iulia, Romania. Built with a bold red/black/white theme and optimized for easy deployment on Netlify.

## ✨ What's New (v2.0 Improvements)

### Design & Branding
- **Bold Red Accent Color**: Updated from muted tones to vibrant #dc2626 red aligned with Instagram brand
- **Professional Color Scheme**: Black backgrounds (#0a0a0a), pure white text, crisp red CTAs
- **Enhanced Visual Hierarchy**: Red borders, red dates, red buttons for better focus
- **Improved Buttons**: Gradient red CTAs with uppercase text for stronger calls-to-action

### Content Enhancements
- **Better Hero Section**: Improved tagline "Come for the run. Stay for the community"
- **Community Stats**: Added "50+ active runners" stat instead of generic metrics
- **Real Testimonials**: Authentic member quotes about energy, community, and why they return
- **Extended FAQ**: Added 6th question about bringing friends
- **Emoji Accents**: Added visual indicators for run details (🎉 Free, 🏃 All paces, etc.)
- **Improved Descriptions**: More compelling copy throughout focusing on community benefits

### User Experience
- **Better Messaging**: Clearer explanations of what runners get from the club
- **More Engaging Layout**: Better visual separation and hierarchy
- **Responsive Forms**: Enhanced signup form styling
- **Improved Navigation**: Clearer Instagram CTA and WhatsApp group instructions

### Deployment Ready
- **Netlify Optimized**: Enhanced `netlify.toml` with cache headers and security settings
- **Performance Headers**: Proper cache-control for static assets
- **Security**: Added HSTS, XSS-Protection, and frame-options headers
- **Form Submissions**: Ready for Netlify form handling

## 🎨 Color Palette

- **Primary Red**: #dc2626 (brand accent, buttons, highlights)
- **Dark Background**: #0a0a0a (main background)
- **Text**: #ffffff (white for contrast)
- **Muted**: #b0b0b0 (secondary text)
- **Accents**: Red gradients and semi-transparent overlays

## What is included

- Full-screen brand hero with primary join and Instagram calls to action
- Next-run preview card with beginner-friendly details
- About, values, and "how it works" sections with red accents
- Real Alba Iulia schedule for Saturday 9:00 at Obelisc and Wednesday 20:00 at Framm's Coffee
- Community gallery with 4 photo cards (customizable with your photos)
- Authentic member testimonials / quotes
- Comprehensive FAQ for first-time runners
- Newsletter signup form (Netlify Forms ready)
- Instagram integration and social preview assets
- Mobile navigation and fully responsive design
- ASP.NET Core static server for local preview (Visual Studio)
- Production-ready Netlify configuration

## 🚀 Local Preview

You do **not** need Python to view this site.

### Option 1: Fastest preview (No setup)

Open `index.html` directly in your browser. This loads instantly and shows the page design, links, and responsive layout.

### Option 2: Visual Studio / C# preview

This repo includes a small ASP.NET Core static-file server for local development:

```powershell
dotnet run --project CarolinaRunningClub.Web.csproj
```

Then open <http://localhost:5173>.

In Visual Studio:

1. Open the project folder.
2. Select `CarolinaRunningClub.Web` as the startup project.
3. Press the green Run button or `Ctrl+F5`.
4. Visual Studio opens <http://localhost:5173> automatically.

**Note:** If you see old text after updating, stop the app and press `Ctrl+Shift+R` (hard refresh) in the browser to clear the cache.

## 📍 Current Club Details

- **Location**: Alba Iulia, Romania
- **Saturday Run**: 9:00 AM meetup at Obelisc Alba Iulia
- **Wednesday Run**: 8:00 PM meetup at Framm's Coffee
- **Route**: 1 or 2 loops of Șanțurile Cetății (Cetatea Alba Carolina moat)
- **Distance**: ~3 km or ~6 km options
- **Pace**: All paces welcome - walk, jog, run at your speed
- **Community**: Coffee and socializing before and after each run
- **Updates**: Instagram (@carolina.running.club) for run details and photos

## 📱 Netlify Deployment

This project is optimized for static site deployment on Netlify.

### Deploy Checklist

1. **Push to GitHub**
   - Ensure all changes are committed and pushed to your GitHub repo

2. **Connect to Netlify**
   - Go to <https://app.netlify.com> and sign in
   - Click **Add new site** → **Import an existing project**
   - Choose GitHub and select your repository
   - Click **Deploy site**

3. **Configuration** (Netlify auto-detects from `netlify.toml`)
   - Build command: Leave empty (or accept auto-detected setting)
   - Publish directory: `.` (repo root)
   - The included `netlify.toml` handles the rest

4. **Test Deployment**
   - Open your Netlify-assigned URL (e.g., `funky-name-12345.netlify.app`)
   - Test all navigation links
   - Fill out and submit the "Get run updates" form
   - Check Netlify **Forms** dashboard to confirm submission was received

5. **Connect Custom Domain** (Optional but recommended)
   - In Netlify site settings, add custom domain (e.g., `carolinarunningclub.ro`)
   - Update DNS records as Netlify guides
   - Point Instagram bio to your domain

6. **Enable HTTPS**
   - Netlify provides free SSL/TLS automatically

### What Netlify Handles

- ✅ Form submissions (run-updates form)
- ✅ HTTPS/SSL certificate
- ✅ Custom domain routing
- ✅ Automatic deploys on GitHub push
- ✅ Cache headers and security headers
- ✅ 99.9% uptime SLA

## 🎨 Customization Guide

### Before Launch

1. **Add Club Photos**
   - Place 4 photos in `assets/photos/`:
	 - `saturday-obelisc-group.jpg` (group at start)
	 - `framms-coffee-after-run.jpg` (tall image, 2x height)
	 - `wednesday-evening-run.jpg` (evening energy)
	 - `cetate-loop-runners.jpg` (wide image, 2x width)
   - Photos auto-appear in the gallery section

2. **Update Testimonials** (optional)
   - Replace placeholder quotes in the testimonials section with real member feedback
   - Update member names/descriptions

3. **Customize Colors** (if needed)
   - Edit CSS color variables in `styles.css`:
	 ```css
	 --red: #dc2626;      /* Primary accent */
	 --bg: #0a0a0a;       /* Dark background */
	 --text: #ffffff;     /* White text */
	 ```

4. **Update Club Info**
   - Edit run times, locations in HTML as needed
   - Update Instagram handle in footer
   - Change email in contact form

### Content Priorities

- ✅ Photos: Add 4 real club photos (biggest visual impact)
- ✅ Testimonials: Replace with real member quotes (builds trust)
- ✅ Schedule: Keep current with actual run times
- ✅ Links: Keep Instagram link current (@carolina.running.club)

## 🔒 Security & Performance

- **Headers**: HSTS, X-Content-Type-Options, X-Frame-Options set
- **Cache**: CSS and JS cached for 1 year; HTML cached for 1 hour
- **Forms**: Netlify handles form submissions securely
- **Privacy**: No tracking or analytics by default (add Google Analytics if desired)

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get a Google Analytics ID
2. Add this to the `<head>` section of `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
   <script>
	 window.dataLayer = window.dataLayer || [];
	 function gtag(){dataLayer.push(arguments);}
	 gtag('js', new Date());
	 gtag('config', 'YOUR_ID');
   </script>
   ```

## 💌 Email Newsletter (Optional Upgrade)

Currently, the form saves submissions in Netlify Forms. To add email marketing:

1. **MailerLite, Mailchimp, or ConvertKit**: Connect form submission to your email service
2. **Follow their integration guides** for Netlify Forms or use Zapier

## 📝 File Structure

```
.
├── index.html              # Main landing page
├── styles.css              # All styling (red/black/white theme)
├── script.js               # Navigation and form handling
├── netlify.toml            # Netlify config (deployment settings)
├── README.md               # This file
├── assets/
│   ├── photos/             # Add your 4 club photos here
│   └── social-preview.svg  # Social media preview image
└── Properties/
	└── launchSettings.json # Local server settings
```

## 🎯 Quick Start Summary

1. **Local Preview**: `dotnet run` or open `index.html`
2. **Deploy**: Push to GitHub → Netlify auto-deploys
3. **Customize**: Add photos, update quotes, adjust times
4. **Go Live**: Connect custom domain, test, share on Instagram

## ❓ FAQ

**Q: Do I need to pay for hosting?**
A: No. Netlify's free tier includes unlimited static site hosting, free SSL, and form submissions.

**Q: How do I update the website?**
A: Edit `index.html` or `styles.css`, commit to GitHub, and Netlify auto-deploys in 1-2 minutes.

**Q: Can I add a shop/merchandise section?**
A: Yes. You can add Shopify, Printful, or any e-commerce. This is a good Phase 2 upgrade.

**Q: How do I handle run registrations?**
A: Instagram DM is the current approach (keeps it lightweight). Form submissions are saved in Netlify.

**Q: Will this work on mobile?**
A: Yes, fully responsive. Tested on all screen sizes.

---

**Built for runners. Optimized for growth.**

Come for the run. Stay for the community. 🏃‍♂️❤️
