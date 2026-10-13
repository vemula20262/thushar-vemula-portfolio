# Thushar Reddy Vemula — portfolio handoff

Updated October 13, 2026 (America/Phoenix). This is a working context summary, not a verbatim chat transcript. Read this before editing. The user wants another chat to continue the same portfolio without starting over.

## User and objective

Name: **Thushar Reddy Vemula**. Build a polished, personal portfolio for job applications. The user prefers iterative implementation and live previews, strong visual design, simple navigation, and plain-language explanations. Preserve their changes from GitHub before editing. They are happy to experiment, but want the ability to restore earlier designs.

The user authorized publishing changes to their existing Vercel project and pushing complete source to GitHub. Do not create a replacement project. Do not buy domains or enable paid services without authorization. Deployment does not automatically happen on GitHub push in the last verified setup.

## Where everything lives

- Main public URL: https://thushar-reddy-vemula.vercel.app/
- GitHub repository: https://github.com/vemula20262/thushar-vemula-portfolio
- Repository is **private**; default branch `main`; local remote is named `github` (not `origin`).
- Local checkout: `/Users/thusharreddy/Documents/ChatGPT/Resume Maker/portfolio`
- Parent workspace: `/Users/thusharreddy/Documents/ChatGPT/Resume Maker`
- Vercel account login: `vemulathusharreddy-2650`
- Vercel team/scope: `thushar-works` (Thushar Works), Hobby plan at last check.
- Vercel project name: `thushar-vemula-portfolio`. It has NOT been renamed to match the shorter domain.
- Additional Vercel domain aliases: `thushar-vemula-portfolio.vercel.app` and `thushar-reddy-vemula-portfolio.vercel.app`.
- Original ChatGPT Sites URL: https://thushar-vemula-portfolio.happyroot5.chatgpt.site/
- Original Sites ID: `appgprj_6acc43a0f2908191bfe6112d4d45cff5`.
- The original Sites audience was made public. It is now an older deployment: recent redesigns have been published to Vercel only. Do not claim both hosts are synchronized.

The current `.vercel.app` address is a free provider subdomain. No personal domain was purchased. The website does not depend on the laptop or chat remaining open.

## Technology and source of truth

Buildless static HTML/CSS/JavaScript with a Python page generator. No React/Next.js build is needed. The current stack supports the animations; the user allows a stack change if needed for the vision, but avoid unnecessary migration.

- `build.py`: page content, shared header/footer/contact dialog, SEO generation. Generates homepage, project pages, resume page, favicon, robots.txt and sitemap.xml.
- `dist/index.html`: generated homepage. Edit the generator for lasting HTML changes.
- `dist/style.css`: hand-maintained styles, currently many appended override blocks. Generator preserves it.
- `dist/app.js`: hand-maintained interactions, preserved by generator.
- `dist/projects/forma/index.html`, `dist/projects/elastic/index.html`, `dist/projects/interviewcoach/index.html`: generated case studies.
- `dist/resume.html`: original resume preview and download.
- `dist/assets/`: headshot, company/technology logos, original PDF, resume preview, pin/car assets.
- `vercel.json`: framework null, empty install/build commands, outputDirectory `dist`. Vercel serves committed generated output; run `python3 build.py` before publishing generator changes.
- `.gitignore`: excludes `.vercel/`, `.DS_Store`, `__pycache__/`, `.env*`.
- `.openai/hosting.json`: original Sites identity, retained. Do not delete or change it casually.
- `ASSET_SOURCES.md`: attribution details.
- `DESIGN_RESTORE.md`: original design restore instructions.

Workflow from checkout:

```sh
git status --short
git fetch github
git rev-list --left-right --count HEAD...github/main
# If appropriate and clean, fast-forward; preserve user work.
git merge --ff-only github/main
python3 build.py
node --check dist/app.js
# Review and verify the relevant changes, then commit/push.
git push github main
npx --yes vercel@latest deploy --prod --yes --project thushar-vemula-portfolio --scope thushar-works
```

CLI was authorized via Vercel device login. Never read or expose its credentials. If expired, ask the user to authorize a fresh login. The earlier GitHub auto-deployment connection attempt failed because a GitHub Login Connection was missing in Vercel. Manual deployments work. Don't assume it has since been connected.

