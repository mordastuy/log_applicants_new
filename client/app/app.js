import angular from 'angular';
import ngFire from 'angularfire'
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import uiBootstrap from 'angular-bootstrap-npm';
import moment from 'moment';
import angularMoment from 'angular-moment';
import '@angular/router/angular1/angular_1_router';
//import 'normalize.css';

angular
    .module('app', [
        Common.name,
        Components.name,
        ngFire,
        uiBootstrap,
        angularMoment.name,
        'ngComponentRouter'
    ])
    .config(($locationProvider) => {
        'ngInject';

        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .value('$routerRootComponent', 'app')
    .value('Firebase', Firebase)
    .constant('DATE_FORMAT', 'DD.MM.YYYY')
    .component('app', AppComponent);

//var myApp = Firebase.initializeApp({
//    apiKey       : 'AIzaSyDfpD-fTtyEhz15nyR-tIrUQYJjdQCoKUs',
//    authDomain   : 'popping-fire-5460.firebaseapp.com',
//    databaseURL  : 'https://popping-fire-5460.firebaseio.com',
//    storageBucket: 'popping-fire-5460.appspot.com'
//});
//const ref = myApp.database().ref('/applicants');
//return $firebaseArray(ref);