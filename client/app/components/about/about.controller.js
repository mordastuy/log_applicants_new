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

    $routerOnActivate (next) { }
}

export default AboutController;
