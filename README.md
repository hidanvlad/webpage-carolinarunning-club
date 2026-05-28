# Carolina Running Club Website

A polished, responsive landing page for Carolina Running Club — a welcoming social running club in Alba Iulia, Romania.

## What is included

- Full-screen brand hero with primary join and Instagram calls to action
- Next-run preview with beginner-friendly details
- About, values, and “how it works” sections
- Real Alba Iulia schedule for Saturday 9:00 at Obelisc and Wednesday 20:00 at Framm's Coffee
- Community gallery cards wired for real club photos from `assets/photos`
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



Then open <http://localhost:4173>.

## Current club details

- Location: Alba Iulia, Romania
- Saturday run: 9:00 meetup at Obelisc Alba Iulia
- Wednesday run: 20:00 meetup at Framm's Coffee
- Route: 1 or 2 loops of Șanțurile Cetății / Cetatea Alba Carolina
- Distance: about 3 km or 6 km
- Pace: all paces welcome
- Social: regroup before and after the run, then coffee at Framm's
- Updates: Instagram first; WhatsApp group kept private through Instagram DM or after runs

## Netlify deployment

This project is ready for Netlify as a static site.

### Deploy checklist

1. Push or merge the latest code to GitHub.
2. Go to <https://app.netlify.com/> and sign in.
3. Select **Add new site** → **Import an existing project**.
4. Choose GitHub and select this repository.
5. Keep the build command empty. This is a static site.
6. Use the repo root as the publish directory. The included `netlify.toml` sets `publish = "."`.
7. Deploy the site.
8. Open the deployed Netlify URL and test the homepage links.
9. Submit the `run-updates` form once.
10. In Netlify, open **Forms** and confirm the submission appears.
11. Add the Netlify URL to the Instagram bio.
12. When ready, connect the custom domain, for example `carolinarunningclub.ro`.

The C# project is only for local preview. Netlify still deploys the static files from the repo root.

## Content to customize before launch

- Add approved run photos to `assets/photos` using the expected filenames in `assets/photos/README.md`
- Replace placeholder testimonials with real member quotes later
- Add a domain once you choose one, likely `carolinarunningclub.ro`
- Keep WhatsApp private through Instagram DM or after runs unless you decide to publish an invite link

