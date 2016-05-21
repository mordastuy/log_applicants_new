import angular from 'angular';
import homeComponent from './home.component';
import homeFirebaseResourceService from './services/home.firebase.resource.service.js';

let homeModule = angular
    .module('home', [])
    .factory('homeFirebaseResourceService', homeFirebaseResourceService)
    .component('home', homeComponent);

export default homeModule;
