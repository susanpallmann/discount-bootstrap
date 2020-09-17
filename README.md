# discount-bootstrap
"Discount Bootstrap" is my lightweight take on Bootstrap's responsive grid system. It's mostly designed for personal use to make my from-scratch web projects a little faster to build. I usually just make a copy from the files here to add to new projects; this repository is to provide a "clean" backup copy.

## Contents
* [Responsive Grid System](#responsive-grid-system)
* [Accordion](#accordion)

## Responsive Grid System
Much like Bootstrap's responsive grid, my system uses a 12-column grid structure. The structure's success requires correct usage and hierarchy.

### Mobile First
This system is designed to be mobile first. Media queries are structures so that mobile is the default, and each successive breakpoint is a gradually larger screen. Therefore, most elements start as full-width, and then become broken into side-by-side columns when the screen is large enough.

### .container
```css
.container
```
The **.container** is a centered div with a fixed max-width. Currently that width is set to 1024px, but this can be edited by project. However, note that changing this may make some breakpoints less intuitive. The **.container** is intended to be placed inside of full-width elements.

### .row

```css
.row
```
The **.row** uses 'display: flex' and 'flex-wrap: wrap' so that it can contain columns with equal heights. At risk of overexplaining, each **.row** should only contain columns for *one* row (on desktop). If in doubt, all of the columns inside of a given row will have classes made up of ".span" and a number, 1-12. The span numbers should add up to 12. (i.e. **.span6** and **.span6**, or 3 **.span4** columns).

### .column & .spans

```css
.column
.span1
.span2
.span3
.span4
.span5
.span6
.span7
.span8
.span9
.span10
.span11
.span12
```
**.column** should always be paired with one of the **.span** classes listed above. If there is no **.span** clarified, **.span12** is more or less assumed, and the column will always be full-width. The naming convention to the spans imagines the page broken up into 12 columns. In such a case, **.span1** spans one of those 12 columns, or 1/12th of the available space. Similarly, **.span6** is half of the space available, **.span4** is 1/3rd, and so on.

As indicated in the **.row** section, the **.span** numbers should add up to 12. If you find yourself with too many **.spans**, break them into separate **.row**s, like this:
```html
<div class="container">
  <div class="row">
    <div class="column span12">
    </div>
  </div>
  <div class="row">
    <div class="column span6">
    </div>
    <div class="column span6">
    </div>
  </div>
</div>
```

### .md & .sm
```css
.sm
.md
```
These classes alter the breakpoints at which columns cease to be full-width. **.sm** causes columns to become full-width only on screens less than 320px wide. **.md** is has a more intermediate breakpoint, becoming full-width on screens less than 721px wide. If neither **.sm** or **.md** are specified, the columns will revert to full-width when screen width is less than 1024px.

For best results, ensure that all **.column**s within a **.row** have the same sizing class (all **.md**, all **.sm**, or neither), and never use both **.md** and **.sm** on the same element.

### Breakpoints:
This system is designed to be mobile first. Media queries are structures so that mobile is the default, and each successive breakpoint is a gradually larger screen. Therefore, most elements start as full-width, and then become broken into side-by-side columns when the screen is large enough.

Due to the way **.column**s are spaced, there is an extra breakpoint after Desktop to prevent content inside of columns from ever touching the sides of the screen.

* Very Small Screens (max 320px)
* Mobile (min 321px)
* Mobile Horizontal & Tablets (min 601px)
* Tablets & Small Desktops (min 721px)
* Desktop & Up (min 1024px)
* Desktop w/Margins (min 1056px)

## Accordion
Although originally "discount bootstrap" was just a responsive grid system, I am expanding it to add some interactive features I use frequently, such as an accordion. This feature shows a list of toggle-able headings that each reveal unique content when toggled.

### .accordion
```css
.accordion
```
This class is intended to be applied to a div containing an ordered or unordered list with list items. This provides the script with context to close other elements within the same **.accordion**, if applicable.

### .accordion-head
```css
.accordion-head
```
This class indicates the part of the accordion segment that is always visible. It is the part the user clicks to toggle the hidden content. Both **.accordion-head** and **accordion-content** should be within a list item (li) element in the ordered or unordered list like so:
```html
<div class="accordion">
  <ul>
    <li>
      <div class="accordion-head" tabindex="0" role="switch" aria-checked="false">
        <h3>Toggle Me</h3>
        <i class="material-icons accordion-arrow">expand_more</i>
      </div>
      <div class="accordion-content">
        <p>This information is sometimes hidden and sometimes visible.</p>
      </div>
    </li>
  </ul>
</div>
```
**.accordion-head** must include the 'role="switch"' and 'aria-checked="false"' attributes. The script makes use of these to track current states. In addition, they provide accessibility support. It is highly recommended that a tabindex be added so that this feature can be used without a mouse. aria-checked="true" corresponds to a segment being opened, while aria-checked="false" indicates that a segment is closed. As such, most accordions should be initially programmed to have aria-checked set to "false".

The **.accordion-head** should contain some sort of text to indicate the function, and should contain an icon (i) with the class **.accordion-arrow**. This example uses Google's Material Icons, which the script was built to utilize. However, the exclusion of the icon element altogether does not appear to break anything should you prefer not to use Google's icons.

### .accordion-content
```css
.accordion-content
```
**.accordion-content** is the class that should contain the content you wish to sometimes hide, as the example in the previous section demonstrates.

### .single-select (optional)
```css
.single-select
```
By default, accordions will allow users to open or close as many accordion segments as they choose at a time. That is, open segments will not automatically close when another is opened. However, if you would prefer that other segments are closed, you can add the **.single-select** class to the element with the **.accordion** class.
