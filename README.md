<div style="text-align: center">
  <h1>Waosen</h1>
  <p><i>Wow, An Old-fashioned Search Engine, Nice!</i></p>
</div>

A recreation of Bing from 2009, made for [Nostalgia '09](https://discord.gg/nP9SxVQGnu).

## Setup
- Copy `example.env` to `.env`, and fill in the details
  - The full application will work when you have a Brave search API key (free until 2500 searches), but for development/testing you can use the query "microsoft" to get a cached response
- Run `npm i`
- Run `node .` to start the application

## Directory structure
- `/lib` - For all reusable code.
- `/local` - Gitignored folder for local testing and development, put whatever you want in it.
- `/routers` - Contains all the `express.Router()`s used in this project.
- `/samples` - Sample responses from API providers used in the project.
- `/static` - Contains all static files for the frontend (e.g. CSS, images, etc)
- `/templates` - Contains all Eta.js templates used for rendering pages