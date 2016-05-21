class NavbarCreatingController {
    constructor($uibModalInstance, createApplicant, applicants) {
        'ngInject';

        this._$uibModalInstance = $uibModalInstance;
        this._createApplicant = createApplicant;

        this.applicants = applicants;
        this.title = 'Creating Applicant';
    }

    createApplicant(isValid, applicant) {
        if (isValid) {
            this._createApplicant({
                applicants: this.applicants,
                applicant: applicant
            });

            this._$uibModalInstance.close();
        }
    }
}

export default NavbarCreatingController;
