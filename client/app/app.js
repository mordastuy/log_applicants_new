import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
//import 'normalize.css';
//require( 'angular-bootstrap-npm' );

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name
    //'ui.bootstrap'
])
    .config(($locationProvider) => {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })

    .component('app', AppComponent);
