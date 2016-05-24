import DetailModule from './detail'
import DetailController from './detail.controller';
import DetailComponent from './detail.component';
import DetailTemplate from './detail.html';

describe('Detail', () => {
    let $rootScope, makeController;

    beforeEach(window.module(DetailModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new DetailController();
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        // controller specs
    });

    describe('Template', () => {
        // template specs
    });

    describe('Component', () => {
        // component/directive specs
        let component = DetailComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(DetailTemplate);
        });

        it('not uses `controllerAs` syntax', () => {
            expect(component).not.have.property('controllerAs');
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(DetailController);
        });
    });
});
