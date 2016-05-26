import angular from 'angular';
import applicantsComponent from './applicants.component';
import applicantsService from './applicants.service.js';
import applicantsSearchFilter from './filters/applicants.search.filter.js';
import applicantsStartFromFilter from './filters/applicants.startfrom.filter.js';

export default angular
    .module('applicants', [])
    .factory('applicantsService', applicantsService)
    .filter('applicantsSearchFilter', applicantsSearchFilter)
    .filter('applicantsStartFromFilter', applicantsStartFromFilter)
    .component('applicants', applicantsComponent);
