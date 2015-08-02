ionic-http-auth
===============

An ionic-starter-project to show how the angular-http-auth library can be used for authentication.

The main intention of this project is to showcase a side menu ionic starter app that uses the angular-http-auth library to intercept http requests that respond with a 401 status.  The user will then be prompted to login.  Once a successful login occurs, the previous
http request will be resubmitted with an authorization token on the header. The application flow will continue as if the user had been logged in the whole time.

You can follow the instructions below to build the app properly.  Or if you want, you can just do this:

1. Download the project
2. *npm install*
2. *ionic serve*
3. Access http://localhost:8100
4. Follow the instructions on the "Home" page.


Ionic App Base
=====================

A starting project for Ionic that optionally supports
using custom SCSS.

## Using this project

We recommend using the `ionic` utility to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ sudo npm install -g ionic
```

Then run:

```bash
$ sudo npm install -g ionic
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page.

## Installation

While we recommend using the `ionic` utility to create new Ionic projects, you can use this repo as a barebones starting point to your next Ionic app.

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd ionic-app-base
$ sudo npm install -g cordova ionic gulp
$ npm install
$ gulp init
```

## Using Sass (optional)

This project makes it easy to use Sass (the SCSS syntax) in your projects. This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/ionic.app.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `ionic.app.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/ionic.app.css" rel="stylesheet">
-->
```

