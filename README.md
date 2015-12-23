# The books

Simple book browser app to demostrate Angular & Node & browserify cooperation

To see the application working simply clone this repository to your local computer and open **index.html** in your browser.

## Further development

This will guide you to setup your own workspace for future development.

### Requirements

* First install [Nodejs](https://nodejs.org/en/) if you don't have one already

### Installation

After you installed the **nodejs** use it's package manger (npm) to install these packages globally:

```
$ npm install grunt browserify -g
```

And then install all local dev dependencies by performing (in repository root):

```
$ npm install --only=dev
```

And that's it. Let's go to the development flow.

### Development

In your command line (in repository root) run this **grunt** command:

```
$ grunt watch
```

It will watch any changes made in ```src/``` files (JS, LESS) and automatically process them and store in ```dist/``` directory. 

You can now change source files ```src/js/app.js``` and ```src/less/main.less```, hit **Save**, and refresh the **index.html** in your browser. Grunt will take care of all the firty work.



## Stuff used to make this:

 * [angularjs](https://angularjs.org/) for simplifying the comples front-end development
 * [browserify](http://browserify.org/) for using Nodejs features like ```require()``` on front-end side
 * [grunt](http://gruntjs.com/) for processing LESS files, minifying, jshinting and automatically performing browserify build tasks
 * [LESS](http://lesscss.org/) (CSS pre-processor) for using it's syntax sugar
