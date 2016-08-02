import gulp                           from 'gulp';
import runSequence            from 'run-sequence';
import evironments              from 'gulp-environments';

gulp.task('prod', ['delete:Files'], function(cb) {

    cb = cb || function() {};

    global.production = environments.production;
    global.development = environments.development;

    environments.current(production);

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
            'copy:Data',
            'copy:Translations'
        ],
        [
            'browserify:Modules',
            'browserify:Main'
        ],
        [
            'inject:CacheBust',
            'copy:MainIndex'
        ], 
        [
            'show:Info',
            'analyze:Plato'
        ],
        [
            'open:SourceAnalyze'
        ],
        cb
    );

});
