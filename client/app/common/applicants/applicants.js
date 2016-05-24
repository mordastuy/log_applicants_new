import angular from 'angular';
import applicantsComponent from './applicants.component';
import applicantsService from './applicants.service.js';
import applicantsSearchFilter from './filters/applicants.search.filter.js';

export default angular
    .module('applicants', [])
    .factory('applicantsService', applicantsService)
    .filter('applicantsSearchFilter', applicantsSearchFilter)
    .component('applicants', applicantsComponent);
