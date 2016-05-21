import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailComponent from './detail.component';

let detailModule = angular
    .module('detail', [
        uiRouter
    ])
    .component('detail', detailComponent);

export default detailModule;
