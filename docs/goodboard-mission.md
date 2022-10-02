# **Cardboard Citizens**

## Goodboard frontent

This document aims to provide all the information on the cardboard citizen website’s goodboard page.

### I - Goal

The goodboard is like a game where the user can create an account, login and participate in some missions. This page introduce the concept of Good2Earn (Make something good to earn rewards)

### II - User experience

The user will use this page will have the following options:

- Explore the available missions
- Validate / Claim a completed mission
- Spend their points on rewards
- Explore the cardboard citizens news
- Compare their score to other players

To do so, the page is separated into different parts

1. **Mission slider**

   The list of all the available missions, represented as clickable cards

2. **News slider**

   The list of all the recent news, represented as clickable cards

3. **Leaderboard**

   The list of all the player with the highest records

### III - Technical aspects & Workflow

The page will be part of an already existing website, and will be available through the **breakroom button** of the [post office page](https://www.cardboardcitizen.com/immersion/post-office).

The website is using the following stack, **you must know these to participate in the mission.**

- VueJS - [https://vuejs.org/](https://vuejs.org/) (version 3, using composition API)
- Typescript - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- Histoire - [https://histoire.dev/](https://histoire.dev/) (design system framework, don’t worry if you don’t know it)

Some components are already done, you can browse the available components using Histoire by running `npm run story:dev`

The components are single file components, and they can be found in two folders:

- Components - For the components reused globally
- Views - For the components that are used just for a specific page

You will collaborate using git and github, you will create your own branch, push your progress as much as possible and make a pull request to submit your changes.
