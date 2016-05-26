export default () => {
    'ngInject';

    return (input, start) => {
        let result = [];

        if(input){
            start = parseInt(start);
            result = input.slice(start);
        }

        return result;
    }
}