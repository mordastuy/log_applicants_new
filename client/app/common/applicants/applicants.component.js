import template from './applicants.html';
import controller from './applicants.controller.js';
import './applicants.styl';

let applicantsComponent = {
    restrict    : 'E',
    bindings    : {},
    require: {
        homeCtrl: '^home'
    },
    template,
    controller
};

export default applicantsComponent;
