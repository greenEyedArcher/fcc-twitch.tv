var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
var api = "https://wind-bow.glitch.me/twitch-api/channels/";
for (var i=0; i<channels.length; i++){
   api = "https://wind-bow.glitch.me/twitch-api/channels/"+channels[i];
   
   $.ajax({
      dataType: "json",
      method: "GET",
      url: api,
      success: function(data){
       var div;
       var status = data.status;
       var channel_name;
       var link;
       var logo;
     
       if(data.hasOwnProperty('mature')){
          channel_name = data.display_name;
          link = data._links.self;
          logo = data.logo;
          
          if (!data.mature) status = "Offline";
          if (status.length>30) status = status.substring(0,30)+"...";
          
          div = "<div class='row block'>"+
          "<div class='col-md-3'>"+
          "<img src='"+logo+"'>"+
          "</div>"+
          "<div class='col-md-3'>"+
          "<a href='"+link+"' target=blank>"+channel_name+"</a>"+
          "</div>"+
          "<div class='col-md-6 status'>"+
          "Status: "+status+
          "</div>"+
          "</div>";
       } else {
            div = "<div class='row block'>"+
            "Status: "+data.message+
            "</div>"; 
          }
       
       $('#channels').append("<li>"+div+"<li>");
    }
}); 
}
