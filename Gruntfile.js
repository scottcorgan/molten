module.exports = function (grunt) {
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
            gird: {
                files: {
                    'gird.css': 'gird.less'
                }
            }
        }
    });
    
    // Load our tasks
    
    grunt.loadNpmTasks('grunt-contrib-less');
    
    // Register our tasks
    
    grunt.registerTask('default', ['less']);
};