import angular from 'angular';
import applicantsComponent from './applicants.component';
import applicantsService from './applicants.service.js';

let applicantsModule = angular
    .module('applicants', [])
    .factory('applicantsService', applicantsService)
    .component('applicants', applicantsComponent);

export default applicantsModule;
