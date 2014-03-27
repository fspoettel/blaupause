Boilerplate
===========

![Dev](https://david-dm.org/felics/boilerplate.png)

## About

This is my (early alpha) boilerplate for web-projects. It contains a small SCSS-boilerplate, a Gulp build-process and an optional [Statamic](www.statamic.com) twist and some vanilla JS-helpers. It aims to provide a flexible, UI-less core to get web-projects running quickly. The grid used is based on my [fork](https://github.com/felics/csswizardry-grids/tree/boilerplate) of [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids) (which introduces a flex-box enhancement for browsers that support it). The SCSS-recipes are best practices found around the internet, most notably in [inuit.css](https://github.com/csswizardry/inuit.css), coded and simplified in the style of the boilerplate. I added flex-box options for items where they make sense and either simplify or enhance the output. These are triggered with Modernizr at the moment.

## Dependencies:

**(S)CSS**:

 - [normalize.css](https://github.com/necolas/normalize.css) (3.0.1)
 - [csswizardry-grids (fork)](https://github.com/felics/csswizardry-grids) (#boilerplate-branch)

 **Polyfills**:

 - [respond.js](https://github.com/scottjehl/Respond) (1.4.2)
 - [html5shiv](https://github.com/aFarkas/html5shiv) (3.7.0)
 - [Funtion.prototype.bind](https://github.com/polyfill/Function.prototype.bind)
 - [Eventie](https://github.com/desandro/eventie) (1.0.5)

**Build process:**
 
 - [gulp & plugin packages](https://github.com/gulpjs/gulp) (3.5.6)
 
**JS(optional):**

 - [Apollo](https://github.com/toddmotto/apollo.git#~1.3.0) (1.3.0)
 - [Stratos](https://github.com/toddmotto/stratos.git#~1.4.0) (1.4.0)
 - [Doc-Ready](https://github.com/desandro/doc-ready) (1.0.2)
 
## Credit:

 - [inuit.css](https://github.com/csswizardry/inuit.css)
 - [html5bp](https://github.com/h5bp/html5-boilerplate)

## Installation

(You need NPM on your machine):

```
npm install -g bower
npm install -g gulp
cd your-project
npm install
bower install
```

When using with Statamic:

Copy everything into your theme-folder. Copy all folders out of the `_statamic` folder into the theme-base. Rename `sample.htaccess` to `.htaccess` and put it in the Statamic root folder.

## File Structure

### _statamic

Contains really basic statamic-theme files. *(1.7.4 compatible)*

#### /layout

Contains the default theme-layout based on HTML5 Boilerplate. It imports all low-level *partials* (footer, header, nav(in header), scripts). It sets up a Typekit-conditional and some basic variables that can be configured in *theme.yaml*. Core-vars are prefixed with an underscore to mimic core statamic variables (e.g. `_site_root`).

#### /templates

Contains a sample-template with a content-section.

#### /partials

Contains wrappers for low-level partials. *Scripts* is the bottom-page script-block, *header* imports *nav* and is the page header, *footer* contains the page footer. I decided to decouple the *scripts* from the layout so that one can easily add scripts in a template.

#### theme.yaml

Contains basic configuration variables:

 - `_site_author`
 - `_site_language`
 - `_site_description`
 - `_theme_name`
 - `_show_comments (boolean)`
 - `_disqus_account`
 - `_typekit_id`
 - `no_results_text`

### css

This project uses SCSS and Gulp for building. The "default" build-process spawns three files in two directories: An unprefixed, unminified CSS-file, a prefixed, unminified CSS-file and a prefixed, minified CSS-file. This means you have never to worry about vendor prefixes again and debugging is a breeze. You fire it up like this:

```bash
cd your-project
gulp
```

If you want to update the `test`-folder, use the `$test`flag in `build.scss` and update the test-folder with running `gulp test`.

#### css/scss

The scss is divided in three main categories: *globals, locals & recipes*. Globals contain shared styles. The locals-folder is meant for page or module-specific styles. Recipes provide minimalistic implementations of common layout / UI patterns (some of them adapted from *inuit.css'* great implementations).

The *globals*-folder is grouped in several sub-folders:

 - `/var`

   Stores basic-configuration such as sizes, colors, mediaqueries (for inline MQ, see mixin), type and brand-specific as variables.

 - `/typography`

   Stores all typographic elements.

 - `/mixins`

   Stores mixins.

 - `/layouts`

   Stores the grid and other layout-abstractions.

 - `/elements`

   Stores core UI abstractions such as tables or forms.

In the base-directory, there is a reset(based on `normalize.css`), a styles.scss for global styles that don't fit any of the folders above and a [shame.scss](http://csswizardry.com/2013/04/shame-css/). For detailed documentation regarding the .scss-modules read the inline documentation.

#### scss variable structure

Variable structure (excluding recipes):

 - **Base**
    - `--size`
    - `--ratio`
    - `--browser-default`
    - `--sizing-unit`
    - `--sizing-number`
    - `--rhythm-unit`
    - `--rhythm-number`
    - `--content-namespace`
 - **Color**
    - `--background`
    - `--primary`
    - `--secondary`
    - `--success`
    - `--error`
    - **`__brand`**
        - `--primary`
        - `--border`
    - **`__btn`**
         - `--primary`
         - `--secondary`
         - `--tertiary`
         - `--hover`
         - `--success`
         - `--error`
         - `--disabled`
    - **`__tables`**
         - `--background`
         - `--head`
         - `--headtext`
         - `--odd`
    - **`__type`**
         - `--text`
         - `--heading`
         - `--link`
         - `--link-hover`
 - **Type**
    - `--size`
    - `--ratio`
    - `--sizing-unit`
    - `--sizing-number`
    - `--rhythm-unit`
    - `--rhythm-number`
    - **`__scale`**
         - `--1`
         - `--2`
         - `--3`
         - `--4`
         - `--5`
         - `--6`
         - `--mega`
         - `--giga`
         - `--ultra`
    - **`__font`**
         - `--sans`
         - `--serif`
         - `--primary`
         - `--secondary`
         - `--heading`
    - **`__heading`**
         - `--font-weight`
         - `--font-style`
         - `--ratio`
 - **Brand**
    - `--border-radius`
    - `--border-width`
    - `--transition-style`
    - `--transition-duration`
 - **Animation**
    - `--duration`
    - `--fill-mode`
    - `--start-delay`
    - `--delay-offset`
 - **Grid**
    - `--responsive`
    - `--gutter`
    - `--mobile-first`
    - `--use-silent-classes`
    - `--push`
    - `--pull`
    - `--use-markup-fix`
    - `--breakpoints`



### js

By default, the js-build process takes all scripts inside *modules* and the global.js and builds them by concat'ing, hinting and minifying them. It ignores the lib-folder that stores external dependencies, currently:

 - jQuery (1.11.0 / 2.1.0)
 - Modernizr (2.7.1 dev build)
 - Respond.js (1.4.2)
 - HTML5-shiv(3.7.0).

## Naming conventions & authoring principles

The whole project is centered around an **BEM** and **OOP** approach. The `.scss` is divided into small files that each serve one purpose only. Variables are namespaced. A sample variable looks like this: `base--size` or `base--sizing-unit`. Variables can be nested to be scoped to certain project parts, e.g. `$color__btn--primary` (global namespace, scope, value; see variable list). Classes are constructed with a BEM approach:

```html
    <section class="house house--red">
        <article class="house__room">
        </article>
        <article class="house__bath  house__bath--red">
        </article>
    </section>
```

`--` is used for modifiers (SCSS vars: values), while `__` is reserved for sub-elements (SCSS vars: sub-groups).

 The CSS is indented by 4 spaces and nesting is kept to an absolute minimum. Variables have sensible defaults and are decoupled as much as possible, so that it is for example easy to decouple `$type--sizing-unit` from `$base--sizing--unit`, which are by default coupled. This gives you the freedom to scope variable contexts.

 By providing a js-build-process, it is easy to modularize JS. All .js files in `modules` will be combined with global.js and minfied. One can for example set up modules in `js/modules`and fire them from a centralized `document.ready` or `window.load` in global.js.

