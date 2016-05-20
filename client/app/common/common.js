import angular from 'angular';
import Applicants from './applicants/applicants';
import Module from './modal/modal';

let commonModule = angular.module('app.common', [
    Applicants.name,
    Module.name
]);

export default commonModule;
