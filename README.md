# Bey-Slay

You are given an api.js file that exports an array of objects that look like this:
  > `{ "id": 1, "name": "All Day Slay", "img": "https://media.giphy.com/media/3o6gb7cN7bwDxAbnS8/giphy.gif", "favorite": false }`

# Deliverables:

- Render a list of all Beyonce images

- When a User clicks on a Beyonce image in `BeyContainer` it should change the `favorite` key of that object to `true`, which should then add that Beyonce to the `Favorites` Container

- When a User clicks on a Beyonce image in the `Favorites` container, it should change the `favorite` key of that object to `false`, which should then remove it from the FavoritesContainer and send an alert saying "I got a hot sauce in my bag, swag"

- You should use BDD to verify functionality
- You can run `npm run submit` to save and push your work to github

# Hint

- The gif below will give you an idea of what the app should look like
- Look up the `window.alert` function

![beyonce gif](bey-slay.gif)

CSS/Design: @cmccarthy15


## Install JSON Server
  - npm install -g json-server
  1. in root directory: create a `.json` file (usually db.json)
  2. Create your JSON data (google and memorize JSON data structure)
    2.5 Create a json-server.json file to change the port in root directory
  3. Run `json-server --watch db.json`