module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        lint: {
            all:['js/*.js']
        },
        reload: {
            port: 6001,
            proxy: {
                host: 'localhost',
                port: 8000
            }
        },
        watch: {
          all: {
            files: ['index.html', 'style.css', 'js/*.js'],
            options: {
              livereload: true,
            },
          }
        }
    });

    //grunt.loadNpmTasks('grunt-reload');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};
