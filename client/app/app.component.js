import template from './app.html';
import './app.styl';

let appComponent = {
    template,
    restrict: 'E',
    $routeConfig: [
        {
            path: '/home/...',
            name: 'Home',
            component: 'home',
            useAsDefault: true

        },
        {
            path: '/about/...',
            name: 'About',
            component: 'about'
        }
    ]
};

export default appComponent;
