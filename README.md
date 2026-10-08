# Next Level Gaming App

## Project Overview

The **Next Level Gaming App** is a mobile application developed for the
Next Level Gaming & Esports Arena project. The app provides users with
an interactive way to explore gaming packages and experiences, view
information about Next Level, calculate fees, and access contact
information.

The application was developed as a **group project**, with different
screens assigned to individual group members.

## Technologies Used

-   React Native
-   Expo
-   TypeScript
-   Expo Router
-   Visual Studio Code
-   Android Emulator
-   Git & GitHub

## Application Structure

The application uses Expo Router for navigation.

``` text
NextLevelGamingApp/
├── assets/
│   └── images/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── home.tsx
│   │   ├── about.tsx
│   │   ├── overview.tsx
│   │   ├── calculator.tsx
│   │   ├── contact.tsx
│   │   └── experience/
│   │       └── [id].tsx
│   └── components/
│       ├── AppHeader.tsx
│       └── BottomNav.tsx
├── app.json
├── package.json
└── README.md
```

## Main Features

### Navigation

The application includes navigation between the main sections of the
app. A bottom navigation bar provides quick access to:

-   Home
-   About
-   Overview
-   Fees
-   Contact

A menu is also available from the header to allow users to navigate
between the main sections.

### Gaming Packages and Experiences

The application provides information about gaming packages and
individual gaming experiences, including:

-   Ultimate Gamer Pass
-   VIP Gaming Experience
-   Esports Training Package
-   Birthday Party Package
-   Virtual Reality Experience
-   Racing Simulator Challenge
-   Escape Room Challenge

### Fee Calculation

The application includes a fee-calculation section for calculating the
cost of selected bookings.

The pricing structure includes:

-   1 booking: 0% discount
-   2 bookings: 5% discount
-   3 bookings: 10% discount
-   More than 3 bookings: 15% discount
-   VAT: 15%

### About Section

The About section provides information about Next Level, including its:

-   History
-   Vision
-   Mission
-   Goals

### Contact Section

The Contact section provides users with access to the application's
contact information and contact functionality.

## Design

The application's visual design follows a gaming and esports theme.

The main design direction uses:

-   Dark navy/charcoal backgrounds
-   Bright green accents
-   Pink accents
-   Cyan accents
-   Purple accents
-   White text

The interface was designed to provide a modern gaming-inspired
appearance while keeping navigation and information easy to understand.

## Installation and Setup

### Prerequisites

Before running the application, make sure the following are installed:

-   Node.js
-   npm
-   Expo
-   Android Studio with an Android emulator, or a compatible physical
    Android device
-   Visual Studio Code

### Installing Dependencies

Open the project folder in VS Code and run:

``` bash
npm install
```

If required, install the safe-area package with:

``` bash
npx expo install react-native-safe-area-context
```

### Running the Application

Start the Expo development server:

``` bash
npx expo start
```

To clear the Expo cache when troubleshooting:

``` bash
npx expo start -c
```

Once Expo starts, press:

``` text
a
```

to open the application on an Android emulator.

## GitHub Collaboration

This application was developed collaboratively using Git and GitHub.

A typical workflow for contributing to the project is:

``` bash
git pull origin main
```

Make the required changes, then:

``` bash
git add .
git commit -m "Describe your changes"
git push origin main
```

Group members should pull the latest version of the repository before
starting new work where possible, so that they are working with the most
recent version of the application.

## Troubleshooting

### Expo Cache Problems

If the application does not load correctly or appears to be stuck, stop
the Expo development server and restart it with:

``` bash
npx expo start -c
```

### Android Emulator Problems

If the emulator becomes stuck while launching the application:

1.  Stop the Expo development server.
2.  Restart the Android emulator.
3.  Wait for the Android home screen to load completely.
4.  Start Expo again using `npx expo start -c`.
5.  Press `a` to launch the Android application.

### Navigation Problems

The application uses Expo Router. Routes are located inside the
`src/app` directory.

Dynamic experience pages are located inside:

``` text
src/app/experience/[id].tsx
```

## Group Members

-   **Tamia** --- Screens 1, 2 & 3
-   **Dave** --- Screens 4, 5 & 6
-   **Buhle** --- Screens 7 & 8
-   **Noluthando** --- Screens 9, 10 & 11
-   **Oratile** --- Screens 12 & 13

Each group member was responsible for developing their assigned screens
and contributing to the overall application.

## Project Purpose

The purpose of the application is to provide a mobile interface for the
Next Level Gaming & Esports Arena. The project demonstrates mobile
application development concepts including user interface design,
navigation, reusable components, user interaction, data handling, and
application functionality.

## Author / Group

**Next Level Gaming & Esports Arena --- Group Project**

Developed using React Native and Expo.
