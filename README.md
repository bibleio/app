# Bibleio Web App

Bibleio is a minimalist, simple Bible viewing app.

This is the old, release version! Checkout our new rewritten version (in alpha) in the `next` branch.

Uses [scripture.api.bible](https://scripture.api.bible/)

[View to do list on notion](https://dukc.notion.site/Biblio-781f29eb2433420d8dbd98feaa584237)

## Dev Server

Clone this repo, then run:

```bash
pnpm install

pnpm dev
```

### API Key

You will need your own API key to use scripture.api.bible. Create your own app [here](https://scripture.api.bible/signup), then copy your key. Then create a `.env` file inside the root, and put inside:

```env
API_KEY="YOUR_API_KEY_HERE"
```

Replace `YOUR_API_KEY_HERE` with your actual API key. Then you should be good to go!

### License

All of Bibleio's projects are licensed under the [MIT No Attribution](LICENSE.txt) license. You can copy, translate, modify, and distribute this resource, without restriction, and without needing to ask permission. Why? For the sake of the gospel (Matt 10:8).

Please consider publishing all of your Bible resources under the same license. Check out why [here](https://copy.church/explain/importance/).

![license badge - Freely given, no conditions!](https://copy.church/badges/lcc_alt_pde.png)
