import angular from 'angular';
import Applicants from './applicants/applicants';
import Module from './modal/modal';
import Navbar from './navbar/navbar';

let commonModule = angular.module('app.common', [
    Applicants.name,
    Module.name,
    Navbar.name
]);

export default commonModule;
