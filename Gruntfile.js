module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'src/js/**/*.js'],
			options: {
				globals: {
				}
			}
		},
		browserify: {
			dist: {
				files: {
					'dist/js/main.js': ['src/js/**/*.js']
				},
				options: {
				}
			}
		},
		less: {
			build: {
				files: {
					'dist/css/main.css': 'src/less/main.less'
				}
			}
		},
		cssmin: {
			options: {
				banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
			},
			build: {
				files: {
					'dist/css/main.min.css': 'dist/css/main.css'
				}
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, src: ['src/components/fontawesome/fonts/*'], dest: 'dist/fonts/', flatten: true, filter: 'isFile'},
				],
			},
		},
		watch: {
			// for stylesheets, watch css and less files
			// only run less and cssmin
			stylesheets: {
				files: ['src/less/**/*.less'],
				tasks: ['less', 'cssmin']
			},
			// for scripts, run jshint and uglify
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['jshint', 'browserify']
			}
		}
	});

	grunt.registerTask('dev', [
		'browserify',
		'less',
		'cssmin'
	]);

	grunt.registerTask('production', [
		'jshint',
		'browserify',
		'less',
		'cssmin',
		'copy'
	]);

	grunt.registerTask('build', [
		'jshint',
		'browserify',
		'less',
		'cssmin',
		'copy'
	]);

	grunt.registerTask('default', [
		'jshint',
		'browserify',
		'less',
		'cssmin'
	]);
};
