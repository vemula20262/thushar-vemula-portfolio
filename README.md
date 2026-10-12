# Thushar Vemula portfolio

Static HTML/CSS portfolio. Preview: `python3 -m http.server 4173 --directory dist`.

`build.py` generates homepage, case-study pages, background page, and favicon. Edit project content there and run `python3 build.py`. The stylesheet and browser script live directly in `dist/` and are preserved by the generator.

## Before public release

- Add the user's supplied photograph to About with appropriate alt text.
- Experience titles, dates, and education follow the latest user-supplied resume. Project contribution attribution remains a separate review item.
- The resume page embeds the supplied PDF and offers direct viewing and download. Timeline summaries use the five roles in that PDF.
- Project visuals are original CSS concept illustrations, explicitly labeled; replace with approved real screenshots if desired.
- Google Fonts is used with system fallbacks. All content and navigation work without JavaScript; only copy-email uses JavaScript.

Initial release is a private design review. Public access must be verified before using the URL in applications.
