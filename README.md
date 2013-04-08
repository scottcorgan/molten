# Molten

A flowing web application css grid volcano.

![molten-cat](https://f.cloud.github.com/assets/974723/353520/d3d5e8c4-a083-11e2-92d4-0b10d4fe6313.jpg)

Ever wonder where all the css grids are that allow you to create **full width** and **full height** web layouts?

## Grid Basics

### Basic Grid

![basic-column-grid](https://f.cloud.github.com/assets/974723/353676/4715cd64-a088-11e2-8e08-1ab2f555793e.gif)

```html
<div class="grid columns split250">
  <div class="bar">
    <!-- left sidebar -->
  </div>
  <div class="content">
    <!-- the content -->
  </div>
</div>
```


## Nesting for complex layouts

**Molten** gives you classes to create grids based on columns and rows.
You can nest rows and columns within rows and columns to help you build complex layouts.
There is no limit to how many grids you can nest.

```html
<div class="grid columns split250">
  <div class="bar">
    <!-- left sidebar -->
  </div>
  <div class="content">
  
    <!-- Girdception!! -->
    <div class="grid rows split50">
      <div class="bar">
        <!-- topbar -->
      </div>
      <div class="content">
        <!-- content -->
      </div>
    </div>
    
  </div>
</div>
```
