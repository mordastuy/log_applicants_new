class ApplicantsController {
    constructor($scope, $rootRouter, $filter, applicantsService) {
        'ngInject';

        this._$scope = $scope;
        this._$rootRouter = $rootRouter;
        this._$filter = $filter;

        this.getFullName = applicantsService.getFullName;
        this.getStatusName = applicantsService.getStatusName;

        this.sortType = 'number';
        this.sortReverse = false;
        this.searchFilter = {};
    }

    removeApplicant(applicant) {
        this.applicants.$remove(applicant);
        this.filteredApplicants = this.filteredApplicants.filter(item => item.$id !== applicant.$id);
    }

    $routerOnActivate(next) {
        this.applicants = this.homeCtrl.getApplicants();

        this.applicants
            .$loaded()
            .then((result) => {
                this.filteredApplicants = this._$filter('applicantsSearchFilter')(this.applicants, this.searchFilter);
                this.totalItems = this.applicants.length;
                this.currentPage = 1;
                this.itemsPerPage = 10;
                this.numberOfPages = Math.ceil(this.totalItems / this.itemsPerPage);
            });

        this._$scope.$watchCollection(() => this.searchFilter, (newValue, oldValue) => {
            this.filteredApplicants = this._$filter('applicantsSearchFilter')(this.applicants, this.searchFilter);
            this.totalItems = this.filteredApplicants.length;
            this.currentPage = 1;
            this.numberOfPages = Math.ceil(this.totalItems / this.itemsPerPage);
        });
    }

    goToDetail(applicant) {
        this._$rootRouter.navigate(['/About/Detail', {id: applicant.$id}]);
    }

    changeSort(type) {
        this.sortType = type;
        this.sortReverse = !this.sortReverse;
    }

    clearFilter() {
        this.searchFilter = {};
    }
}

export default ApplicantsController;
