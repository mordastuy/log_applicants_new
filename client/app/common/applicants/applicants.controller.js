class ApplicantsController {
    constructor($rootRouter, applicantsService) {
        "ngInject";

        this._$rootRouter = $rootRouter;

        this.sortType = 'number';
        this.sortReverse = false;

        this.getFullName = applicantsService.getFullName;
        this.getStatusName = applicantsService.getStatusName;
    }

    removeApplicant(applicant) {
        this.applicants.$remove(applicant);
    }

    $routerOnActivate(next) {
        this.applicants = this.homeCtrl.getApplicants();
    }

    goToDetail(applicant) {
        this._$rootRouter.navigate(['/About/Detail', {id: applicant.$id}]);
    }

    changeSort(type) {
        this.sortType = type;
        this.sortReverse = !this.sortReverse;
    }
}

export default ApplicantsController;
