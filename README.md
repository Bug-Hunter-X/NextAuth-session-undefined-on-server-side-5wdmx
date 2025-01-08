# NextAuth Session Undefined on Server-Side

This repository demonstrates a common issue encountered when using NextAuth.js for authentication in Next.js applications. The problem arises when the `unstable_getServerSession` function returns `undefined` unexpectedly, even when a user is logged in.

## Problem Description

The provided `bug.js` file contains a Next.js page that attempts to access the user session using `unstable_getServerSession`.  However, under certain circumstances, the session variable remains undefined, leading to unexpected behavior.

## Solution

The solution, located in `bugSolution.js`, addresses the issue by ensuring proper configuration and handling of the NextAuth session.  It includes thorough error handling and demonstrates how to correctly manage session access within the server-side rendering process.

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Ensure you have a NextAuth configuration properly setup (See NextAuth documentation).
4. Run the development server: `npm run dev`

This example uses the `getServerSideProps` function.  Adapt it to your specific implementation if necessary.