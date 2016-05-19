class ApplicantsController {
    constructor(applicantsService) {
        "ngInject";

        this.applicants = applicantsService.getApplicants();
        this.getFullName = applicantsService.getFullName;
        this.getStatusName = applicantsService.getStatusName;
    }

    removeApplicant(applicantId) {
        this.applicants = this.applicants.filter((applicant) => applicant.id != applicantId);
    }
}

export default ApplicantsController;
