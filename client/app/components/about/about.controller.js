class AboutController {
    constructor(aboutFirebaseResourceService) {
        'ngInject';

        this._aboutFirebaseResourceService = aboutFirebaseResourceService;
        this._applicants = this._aboutFirebaseResourceService.getApplicants();
    }

    getCurrentApplicant ($id){
        return this._applicants
            .$loaded()
            .then(applicants => {
                return applicants.$getRecord($id);
            });
    }

    updateApplicant(applicant) {
        this._applicants.$save(applicant);
    }

    $routerOnActivate (next) { }
}

export default AboutController;
