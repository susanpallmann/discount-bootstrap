# discount-bootstrap
"Discount Bootstrap" is my lightweight take on Bootstrap's responsive grid system. It's mostly designed for personal use to make my from-scratch web projects a little faster to build. I usually just make a copy from the files here to add to new projects; this repository is to provide a "clean" backup copy.

## Responsive Grid System
Much like Bootstrap's responsive grid, my system uses a 12-column grid structure. The structure's success requires correct usage and hierarchy.
```
.container
```
The **.container** is a centered div with a fixed max-width. Currently that width is set to 1024px, but this can be edited by project. However, note that changing this may make some breakpoints less intuitive. The **.container** is intended to be placed inside of full-width elements.

```
.row
```
The **.row** uses 'display: flex' and 'flex-wrap: wrap' so that it can contain columns with equal heights. 
