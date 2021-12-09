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
    vent.innerHTML = "La vitesse du vent est de : "+((data.wind.speed/1000)/(1/3600))+" km/h";
    const pression = document.getElementById("press")
    pression.innerHTML = "La valeur de pression est de : "+data.main.pressure+" hPa";
    const city = document.querySelector(".cityName")
    city.innerHTML= "⇩ "+document.getElementById("nomVille").value+" ⇩";
    const map = document.querySelector(".map")
    map.src="https://www.google.com/maps?q="+document.getElementById("nomVille").value+"&z=5&output=embed"
  
}
//précipitations d'aujourd'hui
let callBack2getSuccess = function(data2){

            today.innerHTML="";
            today.classList.toggle("show");
            console.log("donnes apis_2", data2)
            console.log(data2)



            var city = document.createElement('p')
            city.classList.add("villeCity");
            var nameCity = document.createTextNode("⇩ "+document.getElementById("nomVille").value+" ⇩");
            city.appendChild(nameCity);
            today.appendChild(city);

            var d =new Date();
            

    for(var i=0;i<40;i++){

            
            console.log("le jour d'auhordhui "+d.getDay());
            var dtt =new Date(data2.list[i].dt*1000)
        
        if(dtt.getDay() === d.getDay()){

            var divtest= document.createElement('div');
            var date3H =document.createElement('p');
            var textdate = document.createTextNode(data2.list[i].dt_txt);
            date3H.appendChild(textdate);
            divtest.appendChild(date3H);

            if (Object.keys(data2.list[i]).includes('rain')==false){
                
                var pluie =document.createElement('p');
                textPluie = document.createTextNode("Absence des donnés");
                pluie.appendChild(textPluie)
                divtest.appendChild(pluie)

                var icon =document.createElement('img');
                icon.src = "absenceDonner.png"
                
                divtest.appendChild(icon)
        
            }else{
              
                var pluie =document.createElement('p');
                textPluie = document.createTextNode(data2.list[i].rain['3h']+" mm");
                pluie.appendChild(textPluie)
                divtest.appendChild(pluie)

                var icon =document.createElement('img');
                const iconcode =data2.list[i].weather[0].icon;
                icon.src = "http://openweathermap.org/img/w/"+iconcode+".png"
                
                divtest.appendChild(icon)
            }
      
            document.querySelector(".today").appendChild(divtest)
        }
    }
    }
   
     

