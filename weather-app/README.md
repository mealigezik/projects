# Weather App

A small browser-based weather demo that lets a user enter a city and view current conditions.

## Current behavior
- City search by pressing Enter.
- Temperature and condition display.
- Loading, missing-key, city-not-found, and request-error messages.
- Responsive layout with keyboard focus styles.

## Tech stack
- HTML
- CSS
- JavaScript
- OpenWeather API format

## Security note
The app does not include a committed API key. A private API key should not be inserted into browser JavaScript or committed to this repository. For real use, route requests through a secure server endpoint with server-side configuration. The demo currently displays a configuration message until that endpoint/key is configured.

## Run locally
Open `index.html` in a local web server. Configure a secure server-side endpoint before enabling live API requests.

## Demo
https://mealigezik.github.io/weather-app/

Automated tests have not yet been added.
