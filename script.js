

let callBackgetSuccess = function(data){
    console.log("donnes api_1", data)
    console.log(data)
    const temp = document.getElementById("temp")
    temp.innerHTML = data.main.temp+" C°";
    const tempMin = document.getElementById("tempMin")
    tempMin.innerHTML = data.main.temp_min+" C°";
    const tempMax = document.getElementById("tempMax")
    tempMax.innerHTML = data.main.temp_max+" C°";
    const humid = document.getElementById("hum")
    humid.innerHTML = data.main.humidity+" %";
    const vent = document.getElementById("vent")
    vent.innerHTML = data.wind.speed+" m/s";
    const pression = document.getElementById("press")
    pression.innerHTML = data.main.pressure+" hPa";
}

let callBack2getSuccess = function(data2){
    console.log("donnes apis_2", data2)
    console.log(data2)
    const date3heurs = document.querySelector(".date3H") 
    date3heurs.innerHTML=data2.list[1].dt_txt;

    const pluie = document.querySelector(".pluie") 
       
    if (Object.keys(data2.list[1]).includes('rain')==false){
         pluie.innerHTML="Absence des donnés";
         const icon = document.querySelector(".icon")
         icon.src="http://openweathermap.org/img/w/10d.png"
    }else{
        pluie.innerHTML=data2.list[1].rain['3h']+" mm";
        const icon = document.querySelector(".icon")
        const iconcode =data2.list[1].weather[0].icon;
        icon.src="http://openweathermap.org/img/w/"+iconcode+".png"
        
    }
   
     
}

function buttonClickGet(){
   
    let url="https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("nomVille").value+"&units=metric&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, callBackgetSuccess).done(function(){

         })
         .fail(function(){
            alert("error")
            })
        .always(function(){

         });
  
}    
function button2ClickGet(){
   
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("nomVille").value+"&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, callBack2getSuccess).done(function(){

         })
         .fail(function(){
            alert("error")
            })
        .always(function(){ 

        });
    }

function button3ClickGet(){
   
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("nomVille").value+"&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, (data3)=>{
        const date3heurs = document.querySelector(".date4H") 
        date3heurs.innerHTML=data3.list[1].dt_txt;
    
        const pluie = document.querySelector(".pluie2") 
           
        if (Object.keys(data3.list[1]).includes('rain')==false){
             pluie.innerHTML="Absence des donnés";
             const icon = document.querySelector(".icon2")
             icon.src="http://openweathermap.org/img/w/10d.png"
        }else{
            pluie.innerHTML=data3.list[1].rain['3h']+" mm";
            const icon = document.querySelector(".icon2")
            const iconcode =data3.list[1].weather[0].icon;
            icon.src="http://openweathermap.org/img/w/"+iconcode+".png"
            
        }

    }).done(function(){

         })
         .fail(function(){
            alert("error")
            })
        .always(function(data3){

    

         });
  
 }     



//  https://openweathermap.org/current#current_JSON

    
  
   