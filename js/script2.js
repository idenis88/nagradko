$(function(){

	ciljni_timestamp = new Date("2015/02/15 14:54").getTime();
	trenutni_timestamp = (new Date()).getTime();

        // Notice the *1000 at the end - time must be in milliseconds
        dodatek = ciljni_timestamp-trenutni_timestamp;
		ts = (new Date()).getTime()+dodatek;

    $('#countdown').countdown({
        timestamp	: ts,
        callback	: function(days, hours, minutes, seconds){

            var message = "";

            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
        }
    });

});