import angular from 'angular';
import Applicants from './applicants/applicants';
import Module from './modal/modal';
import Navbar from './navbar/navbar';
import Detail from './detail/detail';

export default angular.module('app.common', [
    Applicants.name,
    Module.name,
    Navbar.name,
    Detail.name
]);
