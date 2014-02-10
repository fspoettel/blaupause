Boilerplate
===========

![Dev](https://david-dm.org/felics/boilerplate.png)

## About

This is my (early alpha) boilerplate for web-projects. It contains a small SCSS-framework, a Gulp build-process (SCSS, js, img & Liverolad) and an optional Statamic twist. It aims to give you a flexible, UI-less core to get web-projects running quickly.

## Installation

(You need Node.js & NPM on your machine):

```
cd your-project
npm install
```

When using with Statamic: 

Copy everything into your installation's theme-folder. Copy all folders out of the `_statamic` folder into the theme-base. Done.

## File Structure

### _statamic

Contains really basic statamic-theme files.

#### /layout

Contains the default theme-layout based on HTML5 Boilerplate. It imports all low-level *partials* (footer, header, nav(in header), scripts). It sets up a Typekit-conditional and some basic variables that can be configured in *theme.yaml*. Core-vars are prefixed with an underscore to mimic core statamic variables (e.g. `_site_root`).

#### /templates

Contains a sample-template with a content-section.

#### /partials

Contains wrappers for low-level partials. *Scripts* is the bottom-page script-block, *header* imports *nav* and is the page header, *footer* the footer. I decided to decouple the *scripts* from the layout so that one can easily add scripts per template.

#### theme.yaml

Contains basic configuration variables:

 - `_site_author`
 - `_site_language`
 - `_site_description:`
 - `_theme_name:`
 - `_show_comments: (boolean)`
 - `_disqus_account:`
 - `_typekit_id:`
 - `no_results_text:`

### css

This project uses SCSS and Gulp for building. The "default" build-process spawns three files in two directories: An unprefixed, unminified CSS-file, a prefixed, unminified CSS-file and a prefixed, minified CSS-file. This means you have never to worry about vendor prefixes again and debugging is a breeze.

#### css/scss

The scss is divided in three main categories: *globals, locals & recipes*. Globals contain shared styles. The locals-folder is meant for page or module-specific styles. Recipes provide minimalistic implementations of common layout / UI patterns.

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
   
In the base-directory, there is a reset(normalize.scss), a styles.scss for global styles that don't fit any of the folders above and a shame.scss. For detailed documentation regarding the .scss-modules read the inline documentation.

#### scss variable structure

Variable structure:

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

By default, the js-build process takes all scripts inside *modules* and the global.js and builds them by concat'ing, hinting and minifying them. It ignores the lib-folder that stores external dependencies, currently: jQuery (1.11.0 / 2.1.0), Modernizr (2.7.1 dev build), Respond.js (1.4.2), HTML5-shiv(3.7.0).

## Naming conventions & CSS authoring principles

The whole project is centered around an BEM and OOP approach. The .scss is divided into small files that each serve one purpose only. Variables are namespaced. A sample variable looks like this: `base--size` or `base--sizing-unit`. Variables can be nested to be scoped to certain project parts, e.g. `$color__btn--primary` (global namespace, scope, value). Classes are constructed with a BEM approach: 

```html
    <section class="house house--red">
        <article class="house__room">
        </article>
        <article class="house__bath  house__bath--red">
        </article>
    </section>
```

`--` is used for modifiers (SCSS vars: values), while `__` is reserved for sub-elements (SCSS vars: sub-groups).

 The CSS is indented by 4 spaces and nesting is kept to an absolute minimum. Variables have sensible defaults and are decoupled as much as possible, so that it is for example easy to decouple type--sizing-unit from base--sizing--unit, which are by default coupled. This gives the author the freedom to scope variable contexts.

 By providing a js-build-process, it is easy to modularize JS. All .js files in `modules` will be combined with global.js and minfied. One can for example set up modules in `js/modules`and fire them from a centralized `document.ready` or `window.load` in global.js.