## Current design and interactions

Warm off-white background with forest-green text, Manrope and DM Sans, restrained sage/lavender/peach/blue accents. Top-left TV monogram and capitalized `Thushar.` wordmark. User wanted uppercase T. Hero copy is “Hi, I’m Thushar. I turn what if into what’s next.”

Main page order: hero introduction, About, Experience, selected Projects and further work, Skills & technologies, Education, Contact, compact footer.

### Latest animation change

Commit `08671b1`: the first line (`.written-intro`) replays its writing reveal when at least 60% enters the viewport. It resets only after leaving the viewport. It does not loop continuously while the reader stays there. IntersectionObserver toggles `is-writing`; reduced-motion preference disables animation. Without JS/IntersectionObserver the text remains visible. JS syntax checked; successfully deployed to Vercel on October 13, 2026. Deployment: `https://thushar-vemula-portfolio-o97u24un0-thushar-works.vercel.app`, with the main domain updated.

### About/photo

Uses the supplied genuine headshot in a tilted white Polaroid-style frame with soft paper shadows. A shaded pink/red Fluent 3D pushpin sits at its top. The user's original pin asset is retained for fallback. Photo itself has not been AI-altered.

### Experience map

Current version is a **compact horizontal, game-map-inspired chapter journey**. Soft lavender curved road, five colored circular milestones, 3D racing-car image, and lightly tilted Polaroid company cards. Wide screens show all five; narrow screens scroll horizontally inside the section without overflowing the whole page.

Each card has an `Explore chapter` button. Selecting one animates the car along the SVG road using requestAnimationFrame and getPointAtLength. After arrival a shared panel below reveals a short contribution summary. Rapid selection cancels the previous animation. Reduced motion jumps directly. Panel uses aria-live; controls use aria-pressed. No continuous autonomous driving.

Roles stay newest-first:
1. Arizona State University — Software Automation Aide, Jul 2026–Present, Tempe AZ.
2. SimCoach — Software Engineer · Founding Project, Dec 2025–May 2026.
3. MyWanderLust.in — Full Stack Developer, Aug 2024–Jul 2025, Delhi India.
4. Invisible AI — AI Data Engineer · Freelance, Sep 2024–Feb 2025, Remote India.
5. MIDAS Lab · IIIT Delhi — Undergraduate Research Assistant, Aug 2022–Jan 2023, New Delhi India.

Card labels contain no long work descriptions; selected detail panel does. This supersedes an earlier user preference for no descriptions, because the user later explicitly requested revealing work as the car arrives.

Summaries came from the user's attached PDF (the exact PDF in dist/assets). They avoid precise achievement metrics. Some earlier career-context files contain contradictory dates/employers: do not silently swap in those older variants.

### Projects, skills, education

Selected work: Forma, Elastic Vision (display name for AWS face recognition), InterviewCoach. Further work links: federated learning, ClickLess AI, microbiome informatics. Project graphics are labeled concept illustrations, not real screenshots.

Skills: four groups (Languages, Applications & APIs, AI & Data, Cloud & Engineering). Every technology has a logo/symbol; chips lift and change color on hover; motion respects reduced-motion preference.

Education has both university logos: ASU MS Computer Science Aug 2025–Present; IIIT Delhi BTech Electronics and Communication Engineering Aug 2020–May 2024.

External links use a small square external-link SVG, plus accessible new-tab descriptions. User disliked bare large arrows and visible “New tab” badges. Do not reintroduce them.

### Contact and footer

Latest version replaced the oversized centered green CTA plus repetitive three-column footer with a two-column lavender contact block: “Good work starts with a hello.” One Say hello button, email address, GitHub and LinkedIn links. Below is a slim footer with name, role/location, copyright and Back to top. Old duplicate quick links/contact lists are intentionally removed.

Say hello opens a native `<dialog>` with Name, Email, optional Phone, Message. Required fields validate natively. Escape, close button and backdrop click dismiss it. Mailto remains the no-JS fallback and direct-email option.

**Important unresolved setup:** form posts to `https://formsubmit.co/vemulathusharreddy@gmail.com`. FormSubmit requires a first submission and email activation by the owner. We told the user to do this; there is no evidence activation or inbox delivery succeeded. Do not claim email forwarding is fully verified. CAPTCHA is enabled. Submission moves to the provider verification page; this is disclosed in the form. No custom backend, credentials, database, or tested delivery receipts exist. Future chat should verify activation with the user if delivery matters.

