import moment from 'moment';

const getCurrentDate = function(){
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}

export default getCurrentDate;