# april-test-case

## TASK

Write a web application on Vue2 using the Nuxt 2 framework.
The application should consist of 1 page in the form of a catalog with a search and a list of items.
On the page, you need to connect calls to any public API, you can take any API from this source: https://rapidapi.com/collection/list-of-free-apis
It is absolutely necessary to use flex layout + SCSS, provide adaptability for any screen sizes, use TypeScript.

Functional:
- search by any coincidence of the properties of an element (for example, this is an online store selling digital equipment, the product has a name, color, size, etc. When entering any of the product properties in the search, filter the list by displaying matches)
- change the display of the list of elements (implement 2 types: tiled, horizontal)
- add pagination (can be in any form)
- when clicking on any of the elements, display the same properties of the element (detail). You can use a modal window or go to a separate page.
- use vuex/store to store elements, client actions.

Creativity in design is welcome, but bad design will not affect the result if there is no opportunity.
It is allowed to use ready-made UI components. We do not limit the time, there is no need to hurry if there is a desire to work out the task.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
