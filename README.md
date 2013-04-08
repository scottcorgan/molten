# Molten

A flowing web application css grid volcano.

![molten-cat](https://f.cloud.github.com/assets/974723/353520/d3d5e8c4-a083-11e2-92d4-0b10d4fe6313.jpg)

Ever wonder where all the css grids are that allow you to create **full width** and **full height** web layouts?

## Table of Contents
* [Install](https://github.com/scottcorgan/molten/blob/master/README.md#install)
* [Basic Grid](https://github.com/scottcorgan/molten/blob/master/README.md#basic-grid)
* [Nesting for Complex Layouts](https://github.com/scottcorgan/molten/blob/master/README.md#nesting-for-complex-layouts)
* [Grid Types](https://github.com/scottcorgan/molten/blob/master/README.md#grid-types)
* [Grid Sizes](https://github.com/scottcorgan/molten/blob/master/README.md#grid-sizes)
* [Browser Support](https://github.com/scottcorgan/molten/blob/master/README.md#browser-support)

## Install

User [Bower](http://twitter.github.io/bower/) to install as a component:

```
bower install molten
```

## Basic Grid

Creating a basic 2 column, left sidebar grid.

![basic-column-grid](https://f.cloud.github.com/assets/974723/353676/4715cd64-a088-11e2-8e08-1ab2f555793e.gif)

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

## Nesting for complex layouts

**Molten** gives you classes to create grids based on columns and rows.
You can nest rows and columns within rows and columns to help you build complex layouts.
There is no limit to how many grids you can nest.

![nested-column-row-grid](https://f.cloud.github.com/assets/974723/353690/b219c26e-a088-11e2-9a21-dc14abd763b0.gif)

```html
<div class="grid columns split250">
  <div class="bar">
    <!-- left sidebar (250px) -->
  </div>
  <div class="content">
  
    <!-- Girdception!! -->
    <div class="grid rows split50">
      <div class="bar">
        <!-- topbar (50px) -->
      </div>
      <div class="content">
        <!-- content (fluid) -->
      </div>
    </div>
    
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

### Column widths
* 200px - ` .split200 `
* 250px - ` .split250 `
* 300px - ` .split300 `
* 350px - ` .split350 `
* 400px - ` .split400 `
* 450px - ` .split450 `

### Row heights
* 50px - ` .split50 `
* 60px - ` .split60 `
* 70px - ` .split70 `
* 80px - ` .split80 `
* 90px - ` .split90 `
* 100px - ` .split100 `

## Browser Support

**Desktop:**
* Chrome 24+
* Firefox 19+
* Safari 6+

**Mobile:** *Find another framework. This is for deskopt only. Don't cry.*
