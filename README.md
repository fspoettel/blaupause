Boilerplate
===========

![Dev](https://david-dm.org/felics/boilerplate.png)

## About

This is my (early alpha) boilerplate for web-projects. It contains a small SCSS-framework, a Gulp buildprocess (SCSS, js, img & Liverolad) and an optional Statamic twist. It aims to give you a flexible, UI-less core to get web-projects running quickly.

## Installation

(You need Node.js & NPM on your machine):

```
cd your-project
npm install
```

When using with Statamic: 

Copy all the stuff into your installation's theme-folder. Copy the stuff out of the `_statamic` folder into the theme-base. Done.

## File Structure

### _statamic

Contains really basic statamic-theme files.

#### /layout

Contains the default theme-layout based on HTML5 Boilerplate. It imports all low-level *partials* (footer, header, nav(in header), scripts). It sets up a Typekit-conditional and some basic variables that can be configured in *theme.yaml*. Core-vars are prefixed with an underscore to mimic core-statamic variables (e.g. `_site_root`).

#### /templates

Contains a sample-template with a content-section.

#### /partials

Contains wrappers for low-level partials. *Scripts* is the bottom-page script-block, *Header* imports *Nav* and is the page header, *footer* the footer. I decided to decouple the *scripts* from the layout so that one can easily add scripts per template.

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

This project uses SCSS and Gulp for building. The "default" build-process spawns three files in two directories: An unprefixed, unminified CSS-file, a prefixed, unminified CSS-file and a prefixed, minified CSS-file. This means you have never to worry about vendor prefixes again.

#### css/scss

The scss is divided in three main categories: *globals, locals & recipes*. Globals are stuff that is shared across your whole project. The locals-folder is meant for page or module-specific styles. Recipes provide minimalistic implementations of common layout / UI patterns.

The *globals*-folder is grouped in several sub-folders: 

 - `/var`
 
   Stores basic-configuration such as base-sizes, colors, mediaqueries (for inline MQ, see mixin), type and brand-specific as variables.

 - `/typography`
 
   Stores all typographic elements.

 - `/mixins`
 
   Stores mixins.

 - `/layouts`
 
   Stores the grid and other layout-abstractions.

 - `/elements`
 
   Stores core UI abstractions such as tables or forms.
   
In the base-directory, there is a reset, a styles.scss for global styles that don't fit any of the folders above and a shame.scss.


### js

By default, the js-build process takes all scripts inside *modules* and the global.js and builds them by concat'ing, hinting and minifying them. It ignores the lib-folder that stores external dependencies, currently: jQuery, Modernizr (dev build), Respond.js, HTML5-shiv.

## Naming conventions & CSS authoring principles

The whole project is centered around an BEM and OOP approach. The .scss is divided into small files that each serve one purpose only. Variables are namspaced. A sample variable looks like this: `base--size` or `base--sizing-unit`. Variables can be nested to be scoped to certain project parts, e.g. `$color__btn--primary` (global namespace, scope, value). The CSS is indented by 4 spaces and nesting is kept to an absolute minimum. Variables have sensible defaults and are decoupled as much as possible, so that it is for example easy to decouple the typeSizing form the baseSizing, which are by default coupled.
