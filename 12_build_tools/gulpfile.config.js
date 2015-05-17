'use strict';

var GulpConfig = (function () {
    
	function GulpConfig() {
        this.source = './src/main/resources/';
        this.sourceApp = this.source + 'src/js/';

        this.tsOutputPath = this.source + 'public/js';
        this.allJavaScript = [this.source + 'public/js/**/*.js'];
        this.allTypeScript = this.sourceApp + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'tsd.d.ts';
    }
    
	return GulpConfig;

})();

module.exports = GulpConfig;
