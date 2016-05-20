class HomeController {
    constructor($uibModal) {
        "ngInject";

        this._$uibModal = $uibModal;
    }

    open() {
        const modalInstance = this._$uibModal.open({
            template    : '<modal title="{{vm.title}}" is-create="vm.isCreate" create-applicant="vm.createApplicant(isValid)"></modal>',
            controllerAs: 'vm',
            controller  : function () {
                const vm = this;

                vm.title = 'Creating Applicant';
                vm.isCreate = true;

                vm.createApplicant = function(isValid){
                    console.log('--- isValid', isValid);
                }
            }
        });
    }


}

export default HomeController;
