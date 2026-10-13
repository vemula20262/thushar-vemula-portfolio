# Experience layout options — review before implementation

October 13, 2026. These are proposals, not deployed changes. The current map remains unchanged. The photo-placement animation is a separate approved change.

## Why the current experience section feels crowded

Five equally weighted cards compete with a road, car, pins, dates, role labels, and five buttons. Reducing padding further would make it worse. The next iteration should separate navigation from reading: small company selectors, one generous content area.

## 1. Small journey map + one large chapter (recommended)

Keep five company-logo milestones on a gently curved track. Remove the five pinned cards entirely. The selected milestone drives the car to its destination; beneath it, one large panel shows company, role, dates, and two short contribution points. On a phone, the selectors scroll but the detail panel stays within the screen.

Visual structure: a low map strip across the top, then a wide two-column panel with a large company logo on the left and text on the right. No pins in experience; reserve the physical pin story for the portrait.

Why: closest to your game-map idea, far less congested, no repeated descriptions/buttons, and enough room for recruiters to read.

Reference: Robby Leonardi's own landing page describes his interactive résumé as a combination of résumé and video game: https://rleonardi.com/ . The interactive page timed out during this research, so this is inspiration from its documented concept, not a claim to have tested its current animation. Our proposal is a lightweight adaptation, not a copy.

## 2. Seán-style career ribbons

Use broad, staggered rounded bars containing company logo, role and dates. Select a bar to expand a short contribution summary. Keep soft sage or one subtle accent rather than separate bright colors for every job. The car could be a small active-role marker, but would not need its own road.

Why: shows progression and overlapping roles clearly, with more breathing room than five boxed cards. Less game-like; very readable.

Direct reference reviewed in browser: https://www.seanhalpin.xyz/about . His career history uses staggered, horizontally placed rounded bars with company, role and years.

Reference screenshot saved in `../review/sean-career-reference.png`.

## 3. Hanging-photo gallery

An original direction based on your wall-decoration idea: three large company snapshots visible at a time on a subtle curved string, with small clips instead of repeated pushpins. The central selected card is larger. Previous/next controls and swipe reveal the other roles; a short work summary sits below the selected photo.

Why: most tactile and personal; aligns with the portrait. Tradeoff: some roles are initially off-screen, and it communicates a gallery rather than a career route. Avoid both a car road and hanging string in the same section.

This is our proposed interpretation of your idea, not an attributed feature from a researched portfolio.

## 4. Quiet experience rows

Dates in a narrow column, company and role in a broad text column, two brief work points beneath. Gentle hover highlighting; no pins, car, or road.

Direct reference: https://brittanychiang.com/#experience . The current site presents dated roles, contribution descriptions and technology tags in a clear sequence. You previously found this style decent but less distinctive, so this is a readability benchmark rather than my first recommendation.

## Decision

Recommend option 1 for your stated vision. Use option 2 if you want more designer polish and less game presentation. Keep the portrait animation as the single physical pin interaction; repeating it on every job dilutes the effect.

Do not implement an experience redesign until the user chooses or gives further direction.
