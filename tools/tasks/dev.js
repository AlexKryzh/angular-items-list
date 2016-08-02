import gulp                           from 'gulp';
import runSequence             from 'run-sequence';
import environments            from 'gulp-environments';

gulp.task('dev', ['delete:Files'], function(cb) {

    cb = cb || function() {};

    global.production = environments.production;
    global.development = environments.development;

    environments.current(development);

    runSequence(
        [
            'generate:IconFont',
            'generate:Favicons'
        ],
        [
            'copy:Images',
            'copy:Fonts', 
            'inject:IconFont'
        ], 
        [
            'generate:ConstantModule',
            'generate:MainStyles',
            'generate:ModuleStyles',
            'generate:ModuleTemplates',
            'generate:MainTemplates'
        ],
        [
            'copy:Locales',
            'copy:Translations',
            'copy:Data'
        ],
        [
            'browserify:Modules',
            'browserify:Main'
        ], 
        [
            'copy:MainIndex'
        ],
        [
            'watch:Files'
        ], 
        cb
    );

});