export default ($firebaseArray, Firebase, moment, DATE_FORMAT) => {
    'ngInject';

    const applicants = new Firebase('https://popping-fire-5460.firebaseio.com/applicants');

    const service = {
        getApplicants,
        createApplicant
    };

    return service;

    function getApplicants() {
        return $firebaseArray(applicants);
    }

    function createApplicant(applicants, applicant) {
        applicants.$add({
            number   : applicant.number,
            firstName: applicant.firstName,
            lastName : applicant.lastName,
            created  : moment(new Date()).format(DATE_FORMAT),
            status   : 0
        });
    }
}

