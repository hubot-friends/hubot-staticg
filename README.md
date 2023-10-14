# Static Site Generator

This is a simple static site generator that uses [Express](https://expressjs.com), [markdown](https://github.com/markdown-it/markdown-it), and [Handlebars](https://handlebarsjs.com) to generate a static website.

## Installation

To install the dependencies, run:
`npm i`

## Example building a site

```sh
./
./docs
./docs/index.md
./docs/layouts/
.docs/layouts/index.html
```

**index.md**

```markdown
---
title: Getting Started With sfab
layout: layouts/index.html
published: 2023-10-14T19:25:22.000Z
permalink: /index.html
---

# Getting Started With sfab

This is an example markdown file that utilizes the layouts/index.html layout file.
```

**layouts/index.html**

```html
<!DOCTYPE html>
<html lang="en">
    <head></head>
    <body>
    {{> @partial-block }}
    </body>
</html>
```

# Run it

```sh
npx @hubot-friends/sfab --folder ./docs --destination ./_site --verbose
```

# If you install it globally (`npm i @hubot-friends/sfab -g`)

```sh
# builds the site and starts a web server (Express) using a virtual path, e.g. /hubot/. If there's no virtual path (just at the roo), then just `--serve` with no additional value.
sfab --folder ./docs --destination ./_site --verbose --serve /hubot/
```

# Restart when files change (requires Node.js version 20.6.x --watch facility)

```sh
sfab --folder ./docs --destination ./_site --verbose --serve /hubot/ --watch-path ./docs
```

# Hook into the build process

```sh
npx @hubot-friends/sfab --folder ./docs --destination ./_site --verbose --serve /hubot/ --watch-path ./docs --scripts ./sfab-hooks
```

## Example Hook

```javascript
export default () => {
    return {
        model(file, model) {
            // object returned gets Object.assigned to the model passed to the handlebars compiler for use in the templates.
            return {
                base: {
                    href: '/hubot/'
                }
            }
        },
        async transformed(transformedFilePath) {
            // do something during transformation
        },
        async copied(filePath) {
            // file wsa copied to this filePath.
        },
        async partial(partialName, partial, handebars) {
            // partial was registered. passing handlebars if you want to register more.
        }
    }
}
```