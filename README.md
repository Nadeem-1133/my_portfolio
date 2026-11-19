# NK Build Studio Website

Agency-level single-page website for NK Build Studio, led by Nadeem Khan.

## Overview

NK Build Studio presents mobile app development first, with web development, WordPress development, QA testing and technical support as complementary services. The site uses black backgrounds with the existing teal and mint brand accents and avoids publishing personal education details.

## Features

- Mobile-app-first studio positioning
- Services, process, selected work and contact sections
- Responsive black theme with teal and mint accents
- Custom NK monogram, coordinated founder portrait and responsive service cards
- Scroll reveals, card hover motion and reduced-motion support
- Direct WhatsApp and Gmail contact cards
- Service-specific conversation starters from service cards

## Technologies Used

- React
- JavaScript ES6+
- Tailwind CSS
- HTML5

## Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the portfolio in your browser

## Content

Main content lives in `src/App.js`. Update services, project proof and contact details there. Keep public claims, case studies, testimonials and pricing verified before publishing.

The studio layout and motion styles live in `src/studio.css`. Generated image assets and their prompts are documented in [docs/brand-assets.md](docs/brand-assets.md). Service cards carry the selected service into the WhatsApp message and email subject. The WhatsApp and Send an email cards open WhatsApp and Gmail respectively in a new tab, with your address and a conversation starter ready. Visitors review and send the message in their chosen app. No form, EmailJS account, API keys or backend are required. Update the recipient email and WhatsApp number in `personalInfo` in `src/App.js`.

## Theme Colors

All theme colors live in [`public/design/colors/theme.css`](public/design/colors/theme.css). Edit only this file to change the site's palette. CSS variables act as shared constants for every component and Tailwind utility; do not add hardcoded colors to component or layout files.

`--background-rgb: 0 0 0` sets the black background. Navigation, sections, footer, cards and contact surfaces follow this value through `--surface-rgb` and `--surface-raised-rgb`. Text, buttons, artwork and accent colors have separate variables so background changes preserve their colors. For example, change `--background-rgb` to `20 108 99` for a teal background or edit `--accent-rgb` to change highlights.

The theme stylesheet loads before the app, so the initial page also uses the selected background. `npm start` and `npm run build` automatically copy the background color into browser metadata and the install-screen manifest. After editing the theme while a development server is running, refresh the page and run `npm run theme:sync` to update that metadata. Images keep their original embedded colors.

Use named utilities such as `bg-background`, `text-content`, `border-border/30`, and `hover:bg-secondary`. For custom opacity use brackets, for example `bg-surface/[0.82]`. Avoid `bg-[var(--surface)]/82`: Tailwind 3 does not generate that utility.

## Deployment

To deploy this portfolio to production:

1. Build the project:

```bash
npm run build
```

2. Deploy the `build` folder to your hosting service of choice (Netlify, Vercel, GitHub Pages, etc.)

## License

This project is open source and available under the [MIT License](LICENSE).
