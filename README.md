# Molten

A fixed-fluid, full-width web application css grid.

Ever wonder where all the css grids are that allow you to create **full width** and **full height** web layouts?

## Table of Contents
* [Play with an Example](https://github.com/scottcorgan/molten#play-with-an-example)
* [Install](https://github.com/scottcorgan/molten/blob/master/README.md#install)
* [Basic Fixed-Fluid Grid](https://github.com/scottcorgan/molten/blob/master/README.md#basic-grid)
* [Nesting for Complex Layouts](https://github.com/scottcorgan/molten/blob/master/README.md#nesting-for-complex-layouts)
* [Grid Types](https://github.com/scottcorgan/molten/blob/master/README.md#grid-types)
* [Grid Sizes](https://github.com/scottcorgan/molten/blob/master/README.md#grid-sizes)
* [Browser Support](https://github.com/scottcorgan/molten/blob/master/README.md#browser-support)


## Play with an Example

Play with the code on Codepen:

http://codepen.io/scottcorgan/pen/jkHov

[![Screen Shot 2013-04-09 at 10 43 24 AM](https://f.cloud.github.com/assets/974723/358270/02fb8eb0-a13d-11e2-9247-790182021d8f.png)](http://codepen.io/scottcorgan/pen/jkHov)

## Install

Install with [Bower](http://twitter.github.io/bower/)

```
bower install molten --save
```

## Usage

**HTML**

```
<link rel="stylesheet" href="path/to/components/molten/molten.css">
```

or **Import** - sass/scss/less

```
@import 'path/to/molten.scss'; - scss/sass

@import 'path/to/molten.less'; - less
```

## Basic Grid

Creating a basic 2 column, left sidebar grid.

![basic-column-grid](https://f.cloud.github.com/assets/974723/353676/4715cd64-a088-11e2-8e08-1ab2f555793e.gif)

```html
<div class="grid columns split250">
  <aside class="bar">
    <!-- left sidebar (250px) -->
  </aside>
  <section class="content">
    <!-- the content (fluid) -->
  </section>
</div>
```

## Nesting for complex layouts

**Molten** gives you classes to create grids based on columns and rows.
You can nest rows and columns within rows and columns to help you build complex layouts.
There is no limit to how many grids you can nest.

![nested-column-row-grid](https://f.cloud.github.com/assets/974723/353690/b219c26e-a088-11e2-9a21-dc14abd763b0.gif)

```html
<div class="grid columns split250">
  <nav class="bar">
    <!-- left sidebar (250px) -->
  </nav>
  <div class="content">
  
    <!-- Girdception!! -->
    <section class="grid rows split50">
      <aside class="bar">
        <!-- topbar (50px) -->
      </aside>
      <article class="content">
        <!-- content (fluid) -->
      </article>
    </section>
    
  </div>
</div>
```

## Grid Types

### Left

Sidebar on the left side

```html
<div class="grid columns split250">
  <div class="bar">
    <!-- left sidebar (250px) -->
  </div>
  <div class="content">
    <!-- the content (fluid) -->
  </div>
</div>
```

### Right

Sidebar on the right side

```html
<div class="grid columns split250 right"> <!-- only need to add the "right" class name -->
  <div class="bar">
    <!-- right sidebar (250px) -->
  </div>
  <div class="content">
    <!-- the content (fluid) -->
  </div>
</div>
```

### Top

Header bar along the top

```html
<div class="grid rows split50"> <!-- use "rows" instead of "columns" for a top bar -->
  <div class="bar">
    <!-- top bar (50px) -->
  </div>
  <div class="content">
    <!-- the content (fluid) -->
  </div>
</div>
```

### Bottom

Footer bar long the bottom

```html
<div class="grid rows split50 bottom"> <!-- only need to add the "bottom" class name -->
  <div class="bar">
    <!-- bottom bar (50px) -->
  </div>
  <div class="content">
    <!-- the content (fluid) -->
  </div>
</div>
```

## Grid Sizes

### Fixed Column Widths
* 50px - ` .split50 `
* 100px - ` .split100 `
* 150px - ` .split150 `
* 200px - ` .split200 `
* 225px - ` .split225 `
* 250px - ` .split250 `
* 275px - ` .split275 `
* 300px - ` .split300 `
* 325px - ` .split325 `
* 350px - ` .split350 `
* 375px - ` .split375 `
* 400px - ` .split400 `

### Fixed Row Heights
* 10px - ` .split10 `
* 20px - ` .split20 `
* 30px - ` .split30 `
* 40px - ` .split40 `
* 50px - ` .split50 `
* 60px - ` .split60 `
* 70px - ` .split70 `
* 80px - ` .split80 `
* 90px - ` .split90 `
* 100px - ` .split100 `
* 200px - ` .split200 `
* 300px - ` .split300 `

## Browser Support

**Desktop:**
* Chrome 24+
* Firefox 19+
* Safari 6+
* IE 9+

**Mobile**
* Mobile Safari 6+
* Chrome for Mobile (iOS 6+, Android ... *eh, it works*)
