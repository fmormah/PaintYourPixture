# react-sass-Boilerplate

Boilerplate code for getting started on a react+sass project.

# Node-react+sass-heroku is available [here](https://github.com/rajaraghav/node-react-heroku-Boilerplate).

## About setup

* sass 7-1 pattern.
* implemented using scss, but can be changed.
* build process consisting concat, auto-prefix, compress, compile operations.
* ./client/src/sass/App.scss gets compiled to ./client/src/App.css.
* node-sass watches for any change in file, i.e. changes take effect without reloading.

## Downloading/cloning and installing dependencies directions.

* download/clone repository by typing following command in terminal.

```
git clone -b master --single-branch https://github.com/rajaraghav/react-sass-boilerplate.git

//this would allow you to clone only the sass branch.
```

* open terminal.
* go to repo location, inside terminal window.
* start typing.

```
npm i //install client dependencies.
```

## Running Sass watcher and react concurrently

```
//inside repo directory run this command on terminal.

npm run startr

//open localhost:3000 in browser.
```

## Running react only, without watching/compiling sass.

```
//inside repo directory run this command on terminal.

npm start

//open localhost:3000 in browser.
```

## Building css files(optional)

```
//inside repo directory run this command on terminal.

cd client
npm run build:css

//find your files in ./client/css/
```


//////

# Unreal Cloud Services Web Frontend Test

Create a starter app with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html), it should run with `yarn run start` and be accessable in a browser at http://localhost:3000

## Project

Implement the included static design as a responsive single-page application in Create React App.

The project is pretty open ended to leave you some freedom of choice on how to structure the application but we have provided some initial guidance and UX expectations below.

## Guidance

- Make 2 routes, home and individual article page (clicked from the cards).
- Should be responsive from mobile to desktop.
- Support latest evergreen browsers.
- Use npm modules of your choosing (Router, UI Library, Slider, etc).
- Use whatever CSS approach you are most comfortable with (CSS, JSS, Sass, emotion, etc.).
- The article content should be added through a mocked API endpoint with the provided `articles.json`.

### User Experience

- The collapsed sidebar menu should fade to transparent as you scroll, hamburger menu should remain in position.
- Add a way to return home from article pages.
- Sidebar menu should expand when the hamburger is clicked and contain a close icon when open.
- "Like" (heart) icon should turn red when clicked.
- An additional "nice to have" is optional if time allows but is not necessary:
  - Page transitions.
  - Article menu popover on cards.
  - Simulation of slow loading content.
  - Smooth scroll to "Start up Resources" when "Paint your Pixture" in left sidebar is clicked.
  - "Like" (heart) icon maintains state after page reload.

### Some Tips:

- Font used is [Open Sans](https://fonts.google.com/specimen/Open+Sans).
- Exported assets are in the `assets` directory.
- `articles.json` is in the `data` directory, feel free to edit this to your liking.
- Use the included `Design.sketch` file for additional design specifics.
- Keep performance and interaction states in mind (hover, focus, transitions, etc.).
- Please explain why you chose each npm module.

Thank you for taking the time to complete our assessment. If you have any questions, don’t hesitate to ask!

