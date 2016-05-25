import template from './views/navbar.html';
import controller from './controllers/navbar.controller.js';
import './navbar.styl';

let navbarComponent = {
    restrict    : 'E',
    bindings    : {},
    require: {
        homeCtrl: '^home'
    },
    template,
    controller
};

export default navbarComponent;
