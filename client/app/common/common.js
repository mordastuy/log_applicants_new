import angular from 'angular';
import Applicants from './applicants/applicants';

let commonModule = angular.module('app.common', [
    Applicants.name
]);

export default commonModule;
