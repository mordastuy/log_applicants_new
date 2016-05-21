class HomeController {
    constructor(homeFirebaseResourceService) {
        "ngInject";

        this.createApplicant = homeFirebaseResourceService.createApplicant;
        this.applicants = homeFirebaseResourceService.getApplicants();
    }
}

export default HomeController;
