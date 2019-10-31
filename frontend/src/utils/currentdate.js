import moment from 'moment';

const getCurrentDate = function(){
    return moment().format('LLLL');
}

export default getCurrentDate;