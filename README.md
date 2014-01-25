Boilerplate
===========

![Dev](https://david-dm.org/felics/boilerplate.png)

## About

This is my boilerplate for web-projects. It contains a small SCSS-framework, a Gulp buildprocess (SCSS, JS, IMG & Liverolad) and an optional Statamic twist. It aims to give you a flexible, UI-less core to get web-projects running quickly.

## Installation

(You need Node.js & NPM on your machine):

```
cd your-project
npm install
```

When using with Statamic: 

Copy all the stuff into your installation's theme-folder. Copy the stuff out of the _statamic folder into the theme-base. Done.

## File Structure

### _statamic

Contains really basic statamic-theme files.

#### /layout

Contains the default theme-layout based on HTML5 Boilerplate. It imports all low-level *partials* (footer, header, nav(in header), scripts). It sets up a Typekit-conditional and some basic variables that can be configured in *theme.yaml*. Core-vars are prefixed with an underscore to mimic core-statamic variables (e.g. _site_root).

#### /templates

Contains a sample-template with a content-section.

#### /partials

Contains wrappers for low-level partials. *Scripts* is the bottom-page script-block, *Header* imports *Nav* and is the page header, *footer* the footer. I decided to decouple the *scripts* from the layout so that one can easily add scripts per template.

#### theme.yaml

Contains basic configuration variables:

 - _site_author
 - _site_language
 - _site_description:
 - _theme_name:
 - _show_comments: (boolean)
 - _disqus_account:
 - _typekit_id:
 - no_results_text:

### css

This project uses SCSS and Gulp for building. The "default" build-process spawns three files in two directories: An unprefixed, unminified CSS-file, a prefixed, unminified CSS-file and a prefixed, minified CSS-file.

#### css/scss

The scss is divided in two main categories: *globals & locals*. Globals are stuff that is shared across your whole project. The locals-folder is meant for page or module-specific styles.

The *globals*-folder is grouped in several sub-folders: 

 - /var 
 
   Stores basic-configuration such as base-sizes, colors, mediaqueries (for inline MQ, see mixin), type and brand-specific as variables.

 - /typography
 
   Stores all typographic elements.

 - /mixins
 
   Stores mixins.

 - /layouts
 
   Stores the grid and other layout-abstractions.

 - /elements
 
   Stores core UI abstractions such as tables or forms.
   
In the base-directory, there is a reset, a styles.scss for global styles that don't fit any of the folders above and a shame.scss.


### js

By default, the js-build process takes all scripts inside *modules* and the global.js and builds them by concat'ing, hinting and minifying them. It ignores the lib-folder that stores external dependencies such as jQuery, HTML5-shiv, Modernizr and Respond.js.

## Naming conventions & CSS authoring principles

The whole project is centered around an BEM and OOP approach. The .scss is divided into small files that each serve one purpose only. Variables are namspaced and camelCase is used. A sample variable looks like this: base__size or base__sizingUnit. The CSS is indented by 4 spaces and nesting is kept to an absolute minimum. Variables have sensible defaults and are decoupled as much as possible, so that it is for example easy to decouple the typeSizing form the baseSizing, which are by default coupled.

## .scss modules

The scss is modularized as much as possible. This approach helps in structuring the project-base so that it is easily accesible. This shows in the variable structure: Local configs are inside the scss-partials, only the essential stuff is set inside the var-folder.

Variables:

 - base.scss:

  This file contains the project's base-sizes. It takes a base-size in px (16), a ratio (1.5) and the browserDefault (16) and calculates two basic, unitless variables: $base__sizingUnit & $base__rhythmUnit. These both come in two forms: in a em / rem fashion, so a factor dependent on the §browserDefault and a numerical value. base__sizingUnit is dependent on the base__size, while base__rhythmUnit is calculated by the base__size * base__ratio

 Avaiable variables:

  - $base__size: 16 !default;
  - $base__browserDefault: 16 !default;
  - $base__ratio: 1.5 !default;

  - $base__sizingUnit: $base__size / $base__browserDefault;
  - $base__sizingNumerical: $base__size;
  - $base__rhythmUnit: $base__ratio;
  - $base__rhythmNumerical: ($base__size * $base__ratio);

 - colors.scss:

  Contains the colors used in the project.

  Avaiable variables:

   - $color__background:   #fefefe !default;

   - $color__bodyText:    #333 !default;
   - $color__heading:      #222 !default;

   - $color__link:         #c10900 !default;
   - $color__linkHover:   shade($color__link,10%)!default;

   - $color__primary:      #c10900 !default;
   - $color__secondary:    yellow !default;
   - $color__disabled:     grey !default;

   - $color__success:      green !default;
   - $color__error:        red !default;

 - mediaqueries.scss:

  Contains the media queries for the project. This project takes a mobile first approach. MQ's are defined locally right in the selector with a mixin like this: @include bp(lapUp) { // content }. These bps are used for the grid too.

  Avaiable variables:

   - $bp__palm:     "(max-width: 480px)";
   - $bp__lap:      "(min-width:481px) and (max-width: 1023px)";
   - $bp__lapUp:    "(min-width: 481px)";
   - $bp__desk:     "(min-width: 1024px)";

 - brand.scss:

 Contains variables that belong to your brand.

 Avaiable variables:

  - $brand__rounding: .25em !default;
  - $brand__borderColor: #ccc !default;
  - $brand__borderWidth: 1px !default;

 - type.scss:

 This contains the typography config. There is a type__sizingUnit and a type__rhythmUnit that by default, inherit from the base-units. If needed, these can be decoupled. They affect the spacing between and in typographic elements. There is a typographic scale that works manually by assigning px-values to the scaleSteps. Reasoning for this is in the file. There is a configurable contentNamespace that generates a set of scoped selectors for typographic styles (content headings, content paragraphs etc.).

 Avaiable variables:


  - $type__scaleBase:  $base__size; // Default: 16
  - $type__ratio:      $base__ratio !default;

  - $type__sizingUnit:      $type__scaleBase / $base__browserDefault;
  - $type__sizingNumerical: $type__scaleBase;

  - $type__rhythmUnit:      $type__ratio;
  - $type__rhythmNumerical: $type__scaleBase * $type__ratio;


  - $contentNamespace: unquote(".content");

  - $scaleU:  84 !default; // kilo
  - $scaleM:  72 !default; // mega
  - $scaleG:  60 !default; // giga
  - $scale1:  48 !default; // h1, alpha
  - $scale2:  36 !default; // h2, beta
  - $scale3:  30 !default; // h3, gamma
  - $scale4:  24 !default; // h4, delta
  - $scale5:  21 !default; // h5, epsilon
  - $scale6:  16 !default; // h6, zeta

  - $type__primary:   $helveticaNeue;
  - $type__secondary: $georgia;

  - $type__linkDecoration: none;

