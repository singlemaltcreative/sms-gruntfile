sms-gruntfile 0.2
=================

Single Malt Sites' custom Gruntfile.js and associated package.json file, which we use when beginning all of our projects.

#SMS Grunt Configuration

We thought we'd post our current Grunt.js configuration, which is the result of hours of research, trial, and error..

It is important however, that you be familiar with using and configuring Grunt before trying to use this.

##Required Variable Definitions

###LIVERELOAD_PORT

Needed if you experience any port conflicts or other weirdness with LiveReload on your system.

###projectRoot

Define the path to files that should be used with Grunt, if you are developing for WordPress or something like that. You can use this to point plugins like grunt-contrib-watch to your theme folder. It is only to be used as a shortcut for plugins that support variables. Plugins like grunt-sass don't support variables in it's configuration within your gruntfile.

##Installation

###For the Gruntless:

	npm install -g grunt-cli

This configuration requires at least Ruby 2.1.1, and the native Sass. To accomplish this on OS X I've used RVM.

Consider [this article](http://rvm.io/rvm/install)

Then we need to install the super fast node-sass. This helps with large projects that compile large amounts of seperated scss files.

https://github.com/andrew/node-sass

Our package.json file will take care of installing the following plugin:

https://github.com/sindresorhus/grunt-sass

###Configure Gruntfile.js to suit your needs.	

If you are having issues, make sure that your are pointing watch, concat, uglify, sass, browserSync, etc, to the appropriate directories in your project.

###Once the above is taken care of:

Copy Gruntfile.js and package.json into your project directory, navigate to your project directory and run:

	npm install

Then in your directory, run:

	grunt
