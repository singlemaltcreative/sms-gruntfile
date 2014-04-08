'use strict';

var LIVERELOAD_PORT = 35729;
var currIP = '192.168.1.117';
var vHost = 'myfi.dev';

module.exports = function(grunt) {
	
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