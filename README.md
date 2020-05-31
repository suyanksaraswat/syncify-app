# Syncify

_Syncify is a tool to listen to podcasts and audio in ‘sync’ with your friends and enable real conversations around the content you love._

Listening to content is an often lonely pursuit where you just listen to things in your own world, disconnected from your friends. It is hard to talk to friends about things when they listen to something you listened to three months later (or never). Syncify allows users to listen to audio (podcasts, books, and music) in sync and encourage conversation with real people and be less lonely.

Users can listen at the exact same time (live-sync) or catch up on things the other has listened recently (). Syncing awesome 😝

## Covid-19

Due to the covid-19 crisis this app is a more urgent priority with it's purpose of reducing feelings of isolation. As such I am making it Open source to get things moving faster and contribute to maintaining the sanity of many people going through hard times.

## Become a user

The app isn't released yet but you can signup to be a beta tester here

[Syncify Sign Up](https://syncifyapp.com)

---

### Background work

This idea has been worked at during Hack the Press hackathons where a few different basic prototypes have been built.

[SyncKick - Database demo](https://github.com/samjam48/SyncKick)

-   basic syncing between demo users using PostgreSQL storing of data

[Synckick - Commenting demo](https://github.com/samjam48/sync-kick-hack)

-   Creating of transcripts on podcasts allowing users to add comments as they listen and converse with their friends around content

---

### Run locally

1. Make sure you have a global install of Expo
   `$ yarn global add expo-cli`

2. Clone the repo.

3. Create a .env file and ask a dev for auth0 details or use your own test login set up.

4. Run these commands inside:
   `$ yarn install`

`$ expo start`

---

### Storybook
Storybook can be started with the following commands depending on the platform
```
 - yarn run ios-storybook
 - yarn run android-storybook
```

Stories live in the `storybook/stories` folder. To add a new story, create a file in the folder
and add your story in that file. Then add the component in `storybook/stories/index.js` like so:
```
storiesOf('UI Components', module)
	...
	.add('Component', () => <Component />)
    ...
```
---

### Contributing

You can assign yourself tasks to work on the priority features. Or build features you feel are useful and make a PR and we'll happily review.

#### Pull requests

We use a development branch

-   Create your branches off 'development'
-   Branches should be labelled with relevant tags at the start - `feat/user-login`, `bug/loading-error`
-   Pull requests should be made into 'development'

#### Say hi

Request to join the Slack group

Connect with me at [LinkedIn](https://www.linkedin.com/in/sharris48/)

Thank you!

---

### Database

The current database structure for the MVP (subject to change)

![](https://i.imgur.com/BsqcZPC.png)

Details and code here - https://dbdiagram.io/d/5e8648fb4495b02c3b892c24

---

### License

This project is licensed under the GNU License - see the LICENSE.md file for details
