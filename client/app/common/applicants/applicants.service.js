export default () => {
    return {
        getFullName,
        getStatusName,
        getApplicants
    };
}

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
    return [
        {
            id       : 1,
            number   : 111,
            firstName: 'Nick',
            lastName : 'Nickson',
            created  : '10.05.2016',
            done     : '11.05.2016',
            status   : 1
        },
        {
            id       : 2,
            number   : 112,
            firstName: 'John',
            lastName : 'Johnson',
            created  : '10.05.2016',
            done     : '',
            status   : 0
        },
        {
            id       : 3,
            number   : 113,
            firstName: 'Lili',
            lastName : 'Struk',
            created  : '11.05.2016',
            done     : '12.05.2016',
            status   : 1
        }
    ]
}