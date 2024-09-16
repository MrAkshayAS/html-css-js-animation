# Light/Dark Mode Toggle 🌓

This Markdown file provides an explanation of the HTML code for implementing a light/dark mode toggle switch with JavaScript functionality.

## HTML Structure

The HTML code contains the following structure:

- **Header**: Contains a heading (`<h1>`) and a toggle switch implemented using a `<label>` with an `<input>` checkbox and a `<span>` for the slider.

## CSS Styling

Basic CSS styling is provided for the body, header, and toggle switch. Additionally, a `.dark-mode` class is defined to style the dark mode appearance.

## JavaScript Functionality

JavaScript is used to handle the toggle functionality and save the user's preference using cookies:

- **Event Listener**: Listens for changes on the checkbox input (`modeToggle`).
- **Toggle Function**: Toggles the `.dark-mode` class on the body and sets a cookie to remember the mode preference.
- **Page Load**: Checks for a saved preference in cookies and applies the appropriate styling.
- **Cookie Handling**: Provides functions to extract and set cookies to remember the user's preference.

## Cookie Handling

The mode preference (either "dark" or "light") is stored in a cookie named "mode" to remember the user's choice across sessions.

## Transitions

CSS transitions are applied to ensure smooth color transitions when switching between light and dark modes.

This setup offers users a convenient way to toggle between light and dark modes while preserving their preference across sessions.

## Preview

You can view a live preview of the Light/Dark Mode Toggle [here](https://mrakshayas.github.io/lightdarkmode/).
