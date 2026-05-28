# Carolina Running Club Website

<<<<<<< codex/create-website-for-carolina-running-club-6fb2hh
A polished, responsive landing page for Carolina Running Club — a welcoming social running club in Alba Iulia, Romania.
=======
A polished, responsive landing page for Carolina Running Club — a welcoming social running club for every pace.
>>>>>>> main

## What is included

- Full-screen brand hero with primary join and Instagram calls to action
- Next-run preview with beginner-friendly details
- About, values, and “how it works” sections
<<<<<<< codex/create-website-for-carolina-running-club-6fb2hh
- Real Alba Iulia schedule for Saturday 9:00 at Obelisc and Wednesday 20:00 at Framm's Coffee
- Community gallery cards ready for real club photos from `assets/photos`
- Testimonials / member quote placeholders
- FAQ for first-time runners
- Netlify-ready email update form and Instagram link
- Social preview SVG asset
- Mobile navigation and responsive layouts
- Optional C# / ASP.NET Core local preview server for Visual Studio users
- Visible Alba Iulia schedule strip at the top of the homepage

## Local preview

You do **not** need Python to view this site.

### Option 1: easiest preview

Open `index.html` directly in your browser. This is enough to see the page design, links, and responsive layout.

### Option 2: Visual Studio / C# preview

This repo includes a small ASP.NET Core static-file server so you can run the site from Visual Studio or with `dotnet`:

```powershell
dotnet run --project CarolinaRunningClub.Web.csproj
```

Then open <http://localhost:5173>.

If the browser still shows old text like “Carolina miles” or “Saturday Social Miles,” stop the running app, press `Ctrl+Shift+R` in the browser, and confirm your local `index.html` contains “Alba Iulia schedule is live.” The stylesheet and script URLs include a version string to help browsers load the newest files.

In Visual Studio:

1. Open the project folder.
2. Select `CarolinaRunningClub.Web` as the startup project/item.
3. Press the green Run button or `Ctrl+F5`.
4. Visual Studio should open <http://localhost:5173> automatically.

### Option 3: Python preview, only if Python is installed
=======
- Weekly run schedule placeholders
- Community gallery cards ready for real club photos
- Testimonials / member quote placeholders
- FAQ for first-time runners
- Email update form and Instagram link
- Social preview SVG asset
- Mobile navigation and responsive layouts

## Local preview

Because this is a static site, you can serve it with any simple static server:
>>>>>>> main

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

<<<<<<< codex/create-website-for-carolina-running-club-6fb2hh
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

The C# project is only for local preview. Netlify still deploys the static files from the repo root.

## Content to customize before launch

- Add approved run photos to `assets/photos` and wire them into the gallery
- Replace placeholder testimonials with real member quotes
- Add a domain once you choose one
- Add a WhatsApp invite link if you want it public; otherwise keep WhatsApp shared through Instagram or after runs
=======
## Content to customize before launch

Update the placeholder details in `index.html` when the club finalizes them:

- Exact city / neighborhood
- Meetup location and Google Maps link
- Regular run days and times
- Current distances and pace groups
- Contact email or signup provider
- Real gallery images and member quotes
>>>>>>> main
