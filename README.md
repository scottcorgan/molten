# Molten

A flowing web application css grid volcano.

![molten-cat](https://f.cloud.github.com/assets/974723/353520/d3d5e8c4-a083-11e2-92d4-0b10d4fe6313.jpg)

Ever wonder where all the css grids are that allow you to create full width and full height web layouts?

## Grid Basics

### Basic grid set up

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

**Molten** gives you classes to create grids based on columns and rows. You can nest rows and columns within rows and columns to give you gridception.

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
