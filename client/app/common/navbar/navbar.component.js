import template from './views/navbar.html';
import controller from './controllers/navbar.controller.js';
import './navbar.styl';

let navbarComponent = {
    restrict    : 'E',
    bindings    : {
        applicants: '<',
        createApplicant: '&'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default navbarComponent;
