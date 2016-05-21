export default ($firebaseArray, $firebaseObject, Firebase, moment, DATE_FORMAT) => {
    "ngInject";

    const applicants = new Firebase('https://popping-fire-5460.firebaseio.com/applicants');

    const service = {
        getApplicants
    };

    return service;

    function getApplicants() {
        return $firebaseArray(applicants);
    }
}

