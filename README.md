# Color Scheme Generator

A simple color scheme generator built with HTML, CSS, and JavaScript.

The app allows users to choose a base color and a color scheme mode, then fetches a matching palette from The Color API and displays the generated colors on the page.

## Features

- Choose a base color using a color input
- Select a color scheme mode
- Fetch a 5-color palette from The Color API
- Dynamically display each returned color
- Update the color boxes without refreshing the page
- Uses JavaScript `fetch()` to communicate with an external API

## How It Works

1. The user selects a color.
2. The user chooses a color scheme mode.
3. The user clicks the **Get Color Scheme** button.
4. JavaScript gets the current input values.
5. The selected color is cleaned by removing the `#` symbol.
6. A request URL is created using the selected color and mode.
7. `fetch()` sends a request to The Color API.
8. The API returns an array of colors.
9. JavaScript loops through the colors using `forEach()`.
10. Each returned color is displayed as the background color of one of the five color boxes.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- The Color API

## JavaScript Concepts Practiced

This project helped me practice:

- DOM manipulation
- `getElementById()`
- Event listeners
- Form input values
- Template literals
- `fetch()`
- Promises
- `.then()`
- JSON responses
- Arrays
- `forEach()`
- Array indexes
- Dynamic CSS styling

## API

This project uses **The Color API** to generate color schemes.

Example request:

```text
https://www.thecolorapi.com/scheme?hex=805b5b&mode=monochrome-light&count=5
```

The API returns color information that can then be accessed in JavaScript using values such as:

```js
data.colors
```

and:

```js
color.hex.value
```

## What I Learned

One of the main things I learned from this project was how asynchronous API requests work.

The app first sends a request using `fetch()`, waits for the response, converts that response into JSON, and then uses the returned data to update the page.

I also learned how to connect API data to elements in the DOM by using the array index.

For example:

```js
colorsArray.forEach(function(color, index) {
  document.getElementById(`box${index + 1}`).style.backgroundColor =
    color.hex.value
})
```

The first API color updates `box1`, the second updates `box2`, and so on.

## Future Improvements

Some improvements I may add later include:

- Displaying the hex value under each color
- Clicking a hex value to copy it
- Better error handling for failed API requests
- Loading states while waiting for the API
- Improved responsive design
- Saving favorite color palettes

## Purpose

I built this project as part of my JavaScript learning journey to improve my understanding of APIs, asynchronous JavaScript, DOM manipulation, and working with data returned from external services.
