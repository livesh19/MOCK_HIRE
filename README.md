Practice mock interviews with AI agents.
MOCK_HIRE is a web application designed to simulate real interview scenarios using AI, helping users prepare effectively for job interviews.

🚀 Features
AI-Powered Interviews: Engage in mock interviews with AI agents that simulate real interviewers.

User Authentication: Secure sign-up and login functionalities using Firebase Authentication.

Interview Management: Track and review past interviews.

Responsive Design: Optimized for various devices to ensure a seamless user experience.

🛠️ Tech Stack
Frontend: Next.js 14, TypeScript, Tailwind CSS

Backend: Firebase Authentication, Firestore

Deployment: Vercel

PROJECT SETUP -->

1.First, Clone the repository:

```bash
git clone https://github.com/livesh19/MOCK_HIRE.git
```

2.Install dependencies:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
3.Create .env.local file and add the following'
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=key
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=key
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=key
NEXT_PUBLIC_FIREBASE_APP_ID=key
GOOGLE_GENERATIVE_AI_API_KEY=key
NEXT_PUBLIC_VAPI_WEB_TOKEN=key
NEXT_PUBLIC_VAPI_WORKFLOW_ID=key

FIREBASE_PROJECT_ID=key
FIREBASE_CLIENT_EMAIL=key
FIREBASE_PRIVATE_KEY=key
```

4.Run the development server:
```bash
npm run dev
# or
yarn dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
