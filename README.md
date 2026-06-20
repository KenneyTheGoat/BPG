# Baloyi Pioneering Group (BPG) Website

Modern responsive corporate website for Baloyi Pioneering Group, a technology-driven group spanning software, AI, healthtech, consulting, and property innovation.

## Features

- React + Vite frontend
- Tailwind CSS styling
- Responsive landing page for BPG
- Internal division pages:
  - `/technologies`
  - `/ai`
  - `/healthtech`
  - `/consulting`
  - `/property`
- Reusable division page layout
- Config-driven division content
- Division-specific enquiry form using `mailto:`
- Local AI-generated visual asset for division imagery

## Project Location

The website app is inside:

```text
outputs/
```

## Run Locally

```bash
cd outputs
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Build

```bash
cd outputs
npm run build
```

## Notes

The enquiry forms open the user's email client with the relevant BPG division prefilled in the subject and message body. No backend is required.
