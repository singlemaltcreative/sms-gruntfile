sms-gruntfile 0.1
=============

Single Malt Sites' custom Gruntfile.js and associated package.json file, which we use when beginning all of our projects.

#SMS Grunt Configuration

We thought we'd post our current Grunt.js configuration, which is the result of hours of research, trial and error, and new gray hairs.

##Required Variable Definitions

###LIVERELOAD_PORT

Needed if you experience any port conflicts or other weirdness with LiveReload on your system.

###currIP

To define your current IP address when using xip.io with MAMP Pro or other virtual host setup.

##Installation

###For the Gruntless:

	npm install -g grunt-cli

This configuration requires at least Ruby 2.1.1, and the native Sass. To accomplish this on OS X I've used RVM.

Consider [this article](http://rvm.io/rvm/install)

###For the Grunted:

Copy Gruntfile.js and package.json into your project directory, navigate to your project directory and run:

	npm install

Then in your directory, run:

	grunt

That *should* be it. (see below)

##Notes

This is the very first push, my friends. I have yet to test it! I will test it soon hopefully and update this doc accordingly.
	
		


