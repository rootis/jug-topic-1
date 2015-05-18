'use strict';

var GulpConfig = (function () {
    
    function GulpConfig() {
        this.source = './src/main/resources/public/js/';
        this.sourceApp = this.source;

        this.tsOutputPath = this.source;
        this.allJavaScript = [this.source + '**/*.js'];
        this.allTypeScript = this.sourceApp + '**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'tsd.d.ts';
    }

    return GulpConfig;

})();

module.exports = GulpConfig;
