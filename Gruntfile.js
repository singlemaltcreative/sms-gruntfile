'use strict';

var LIVERELOAD_PORT = 35729;
var currIP;
var vHost = 'YOURHOST';
var projectRoot = 'PATH/TO/ROOT'; // !IMPORTANT include trailing slash /

module.exports = function(grunt) {

	var os=require('os');
	var ifaces=os.networkInterfaces();
	var lookupIpAddress = null;
	for (var dev in ifaces) {
		if(dev != 'en1' && dev != 'en0') {
			continue;
		}
		ifaces[dev].forEach(function(details){
			if (details.family=='IPv4') {
				lookupIpAddress = details.address;
				return;
			}
		});
	}

	// http://jbavari.github.io/blog/2013/12/04/automating-local-ip-lookup-with-grunt-and-node/
	//If an IP Address is passed
	//we're going to use the ip/host from the param
	//passed over the command line 
	//over the ip addressed that was looked up
	currIP = grunt.option('host') || lookupIpAddress;	
	
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt);

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		watch: {
		    scripts: {
		        files: ['js/*.js'],
		        tasks: ['concat'],
		        options: {
		            spawn: false,
		            livereload: LIVERELOAD_PORT,		            
		        },
		    },
		    css: {
			    files: ['css/src/*.scss'],
			    tasks: ['sass'],
			},
			markup: {
				files: [
					'**/*.html',
					'*.html',
				],
				options: {
		            spawn: false,
		            livereload: LIVERELOAD_PORT,		            
		        },
			}
		},
		
		concat: {
			plugins: {
				src: [
					'js/src/*.js'
				],
				dest: 
					'js/plugins.js'
				,
			},
			vendor: {
				src: [
					'js/vendor/*.js',
				],
				dest: 
					'js/vendor.js'
				,
			},
		},

		uglify: {
		    my_target: {
		      files: {
		        'js/production.min.js': ['js/vendor.js', 'js/plugins.js', 'js/custom.js']
		      }
		    }
		},
		
		sass: {
		    compile: {
				files: {
					'css/combined.css': 'css/src/combined.scss'
				}
			},
		},
		
		browserSync: {
			dev: {
			    bsFiles: {
			        src : [
			        	'css/combined.css',
			        	'*.html',
			        	'*/*.html',
		        	]
			    }, 
			    options: {
		            watchTask: true,
		            debugInfo: true,
		            host: vHost + '.' + currIP + '.xip.io',
		        }
			}
		}

    });
	
	grunt.registerTask('default', ['browserSync', 'watch']);

	grunt.registerTask('compile', ['concat', 'uglify', 'sass']);

};