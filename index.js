console.log("connected")

let btn = document.getElementById("check");


btn.addEventListener("click",output);

document.getElementById('reset').addEventListener("click",function () {

    document.getElementById('output').innerHTML = '';
    
})
console.log(btn);

function output(event) {
    event.preventDefault();
   
     let city = document.getElementById('cityName').value;
     console.log(city) 
    const xhr = new XMLHttpRequest();
     
    xhr.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fd12b65b386de82d4405d117913a160b`,true);

    xhr.onload = function(){
           console.log("this called")
        if(this.status == 200)
        {
            let obj = JSON.parse(this.responseText)
            console.log(obj.main)

            let str = `<h3>Curr Temp = ${obj.main.temp} &#176;cel <br><br> Min Temp = ${obj.main.temp_min} &#176;cel <br><br> Max Temp = ${obj.main.temp_max} &#176;cel <br><br></h3>`

            document.getElementById('output').innerHTML = str;
        }
        else
        {
           alert(`Cannot find The temperature`) 
        }
    } 

     xhr.send()
}