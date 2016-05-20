export default ($firebaseArray, Firebase) => {
    "ngInject";

    const service = {
        getFullName,
        getStatusName,
        getApplicants
    };

    return service;

    function getFullName(applicant) {
        return `${applicant.firstName} ${applicant.lastName} `;
    }

    function getStatusName(status) {
        let statusName = 'unknown status';

        switch (status) {
            case 0:
                statusName = 'In work';
                break;

            case 1:
                statusName = 'Done';
                break;
        }

        return statusName;
    }

    function getApplicants() {
        const applicants = new Firebase('https://popping-fire-5460.firebaseio.com/applicants');

        return $firebaseArray(applicants);
    }
}

