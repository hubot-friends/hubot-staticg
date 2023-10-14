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

