# foundry

Website for the cloud foundry, with info what it is, how to participate, etc.


# Design

## Fonts 

- headers - Zilla slab highlight
- text - Zilla slab
- code  - Share tech mono

## Background image

Some stock photo

## Template

Jekyll template extending Agency.

## Style

The style is in `assets/css/style.css`. This is created by Jekyll from an empty file with layout `style`. This layout is included in the `_layouts` directory as `_layouts/style.css`, and simply includes `agency.css`. 

The main style file is thus in `_includes/css/agency.css`. The only reason for these gymnastics is to be able to use jekyll jinja templating and some variables.`

# Modifying.

## Home and header

Pages are written in markdown or html, based on a layout. Layouts are kept in `_layouts`.

The main page is `index.html`. This simply includes the `home` layout, in `_layouts`.

The `home` layout consists of a few sections : 

  - `head.html` - the HTML `<head>` section.
  - `header-home.html` - the navbar of the home page.
  - a page header section containing the name and details of the event
  - a series of `{% include %}`s, for : 
    - intro
    - about 
    - footer
    - javascripts

# Javascripts.

This website uses the following javascript libraries : 

  - bootstrap
  - fontawesome
  - typed
  - jquery
  - 