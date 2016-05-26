class DetailController {
    constructor(applicantsService, moment, DATE_FORMAT) {
        'ngInject';

        this._moment = moment;
        this._DATE_FORMAT = DATE_FORMAT;

        this.getFullName = applicantsService.getFullName;
        this.getStatusName = applicantsService.getStatusName;
    }

    $routerOnActivate(next) {
        this.aboutCtrl
            .getCurrentApplicant(next.urlPath)
            .then(applicant => this.currentApplicant = applicant);
    }

    changeStatus(applicant) {
        if(applicant.status){
            applicant.status = 0;
            applicant.done = '';
        } else {
            applicant.status = 1;
            applicant.done = this._moment(new Date()).format(this._DATE_FORMAT);
        }

        this.aboutCtrl.updateApplicant(applicant);
    }
}

export default DetailController;
