import angular from 'angular';
import aboutComponent from './about.component';
import aboutFirebaseResourceService from './services/about.firebase.resource.service';

export default angular
    .module('about', [])
    .factory('aboutFirebaseResourceService', aboutFirebaseResourceService)
    .component('about', aboutComponent);
