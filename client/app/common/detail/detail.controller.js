class DetailController {
    constructor() { }

    $routerOnActivate(next) {
        this.aboutCtrl
            .getCurrentApplicant(next.urlPath)
            .then(applicant => this.currentApplicant = applicant);
    }
}

export default DetailController;
