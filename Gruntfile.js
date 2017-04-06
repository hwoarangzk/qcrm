module.exports = function(grunt) {

	grunt.initConfig({
		
		watch: {
			less: {
				files: 'less/*.less',
				tasks: ['less:all']
			},

			options: {
                livereload: true
            }
		},

		less: {
			all: {
				files: {
					'public/css/base.css': 'less/base.less',
					'public/css/ui.css': 'less/ui.less',
					'public/css/icons.css': 'less/icons.less',
					'public/css/common.css': 'less/common.less',
					'public/css/login.css': 'less/login.less',
					'public/css/index.css': 'less/index.less',
				}
			}
		},

		concurrent: {
            dev: {
                tasks: ['watch'],
                options: {
                    limit: 10,
                    logConcurrentOutput: true
                }
            }
        }

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('l', ['less:all']);
    grunt.registerTask('dev', ['concurrent:dev']);

};