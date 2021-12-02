

var callBackgetSuccess = function(data){
    console.log("donnes api", data)
    var temp = document.getElementById("temp")
    temp.innerHTML = data.main.temp;
    var humid = document.getElementById("hum")
    humid.innerHTML = data.main.humidity;
}



function buttonClickGet(){
    var element = document.getElementById("nomVille").value;

    var url="https://api.openweathermap.org/data/2.5/weather?q="+element+"&units=metric&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, callBackgetSuccess).done(function(){

         })
         .fail(function(){
            alert("error")
            })
        .always(function(){

         });
  
}       

//  https://openweathermap.org/current#current_JSON

    
  
   