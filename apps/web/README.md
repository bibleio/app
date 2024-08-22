![Web app banner](https://i.imgur.com/R1HNhih.png)

# Bibleio Web App

The Bibleio web app is a simple, casual reading experience with basic text formatting features.

Visit the release version [here](https://app.bibleio.com).

# Development

Clone the main "bibleio/apps" monorepo, then run:
```bash
pnpm install
pnpm web:dev
```
Currently, we use [scripture.api.bible](https://scripture.api.bible/) for the API. Once we get our API running, we'll migrate. For now, you will need your own API key to use scripture.api.bible. Create your own app [here](https://scripture.api.bible/signup), then copy your key. Then create a `.env` file inside the root, and put inside:

```env
API_KEY="YOUR_API_KEY_HERE"
```

# Plans

- [x] Text formatting (fonts, size, line-spacing)
- [ ] Themes (background, accent)
- [ ] Bookmarks, highlighting
- [ ] Notetaking
- [ ] Prayer list
- [ ] Accounts to store above saved data
- [ ] Split view to compare translations?
