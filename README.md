# Astro Starter Kit: Basics

```sh
pnpm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).





 (+10ms) 
12:55:48   ├─ /post/my-custom-id/index.html5 months ago
 (+5ms) 
12:55:48   ├─ /post/my-custom-id11111/index.html5 months ago
 (+3ms) 
12:55:48   ├─ /post/updating-blog/index.html2 years ago
 (+1ms) 
12:55:48   ├─ /index.html12:55:48 [ERROR] Error: Input file is missing: /home/rizky/Documents/dev/rizkyblogrevamp/rizkyblog/dist/.prerender/assets/backdrop.jpg
    at Sharp.toBuffer (/home/aaaaaaaaaa/Documents/dev/aaaaaaaaaablogrevamp/aaaaaaaaaablog/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/output.js:163:17)
    at file:///home/aaaaaaaaaa/Documents/dev/aaaaaaaaaablogrevamp/aaaaaaaaaablog/dist/.prerender/chunks/index_Cd43fKwf.mjs:384:110
12:55:48 [ERROR] [build] Caught error rendering /: Error: Input file is missing: /home/aaaaaaaaaa/Documents/dev/aaaaaaaaaablogrevamp/aaaaaaaaaablog/dist/.prerender/assets/backdrop.jpg
Input file is missing: /home/aaaaaaaaaa/Documents/dev/aaaaaaaaaablogrevamp/aaaaaaaaaablog/dist/.prerender/assets/backdrop.jpg
  Stack trace:
    at Sharp.toBuffer (/home/aaaaaaaaaa/Documents/dev/aaaaaaaaaablogrevamp/aaaaaaaaaablog/node_modules/.pnpm/sharp@0.34.5/node_modules/sharp/lib/output.js:163:17)
 ELIFECYCLE  Command failed with exit code 1.