import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngFire from 'angularfire'
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
//import 'normalize.css';

angular
    .module('app', [
        uiRouter,
        Common.name,
        Components.name,
        ngFire
    ])
    .config(($locationProvider) => {
        "ngInject";

        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .value('Firebase', Firebase)
    .component('app', AppComponent);

//var myApp = Firebase.initializeApp({
//    apiKey       : "AIzaSyDfpD-fTtyEhz15nyR-tIrUQYJjdQCoKUs",
//    authDomain   : "popping-fire-5460.firebaseapp.com",
//    databaseURL  : "https://popping-fire-5460.firebaseio.com",
//    storageBucket: "popping-fire-5460.appspot.com"
//});
//const ref = myApp.database().ref('/applicants');
//return $firebaseArray(ref);