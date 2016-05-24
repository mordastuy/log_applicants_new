import template from './modal.html';
import controller from './modal.controller';
import './modal.styl';

let modalComponent = {
    restrict    : 'E',
    bindings    : {
        title: '@',
        isCreate: '<',
        createApplicant: '&'
    },
    template,
    controller
};

export default modalComponent;
