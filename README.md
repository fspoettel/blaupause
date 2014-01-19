Boilerplate
===========

![Dev](https://david-dm.org/felics/boilerplate.png)

## About

A boilerplate for new projects, with a Statamic-twist. This is very early alpha-stuff. This project is a collection of best practices wrapped around a Gulp build process.

## Installation

(You need Node.js & NPM on your machine):

```
cd your-project
npm install
```

When using with Statamic: 

Copy all the stuff into your installation's theme. Copy the stuff out of the _statamic folder into the theme-base. Done.

## File Structure

### _statamic

Contains really basic statamic-theme files. 

#### /layout

Contains the default theme-layout based on HTML5 Boilerplate. It imports all low-level *partials* (footer, header, nav(in header), scripts). It sets up a Typekit-conditional and some basic variables that can be configured in *theme.yaml*. Core-vars are prefixed with an underscore to mimic core-statamic vars (e.g. _site_root).

#### /templates

Contains a sample-template with a content-section.

#### /partials

Contains wrappers for low-level partials. *Scripts* is the bottom-page script-block, *Header* imports *Nav* and is the page header, *footer* the footer.

### css

The CSS for this project is generated out of build.scss. It generated an unprefixed nested version, a prefixed nested version and a prefixed & minified version in *css/build*.

#### css/scss

The scss is divided in two main categories: *globals & locals*. Globals are stuff that is shared across all of you project like configuration variables, mixins, typography, shared UI elements. *Locals* should be used for element or page-specific stuff.

The *globals*-folder is grouped in several sub-folders: 

 - /var 
 
   Stores basic-configuration such as base-size, colors, mediaqueries (for inline MQ, see mixin) and brand-specific styles
 - /typography
 
   Stores all typographic elements as well as a typographic scale.
 - /mixins
 
   Stores mixins.
 - /layouts
 
   Stores the grid and other layout-abstractions
 - /elements
 
   Stores core UI abstractions such as tables or forms.
   
In the base-directory, there is a reset (Normalize v2.1.3), a styles.scss for global styles that don't fit any of the folders above and a shame.scss.

### js

*global.js* contains the project scripts. *lib/plugins* and & global.js get concatenated in the build-process.

## Naming conventions & CSS authoring principles

## .scss modules


