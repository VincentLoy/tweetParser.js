module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//grunt tasks configuration
		
		uglify: {
			options: {
				mangle: true,
				separator: ';',
                preserveComments: 'some'
			},
			my_target: {
				files: {
					'dist/jquery.tweetParser.min.js' : 'dev/jquery.tweetParser.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);

};