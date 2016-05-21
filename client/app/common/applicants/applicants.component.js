import template from './applicants.html';
import controller from './applicants.controller.js';
import './applicants.styl';

let applicantsComponent = {
    restrict    : 'E',
    bindings    : {
        applicants: '<'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default applicantsComponent;
