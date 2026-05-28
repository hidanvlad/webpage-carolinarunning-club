# Carolina Running Club Website

A polished, responsive landing page for Carolina Running Club — a welcoming social running club in Alba Iulia, Romania.

## What is included

- Full-screen brand hero with primary join and Instagram calls to action
- Next-run preview with beginner-friendly details
- About, values, and “how it works” sections
- Real Alba Iulia schedule for Saturday 9:00 at Obelisc and Wednesday 20:00 at Framm's Coffee
- Community gallery cards ready for real club photos from `assets/photos`
- Testimonials / member quote placeholders
- FAQ for first-time runners
- Netlify-ready email update form and Instagram link
- Social preview SVG asset
- Mobile navigation and responsive layouts

## Local preview

Because this is a static site, you can serve it with any simple static server:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Current club details

- Location: Alba Iulia, Romania
- Saturday run: 9:00 meetup at Obelisc Alba Iulia
- Wednesday run: 20:00 meetup at Framm's Coffee
- Route: 1 or 2 loops of Șanțurile Cetății / Cetatea Alba Carolina
- Distance: about 3 km or 6 km
- Pace: all paces welcome
- Social: regroup before and after the run, then coffee at Framm's
- Updates: Instagram first, with WhatsApp group support

## Netlify deployment

This project is ready for Netlify as a static site:

1. Push the repo to GitHub.
2. Create a new Netlify site from the GitHub repo.
3. Use the repo root as the publish directory. The included `netlify.toml` sets `publish = "."`.
4. Netlify will detect the `run-updates` form in `index.html` because it uses `data-netlify="true"`.
5. After deploy, submit the form once and confirm the submission appears in Netlify Forms.

## Content to customize before launch

- Add approved run photos to `assets/photos` and wire them into the gallery
- Replace placeholder testimonials with real member quotes
- Add a domain once you choose one
- Add a WhatsApp invite link if you want it public; otherwise keep WhatsApp shared through Instagram or after runs
