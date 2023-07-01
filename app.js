// don't show api key on your js file

const API_key = `46ad7457603b9b0104e633e78cd60e16`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}



const displayTemperature = data =>{ 
//    const temperature =  document.getElementById('temp')
// temperature.innerText = data.main.temp;
setInnerTextByID('temp', data.main.temp );
setInnerTextByID('condition',  data.weather[0].main);
console.log(data.weather[0].main);

}

const setInnerTextByID = (id, text) =>{
    const temperature =  document.getElementById(id)
    temperature.innerText = text;
}


document.getElementById('btn-search').addEventListener('click', function(){
const searchText = document.getElementById('search-field')
const city = searchText.value 


//set city 


document.getElementById('city').innerText = city
      loadTemperature(city) 

})



loadTemperature("dhaka")