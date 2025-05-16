# Savings Group Web App

This is a simple web application that helps manage a student savings group. It allows students to register into savings tiers, calculates their weekly interest and total savings, and shows an overview of all registered members.


## Setup Instructions

Built with [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Clone this repo 
2. In your local dev environment `npm install` to install all the dependencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://localhost:5173/

## How to Use the App
1. **Start the App**:
    Run it using your local development server (e.g., npm run dev if using Vite, or npm start if using CRA).

2. **Welcome Page**:
     You'll first see a welcome screen. Click "Get Started" to proceed.

3. **Register a Student**:
      Enter the student’s name.

- Select a tier:

   - Tier 1: ₦10,000 — 5% interest

   - Tier 2: ₦20,000 — 10% interest

   - Tier 3: ₦30,000 — 20% interest

- See calculated interest and total return.

- Click Join to add them to the group.

4. **View the Dashboard**: Once a student joins, you'll see a dashboard with:

- All students and their details.

- Total group savings.

- Students can withdraw their balance, and that takes them out of the saving group

5. **Add More Students**:

- If the group isn’t full (less than 12 members), click “Add More Students” to bring back the registration form.

