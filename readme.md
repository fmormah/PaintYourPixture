# Unreal Cloud Services Web Frontend Test

Create a starter app with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), it should run with `yarn run start` and be accessable in a browser at http://localhost:3000

## Project

Implement the included static design as a responsive single-page application in Create React App.

The project is pretty open ended to leave you some freedom of choice on how to structure the application but we have provided some initial guidance and UX expectations below.

## Guidance

- [x] Make 2 routes, home and individual article page (clicked from the cards).
- [x] Should be responsive from mobile to desktop.
- [x] Support latest evergreen browsers.
- [x] Use npm modules of your choosing (Router, UI Library, Slider, etc).
- [x] Use whatever CSS approach you are most comfortable with (CSS, JSS, Sass, emotion, etc.).
- [x] The article content should be added through a mocked API endpoint with the provided `articles.json`.

### User Experience

- [x] The collapsed sidebar menu should fade to transparent as you scroll, hamburger menu should remain in position.
- [x] Add a way to return home from article pages.
- [x] Sidebar menu should expand when the hamburger is clicked and contain a close icon when open.
- [x] "Like" (heart) icon should turn red when clicked.
- An additional "nice to have" is optional if time allows but is not necessary:
  - Page transitions.
  - [x] Article menu popover on cards.
  - Simulation of slow loading content.
  - [x] Smooth scroll to "Start up Resources" when "Paint your Pixture" in left sidebar is clicked.
  - "Like" (heart) icon maintains state after page reload.

### Some Tips:

- [x] Font used is [Open Sans](https://fonts.google.com/specimen/Open+Sans).
- [x] Exported assets are in the `assets` directory.
- `articles.json` is in the `data` directory, feel free to edit this to your liking.
- [x] Use the included `Design.sketch` file for additional design specifics.
- [x] Keep performance and interaction states in mind (hover, focus, transitions, etc.).
- Please explain why you chose each npm module.

Thank you for taking the time to complete our assessment. If you have any questions, don’t hesitate to ask!