//informations météo de la ville
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
//précipitations d'aujourd'hui
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
//précipitations de demain
function button3ClickGet(){
   
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("nomVille").value+"&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, (data2)=>{
        tomorrow.innerHTML="";
        tomorrow.classList.toggle("show");

       



        var city = document.createElement('p')
        city.classList.add("villeCity");
        var nameCity = document.createTextNode("⇩ "+document.getElementById("nomVille").value+" ⇩");
        city.appendChild(nameCity);
        tomorrow.appendChild(city);


        var d =new Date();
            


    for(var i=0;i<40;i++){
    
                console.log("le jour d'auhordhui "+d.getDay());
                var dtt =new Date(data2.list[i].dt*1000)
                var condition =false;
                    if(d.getDay()==6){
                        if(d.getDay()+1 == 0)
                        condition=true;
                    }else{
                    if(dtt.getDay() === d.getDay()+1){
                        condition=true;
                    }
         if(condition){
        
            var divtest= document.createElement('div');
            var date3H =document.createElement('p');
            var textdate = document.createTextNode(data2.list[i].dt_txt);
            date3H.appendChild(textdate);
            divtest.appendChild(date3H);

            if (Object.keys(data2.list[i]).includes('rain')==false){
                
                var pluie =document.createElement('p');
                textPluie = document.createTextNode("Absence des donnés");
                pluie.appendChild(textPluie)
                divtest.appendChild(pluie)

                var icon =document.createElement('img');
                icon.src = "absenceDonner.png"
                
                divtest.appendChild(icon)
        
            }else{
              
                var pluie =document.createElement('p');
                textPluie = document.createTextNode(data2.list[i].rain['3h']+" mm");
                pluie.appendChild(textPluie)
                divtest.appendChild(pluie)

                var icon =document.createElement('img');
                const iconcode =data2.list[i].weather[0].icon;
                icon.src = "http://openweathermap.org/img/w/"+iconcode+".png"
                
                divtest.appendChild(icon)
            }
      
            document.querySelector(".tomorrow").appendChild(divtest)
        }
    }
}
    
    

    }).done(function(){

         })
         .fail(function(){
            alert("error")
            })
        .always(function(data3){

    

         });
        
 }   

 //précipitations après demain
 function button4ClickGet(){
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+document.getElementById("nomVille").value+"&appid=668484f6dbe8b8f6daf28d10bf49bc08"
    $.get(url, (data2)=>{
        totomorrow.innerHTML="";
        totomorrow.classList.toggle("show");

        var city = document.createElement('p')
        city.classList.add("villeCity");
        var nameCity = document.createTextNode("⇩ "+document.getElementById("nomVille").value+" ⇩");
        city.appendChild(nameCity);
        totomorrow.appendChild(city);
           
        var d =new Date();

        for(var i=0;i<40;i++){
   
               console.log("le jour d'auhordhui "+d.getDay());
               var dtt =new Date(data2.list[i].dt*1000)
               var condition =false;
            if(d.getDay()==5){
                if(d.getDay()+2== 0)
                condition=true;
            }else{
            if(dtt.getDay() === d.getDay()+2){
                condition=true;
            }
          if(condition){

            var divtest= document.createElement('div');
            var date3H =document.createElement('p');
            var textdate = document.createTextNode(data2.list[i].dt_txt);
            date3H.appendChild(textdate);
            divtest.appendChild(date3H);

            if (Object.keys(data2.list[i]).includes('rain')==false){
                
                var pluie =document.createElement('p');
                textPluie = document.createTextNode("Absence des donnés");
                pluie.appendChild(textPluie)
                divtest.appendChild(pluie)

                var icon =document.createElement('img');
                icon.src = "absenceDonner.png"
                
                divtest.appendChild(icon)
        
            }else{
              
                var pluie =document.createElement('p');
                textPluie = document.createTextNode(data2.list[i].rain['3h']+" mm");
                pluie.appendChild(textPluie)
                divtest.appendChild(pluie)

                var icon =document.createElement('img');
                const iconcode =data2.list[i].weather[0].icon;
                icon.src = "http://openweathermap.org/img/w/"+iconcode+".png"
                
                divtest.appendChild(icon)
            }
      
            document.querySelector(".totomorrow").appendChild(divtest)
        }
    }
    }
        
    }).done(function(){

         })
         .fail(function(){
            alert("Veuillez vérifier le nom de la ville merci ...")
            })
        .always(function(data3){

    

         });
  
 }       
 //faire fonctionner la touche entrer après le saisi 
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

//blague api fonction
function buttonBlague(){
    let url="http://api.icndb.com/jokes/random"
    $.get(url, (data)=>{
        console.log(data.value.joke)
        const blague = document.querySelector(".blague")
        blague.innerHTML=data.value.joke;
        const nores = document.querySelector(".nores")
        nores.src="https://img.icons8.com/plasticine/50/000000/chuck-norris.png";


         })
         .fail(function(){
            alert("erreur")
            })
        .always(function(){

         });
  
}   
//Creer une date 
function afficheHeure(){
    const d =new Date();
    const heure = d.getHours();
    const minutes = d.getMinutes();
    const secondes = d.getSeconds();
    var heurMinutes = document.createElement('span');
    var heureText= document.createTextNode("L'heure locale   "+heure +"h : "+minutes+"min  : "+secondes+" s  ");
    heurMinutes.appendChild(heureText);
    document.querySelector("header").appendChild(heurMinutes);
}
afficheHeure();
setInterval(afficheHeure,1000);

//Dark-Mode:
function modeDark() {
    var element = document.body;
    var tete = document.querySelector(".tete");
    var h = document.querySelector("h1")
    var bloc1 = document.querySelector(".bloc1");
    var bloc2= document.querySelector(".bloc2");
    var bloc3= document.querySelector(".bloc3");
    var bloc4= document.querySelector(".bloc4");
    var foot= document.querySelector("footer");
    element.classList.toggle("darkMode");
    bloc1.classList.toggle("darkMode");
    bloc2.classList.toggle("darkMode");
    tete.classList.toggle("darkMode");
    h.classList.toggle("darkMode");
    bloc3.classList.toggle("darkMode");
    bloc4.classList.toggle("darkMode");
    foot.classList.toggle("darkMode");

    let mode = document.querySelector(".bb");
    mode.classList.toggle("darkMode");
    if(mode.alt === "dark"){
        mode.src="clair.png";
        mode.alt="clair"
    }else{
        mode.src="dark.png";
        mode.alt="dark"
    }

  }
  