$(document).ready(function() {

contactMenu = $(".contactMenu");
contactFlag = 0;

       

	$("#contact").click(function(){

        if(contactFlag==0)
        {

            dropContacts();
        }
        colapseContacts();
		

	});

	$("#contact").mousemove( function() {

	 	if(contactFlag==0)
        {

            dropContacts();
        }

	 } );



});



function dropContacts()
{

	
  contactMenu.css("visibility","visible");
	contactMenu.animate({height: '350px', width: '280px'}, 1000);
  contactFlag = 1;

	startCloseTimer();

}

function colapseContacts()
{
    
    contactMenu.animate({height: '0px', width: '0px'}, 1000);
    contactFlag = 0;
    hideContacts();

}

function startCloseTimer()
{	

    var timer = $.timer(function() {
            colapseContacts();
    });

    timer.set({ time : 5000, autostart : false });
    timer.once(5000);


    $(".contactMenu").mousemove( function(timer) {
        
      //  alert("q pedo");
      if(contactFlag == 1)
      {
        
     // console.log("no mames");
      timer.once(3000);
      }

        
            //timer.stop();
            //timer.play(true);
            //alert("no mames");
        


    } );

}

function hideContacts()
{
    var timer2 = $.timer(function() {
                contactMenu.css("visibility","hidden");
        });
       timer2.set({ time : 1000, autostart : false });
       timer2.once(1000);
}

