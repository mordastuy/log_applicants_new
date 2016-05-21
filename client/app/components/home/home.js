import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import homeFirebaseResourceService from './services/home.firebase.resource.service.js';

let homeModule = angular
    .module('home', [
        uiRouter
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url     : '/',
                template: '<home></home>'
            });
    })
    .factory('homeFirebaseResourceService', homeFirebaseResourceService)
    .component('home', homeComponent);

export default homeModule;
