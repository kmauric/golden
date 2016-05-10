module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
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
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify']
      }, //scripts
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