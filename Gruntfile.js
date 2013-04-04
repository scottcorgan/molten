module.exports = function (grunt) {
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
            gird: {
                files: {
                    'gird.css': 'gird.less'
                }
            }
        },
        
        watch: {
            css: {
                files: ['gird.less'],
                tasks: ['default']
            }
        }
    });
    
    // Load our tasks
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Register our tasks
    
    grunt.registerTask('default', ['less']);
};