module.exports = function (grunt) {
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
            gird: {
                files: {
                    'molten/molten.css': 'molten.less'
                }
            }
        },
        
        watch: {
            css: {
                files: ['molten.less'],
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