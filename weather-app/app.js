let url = 'https://api.openweathermap.org/data/2.5/'
let key = 'e38336df8ed6ab9f4ba2f79bd7a0a104'




const setQuery=(e)=>{
    if(e.keyCode =='13')
    getResult(sehir.value)
}

let sehir = document.querySelector('#girdi')
sehir.addEventListener('keypress' , setQuery)


const getResult = (sehirIsmi)=>{
    let query =`${url}weather?q=${sehirIsmi}&appid=${key}&units=metric&lang=tr`
    console.log(query);
    
    let x = "url('https://source.unsplash.com/1920x1080/?" + sehirIsmi +"')"
    document.body.style.backgroundImage = x
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result)=>{
    console.log(result)

    let city = document.querySelector('.sehir')
    city.innerText=`${result.name} , ${result.sys.country}`

    let deg = document.querySelector('.derece')
    deg.innerText=`${Math.round(result.main.temp)}°c`

   

    if(`${Math.round(result.main.temp)}`>23){
        document.body.children[0].children[0].children[1].children[1].style.color = "#FE7701"
    }  if(`${Math.round(result.main.temp)}`<21){
        document.body.children[0].children[0].children[1].children[1].style.color = "#FFD573"
    }  if(`${Math.round(result.main.temp)}`<11){
        document.body.children[0].children[0].children[1].children[1].style.color = "#95D9F2"
    }  if(`${Math.round(result.main.temp)}`<1){
        document.body.children[0].children[0].children[1].children[1].style.color = "#3BAFE5"
    }

    let durum = document.querySelector('.durum')
    durum.innerText=`${result.weather[0].description} `
 
    let img = document.querySelector('.img')
    const icon = result.weather[0].icon;
    img.innerHTML=`<img src= http://openweathermap.org/img/w/${icon}.png  />`


    let objectDate = new Date();
    let day = objectDate.getDate();
    console.log(day); // 23
    let month = objectDate.getMonth();
    console.log(month + 1); // 8
    let year = objectDate.getFullYear();
    console.log(year); // 2022
    
    let zaman = document.querySelector('.time')
    zaman.innerText=`${day}/${month+1}/${year}`


    
}






