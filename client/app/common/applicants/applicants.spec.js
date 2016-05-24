import ApplicantsModule from './applicants.js'
import ApplicantsController from './applicants.controller';
import ApplicantsComponent from './applicants.component';
import ApplicantsTemplate from './applicants.html';

describe('Applicants', () => {
    let $rootScope, makeController;

    beforeEach(window.module(ApplicantsModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new ApplicantsController(null, {
                getFullName: () => {},
                getStatusName: () => {}
            });
        };
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () => {
        // controller specs
        //it('has a sortType property', () => {
        //    let controller = makeController();
        //    expect(controller).to.have.property('sortType');
        //});
    });

    describe('Template', () => {
        // template specs
    });

    describe('Component', () => {
        // component/directive specs
        let component = ApplicantsComponent;

        it('includes the intended template', () => {
            expect(component.template).to.equal(ApplicantsTemplate);
        });

        it('not uses `controllerAs` syntax', () => {
            expect(component).not.have.property('controllerAs');
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(ApplicantsController);
        });
    });
});
