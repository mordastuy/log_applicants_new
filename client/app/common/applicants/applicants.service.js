export default () => {
    "ngInject";

    const service = {
        getFullName,
        getStatusName
    };

    return service;

    function getFullName(applicant) {
        return `${applicant.lastName} ${applicant.firstName} `;
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

}

