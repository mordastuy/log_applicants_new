class ApplicantsController {
    constructor($rootRouter, applicantsService) {
        "ngInject";

        this._$rootRouter = $rootRouter;

        this.getFullName = applicantsService.getFullName;
        this.getStatusName = applicantsService.getStatusName;
    }

    removeApplicant(applicant) {
        this.applicants.$remove(applicant);
    }

    $routerOnActivate(next) {
        this.applicants = this.homeCtrl.getApplicants();
    }

    goToDetail(applicant){
        this._$rootRouter.navigate(['/About/Detail', {id: applicant.number}]);
    }
}

export default ApplicantsController;
