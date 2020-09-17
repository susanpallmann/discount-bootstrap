# discount-bootstrap
"Discount Bootstrap" is my lightweight take on Bootstrap's responsive grid system. It's mostly designed for personal use to make my from-scratch web projects a little faster to build. I usually just make a copy from the files here to add to new projects; this repository is to provide a "clean" backup copy.

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

As indicated in the **.row** section, the **.span** numbers should add up to 12. If you find yourself with too many **.spans**, break them into separate **.rows**, like this:
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
These classes alter the breakpoints at which columns cease to be full-width. **.sm** causes columns to become full-width only on screens less than 320px wide. **.md** is has a more intermediate breakpoint, becoming full-width on screens less than 721px wide. If neither **.sm** or **.md** are specified, the columns will revert to full-width when screen width is less than 1024px.


### Breakpoints: 

