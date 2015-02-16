$(function(){
	var tr = "";
	var x = 0;
	var time = "";
	
	//timestamp = ['new Date("2015/02/18 15:54:06").getTime();', 'new Date("2015/02/26 15:59:12").getTime();', 'new Date("2015/02/16 15:57:29").getTime();', 'new Date("2015/02/20 15:57:31").getTime();'];
	var timestamp = new Date("2015/02/18 15:54:06").getTime();
	var timestamp2 = new Date("2015/02/26 15:59:12").getTime();
	var timestamp3 = new Date("2015/02/16 15:57:29").getTime();
	var timestamp4 = new Date("2015/02/20 15:57:31").getTime();

	trenutni_timestamp = (new Date()).getTime();

        // Notice the *1000 at the end - time must be in milliseconds
        var dodatek = timestamp-trenutni_timestamp;
		var dodatek2 = timestamp2-trenutni_timestamp;
		var dodatek3 = timestamp3-trenutni_timestamp;
		var dodatek4 = timestamp4-trenutni_timestamp;
		
		var ts = (new Date()).getTime()+dodatek;
		var ts2 = (new Date()).getTime()+dodatek2;
		var ts3 = (new Date()).getTime()+dodatek3;
		var ts4 = (new Date()).getTime()+dodatek4;

		while (x < 4) 
		{
		if (x==0){tr =('.countdown'); time = ts;}
		else if (x==1){tr =('.countdown2'); time = ts2;}
		else if (x==2){tr =('.countdown3'); time = ts3;}
		else if (x==3){tr =('.countdown4'); time = ts4;}
		
		$(tr).countdown({timestamp:time,
		callback: function(days, hours, minutes, seconds){

            var message = "";
            message += days + " day" + ( days==1 ? '':'s' ) + ", ";
            message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
            message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
            message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
        }
    });
	x++;
	}
	
});