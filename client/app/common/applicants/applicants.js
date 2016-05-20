import angular from 'angular';
import uiRouter from 'angular-ui-router';
import applicantsComponent from './applicants.component';
import applicantsService from './applicants.service.js';

let applicantsModule = angular
    .module('applicants', [
        uiRouter
    ])
    .factory('applicantsService', applicantsService)
    .component('applicants', applicantsComponent);

export default applicantsModule;
