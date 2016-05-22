export default (applicantsService) => {
    'ngInject';

    return (items, searchFilter) => items.filter(item => {
        const filter  = {},
              bitMask = [];

        if (!searchFilter.number
            && !searchFilter.fullName
            && !searchFilter.created
            && !searchFilter.done
            && !searchFilter.status) {
            return true;
        }

        for (let key in searchFilter) {
            searchFilter[key] && (filter[key] = searchFilter[key]);
        }

        if ('number' in filter) {
            bitMask.push(~item.number.toString().indexOf(filter.number) ? 1 : 0);
        }

        if ('fullName' in filter) {
            //debugger;
            bitMask.push(~applicantsService.getFullName(item).toLowerCase().indexOf(filter.fullName.toLowerCase()) ? 1 : 0);
        }

        if ('created' in filter) {
            bitMask.push(~item.created.indexOf(filter.created) ? 1 : 0);
        }

        if ('done' in filter) {
            bitMask.push(~item.done.indexOf(filter.done) ? 1 : 0);
        }

        if ('status' in filter) {
            bitMask.push(~applicantsService.getStatusName(item.status).toLowerCase().indexOf(filter.status.toLowerCase()) ? 1 : 0);
        }

        return !~bitMask.toString().indexOf('0');
    });
}