Contact: `vemulathusharreddy@gmail.com`; LinkedIn `https://www.linkedin.com/in/thusharvemula`; GitHub `https://github.com/vemula20262`; phone in resume `+1 623-239-9720`; location Tempe, Arizona.

## SEO and user-authored changes

User added SEO directly in GitHub at `0a9e045`. We fetched and preserved it, then deployed it to Vercel. It includes robots.txt, sitemap of all five pages, correct per-page canonical URLs, Person/WebSite JSON-LD on homepage, Open Graph and Twitter metadata. Canonical base is the shortest current domain. Portrait is temporary OG image. Google indexing/ranking is NOT guaranteed; no Search Console submission was verified.

## Assets and source files

- User resume: `/Users/thusharreddy/Downloads/Vemula_Thushar_Resume.pdf`; site copy `dist/assets/Vemula_Thushar_Resume.pdf`.
- Headshot: `/Users/thusharreddy/Downloads/thushar_placements/Vemula - Thushar Reddy1D9A3019_MDP_.jpg`; site copy `thushar-portrait.jpg`.
- Original red pin: `dist/assets/red-pushpin.png`, supplied by user, unchanged.
- Current pin: `dist/assets/fluent-pin-3d.png`.
- Car: `dist/assets/race-car-3d.png`.
- Fluent assets from https://github.com/microsoft/fluentui-emoji, MIT, license included in `dist/assets/fluent-emoji-LICENSE.txt`. These are shaded raster renders, not interactive 3D models.
- SimCoach and MyWanderLust SVG marks are custom portfolio marks, not asserted official logos.
- Invisible AI logo was selected using the company the user explicitly linked. Do not infer employer facts from that logo.

## History / restoring designs

- `d6547d4`: original alternating timeline and small CSS green pin.
- Permanent GitHub tag: `restore-before-journey-redesign-2026-10-13` points to that version.
- User-facing restore phrase: **“Restore the design before the journey redesign.”**
- `5e64257`: winding vertical Polaroid journey, exact user red pin.
- `a77ffbb`: compact horizontal cards, Fluent car and pin.
- `706b3dc`: interactive curved map, contribution summaries, initial writing effect, simplified contact/footer.
- `08671b1`: replay writing when introduction re-enters viewport.

Restore selectively rather than hard-resetting and losing later content/SEO. Prior versions can be previewed or recovered from Git history. User wanted experiments to be reversible.

## Validation and preview notes

Recent checks: chapter interaction changed the detail panel to SimCoach after car arrival; contact dialog opened; mobile at 390px had document width exactly 390px; horizontal scroll stays within map; desktop and mobile screenshots reviewed. JS syntax checked. Email delivery remains unverified.

Preview: `python3 -m http.server 4173 --directory dist` (an earlier server may still run). Use available browser automation according to its tool documentation. Do not submit real contact tests without intent; CAPTCHA must be completed by the user.

Review screenshots in parent `review/`:
- `interactive-journey.png`: current game-map design before viewport replay change.
- `horizontal-journey.png`: earlier straight horizontal map.
- `journey-redesign.png`: earlier winding vertical map.

A handoff chat should first read this file, inspect git status/remotes/current branch, fetch GitHub, and understand the user's new request before editing. Keep the live URL and existing deployment project. Continue in small reviewable changes; report what shipped and any real limitation.

## Latest follow-up: portrait placement + experience proposal

The user now dislikes the static pins and crowded experience cards. Approved photo behavior: photo initially absent, slides/settles onto a board when About scrolls into view, then a dimensional tack presses down with a tiny shaded puncture. No hands. Implemented via `.portrait-stage`, custom `portrait-tack.svg`, CSS staged animations and a one-time IntersectionObserver. Reduced motion and no-JS preserve a visible photograph. Original supplied image is unchanged.

Experience was explicitly **not** redesigned in this follow-up: user requested ideas first. See `EXPERIENCE_OPTIONS.md` for four proposals and verified references. Recommendation is a compact map with logo milestones and one large detail panel, removing the five crowded cards. Await user selection before implementing.
