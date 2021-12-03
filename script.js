const today = document.querySelector(".today");
const tomorrow = document.querySelector(".tomorrow");
const totomorrow = document.querySelector(".totomorrow");

let callBackgetSuccess = function(data){
    console.log("donnes api_1", data)
    console.log(data)
    const temp = document.getElementById("temp")
    temp.innerHTML = "La température actuelle est de : "+data.main.temp+" C°";
    const tempMin = document.getElementById("tempMin")
    tempMin.innerHTML = "La température minimum est de : "+data.main.temp_min+" C°";
    const tempMax = document.getElementById("tempMax")
    tempMax.innerHTML = "La température maximum est de : "+data.main.temp_max+" C°";
    const humid = document.getElementById("hum")
    humid.innerHTML = "Le taux d'humidité est de : "+data.main.humidity+" %";
    const vent = document.getElementById("vent")
    vent.innerHTML = "La vitesse du vent est de : "+data.wind.speed+" m/s";
    const pression = document.getElementById("press")
    pression.innerHTML = "La valeur de pression est de : "+data.main.pressure+" hPa";
    const city = document.querySelector(".cityName")
    city.innerHTML= "<< "+document.getElementById("nomVille").value+" >>";
  
}

let callBack2getSuccess = function(data2){

            today.classList.toggle("show");
            console.log("donnes apis_2", data2)
            console.log(data2)
            const date3heurs = document.querySelector(".date3H") 
            date3heurs.innerHTML=data2.list[1].dt_txt;
        
            const pluie = document.querySelector(".pluie") 
            
            
            if (Object.keys(data2.list[1]).includes('rain')==false){
                pluie.innerHTML="Absence des donnés";
                const icon = document.querySelector(".icon")
                icon.src="http://openweathermap.org/img/w/10d.png"
                const city = document.querySelector(".cityName1")
                city.innerHTML= "<< "+document.getElementById("nomVille").value+" >>"
        
            }else{
                pluie.innerHTML=data2.list[1].rain['3h']+" mm";
                const icon = document.querySelector(".icon")
                const iconcode =data2.list[1].weather[0].icon;
                icon.src="http://openweathermap.org/img/w/"+iconcode+".png"
                const city = document.querySelector(".cityName1")
                city.innerHTML= "<< "+document.getElementById("nomVille").value+" >>"
                
            }
      
   
    }
   
     


function buttonClickGet(){
   
    let url="https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("nomVille").value+"&units=metric&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, callBackgetSuccess).done(function(){

         })
         .fail(function(){
            alert("Veuillez vérifier le nom de la ville merci ...")
            })
        .always(function(){

         });
  
}    
function button2ClickGet(){
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("nomVille").value+"&appid=668484f6dbe8b8f6daf28d10bf49bc08"
            

   
            $.get(url, callBack2getSuccess).done(function(){

                })
                .fail(function(){
                    alert("Veuillez vérifier le nom de la ville merci ...")
                    })
                .always(function(){ 

                });
    
}

function button3ClickGet(){
   
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("nomVille").value+"&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, (data3)=>{
        const date3heurs = document.querySelector(".date4H") 
        date3heurs.innerHTML=data3.list[6].dt_txt;
    
        const pluie = document.querySelector(".pluie2") 
       
        tomorrow.classList.toggle("show");
        if (Object.keys(data3.list[6]).includes('rain')==false){
             pluie.innerHTML="Absence des donnés";
             const icon = document.querySelector(".icon2")
             icon.src="http://openweathermap.org/img/w/10d.png"
             const city = document.querySelector(".cityName2")
             city.innerHTML= "<< "+document.getElementById("nomVille").value+" >>"
        }else{
            pluie.innerHTML=data3.list[6].rain['3h']+" mm";
            const icon = document.querySelector(".icon2")
            const iconcode =data3.list[6].weather[0].icon;
            icon.src="http://openweathermap.org/img/w/"+iconcode+".png"
            const city = document.querySelector(".cityName2")
            city.innerHTML= "<< "+document.getElementById("nomVille").value+" >>";
            
        }

    }).done(function(){

         })
         .fail(function(){
            alert("error")
            })
        .always(function(data3){

    

         });
  
 }   
 function button4ClickGet(){
   
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("nomVille").value+"&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, (data4)=>{
        const date3heurs = document.querySelector(".date5H") 
        date3heurs.innerHTML=data4.list[14].dt_txt;
    
        const pluie = document.querySelector(".pluie3") 
        
        totomorrow.classList.toggle("show");
           
        if (Object.keys(data4.list[14]).includes('rain')==false){
             pluie.innerHTML="Absence des donnés";
             const icon = document.querySelector(".icon3")
             icon.src="http://openweathermap.org/img/w/10d.png"
             const city = document.querySelector(".cityName3")
             city.innerHTML= "<< "+document.getElementById("nomVille").value+" >>";
        }else{
            pluie.innerHTML=data4.list[14].rain['3h']+" mm";
            const icon = document.querySelector(".icon3")
            const iconcode =data4.list[14].weather[0].icon;
            icon.src="http://openweathermap.org/img/w/"+iconcode+".png"
            const city = document.querySelector(".cityName3")
            city.innerHTML= "<< "+document.getElementById("nomVille").value+" >>";
            
        }

    }).done(function(){

         })
         .fail(function(){
            alert("Veuillez vérifier le nom de la ville merci ...")
            })
        .always(function(data3){

    

         });
  
 }       

 const entrer = document.getElementById("nomVille");
 console.log(entrer)

 if(entrer){
    entrer.addEventListener('keydown', function (e) {
    if(e.key === 'Enter') {
         buttonClickGet();
    }
 }
  )
};

//  https://openweathermap.org/current#current_JSON

    
  
   