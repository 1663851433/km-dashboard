# KM Dashboard

Knowledge Management Dashboard built with Next.js 13+

## Project Structure

```
├── app/                    # Next.js 13+ App Router
│   ├── api/               # API Routes
│   ├── (routes)/         # App Routes
│   ├── layout.tsx        # Root Layout
│   └── page.tsx          # Home Page
├── public/                # Static Assets
│   └── assets/           # Images, Fonts, etc.
├── src/
│   ├── components/       # Reusable Components
│   ├── hooks/           # Custom React Hooks
│   ├── services/        # API Services
│   ├── styles/          # Global Styles
│   ├── types/           # TypeScript Types
│   ├── utils/           # Utility Functions
│   ├── constants/       # Constants and Config
│   └── context/         # React Context
├── package.json
└── tsconfig.json
```

## Features

- Next.js 13+ App Router
- TypeScript
- Tailwind CSS
- API Routes
- Responsive Design

## Development

- Follow the file structure convention
- Use TypeScript for type safety
- Follow the existing code style
- Add comments for complex logic
- Keep components small and focused

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Recharts
- Radix UI

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

