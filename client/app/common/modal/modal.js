import angular from 'angular';
import modalComponent from './modal.component';

let modalModule = angular
    .module('modal', [])
    .component('modal', modalComponent);

export default modalModule;
