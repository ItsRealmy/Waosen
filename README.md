<center>
  <h1>Waosen</h1>
  <p><i>Wow, An Old-fashioned Search Engine, Nice!</i></p>
</center>

A recreation of Bing from 2009, made for [Nostalgia '09](https://discord.gg/hb4fzztexZ).

## Setup
- Copy `example.env` to `.env`, and fill in the details (you'll need a Brave search API key for this, which is paid after 2500 searches)
- Run `npm i`
- Run `node .` to start the application

## Directory structure
- `/lib` - For all reusable code.
- `/local` - Gitignored folder for local testing and development, put whatever you want in it.
- `/routers` - Contains all the `express.Router()`s used in this project.
- `/static` - Contains all static files for the frontend (e.g. CSS, images, etc)
- `/templates` - Contains all Eta.js templates used for rendering pages