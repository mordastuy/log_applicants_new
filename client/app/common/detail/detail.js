import angular from 'angular';
import detailComponent from './detail.component';

let detailModule = angular
    .module('detail', [])
    .component('detail', detailComponent);

export default detailModule;
