import template from './about.html';
import controller from './about.controller';
import './about.styl';

let aboutComponent = {
    restrict    : 'E',
    bindings    : {},
    template,
    controller,
    $routeConfig: [
        {
            path: '/',
            name: 'Default',
            component: 'detail',
            useAsDefault: true
        },
        {
            path: '/:id',
            name: 'Detail',
            component: 'detail'
        }
    ]
};

export default aboutComponent;
