# Bibleio

Bibleio is a minimalist, simple Bible viewing app.

Uses [scripture.api.bible](https://scripture.api.bible/)

[View to do list on notion](https://dukc.notion.site/Biblio-781f29eb2433420d8dbd98feaa584237)

## Dev Server

Clone this repo, then run:

```bash
npm i

npm run dev
```

### API Key

You will need your own API key to use scripture.api.bible. Create your own app [here](https://scripture.api.bible/signup), then copy your key. Then create a `.env` file inside the root, and put inside:

```env
API_KEY="YOUR_API_KEY_HERE"
```

Replace `YOUR_API_KEY_HERE` with your actual API key. Then you should be good to go!
