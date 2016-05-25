import NavbarCreatingController from './navbar.creating.controller.js'
import template from './../views/modal.create.html'

class NavbarController {
    constructor($uibModal) {
        'ngInject';

        this._$uibModal = $uibModal;
    }

    openModal() {
        const self = this;

        self._$uibModal.open({
            template    : template,
            controllerAs: '$ctrl',
            resolve     : {
                applicants: () => self.homeCtrl.applicants,
                createApplicant: () => self.homeCtrl.createApplicant
            },
            controller  : NavbarCreatingController
        });
    }
}

export default NavbarController;
