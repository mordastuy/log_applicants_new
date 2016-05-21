class ApplicantsController {
    constructor(applicantsService) {
        "ngInject";

        this.getFullName = applicantsService.getFullName;
        this.getStatusName = applicantsService.getStatusName;
    }

    removeApplicant(applicant) {
        this.applicants.$remove(applicant);
    }

}

export default ApplicantsController;
