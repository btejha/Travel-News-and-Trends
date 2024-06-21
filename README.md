This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

By Tejha Bollu
# Travel News and Trends

## Overview
This is a simple web application to display travel news and trends using the NY Times API.
The app is built with Next.js and styled with Mantine.

## Architectural Decisions
- **Next.js:** Chosen for its ease of use and built-in server-side rendering. Verion: 14.2.4
- **Mantine:** Used as the component library for consistent and easily customizable styling. Version:^4.0.0
- **Axios:** Used for making HTTP requests to the NY Times API. Version:^1.7.2
- **Jest & React Testing Library:** Used for unit testing to ensure reliability. Version: ^29.7.0

## Features
- Display a list of travel news articles.
- Show more details of an article when clicked.
- Responsive design and user-friendly interface.

## Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Add your NY Times API key in `lib/api.js`
4. Run the development server: `npm run dev`
5. Run tests: `npm test`



## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
