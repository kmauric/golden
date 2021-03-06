module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, //compass
    watch: {
      options: { livereload: true },
      sass: {
        files: ['scss/*.scss'],
		tasks: ['compass:dev']
	  }, //sass
      html: {
        files: ['*.html'],
      } //html 
    } //watch
  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports