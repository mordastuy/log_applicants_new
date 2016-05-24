import ModalModule from './modal'
import ModalController from './modal.controller';
import ModalComponent from './modal.component';
import ModalTemplate from './modal.html';

describe('Modal', () => {
    let $rootScope, makeController;

    beforeEach(window.module(ModalModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new ModalController();
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
        let component = ModalComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(ModalTemplate);
        });

        it('not uses `controllerAs` syntax', () => {
            expect(component).not.have.property('controllerAs');
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(ModalController);
        });
    });
});
