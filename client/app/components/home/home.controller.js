class HomeController {
    constructor(homeFirebaseResourceService) {
            'ngInject';

        this._homeFirebaseResourceService = homeFirebaseResourceService;

        this.createApplicant = homeFirebaseResourceService.createApplicant;
    }

    getApplicants() {
        return this.applicants;
    }

    $routerOnActivate(next) {
        this.applicants = this._homeFirebaseResourceService.getApplicants();
    }
}

export default HomeController;
