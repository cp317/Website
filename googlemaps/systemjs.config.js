System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {
    'map': './src',
    
    '@angular/core': 'npm:@angular/core@2.4.1/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common@2.4.1/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@2.4.1/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.4.1/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.4.1/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http@2.4.1/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router@2.4.1/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms@2.4.1/bundles/forms.umd.js',
    
    '@angular/core/testing': 'npm:@angular/core@2.4.1/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles@2.4.1/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler@2.4.1/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser@2.4.1/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic@2.4.1/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http@2.4.1/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router@2.4.1/bundles/router-testing.umd.js',
    
    
    'rxjs': 'npm:rxjs',
    
    'angular2-google-maps/core': 'npm:angular2-google-maps/core/core.umd.js'
  },
  //packages defines our app package
  packages: {
    map: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});
