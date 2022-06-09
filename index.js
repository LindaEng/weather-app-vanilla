//Get buttons
const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
const temperature = document.getElementById('temperature')

let tempNum = 0
let region = ''

//making the API call 
const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {q: 'New York City', days: '1'},
    headers: {
      'X-RapidAPI-Key': 'e7979acb95msh4346ebea3683954p1ea14bjsn84a977cf8075',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
const getWeather = async () => {
    let res = await axios.request(options)
    return res.data
}

const setLocation = async () => {
    let data = await getWeather()
    region = data.location.name
    tempNum = Number(data.forecast.forecastday[0].day.maxtemp_f)
    temperature.textContent = temperature.textContent + region + " - " + tempNum
}

setLocation()

const incrementWeather = () => {
    tempNum++
    temperature.textContent = 'CurrentTemp: ' + region + ' - ' + tempNum
}

const decrementWeather = () => {
    tempNum--
    temperature.textContent = 'CurrentTemp: ' + region + ' - ' + tempNum
}


//click logic
increment.addEventListener("click", async (event) => {
    incrementWeather()
})

decrement.addEventListener("click", async (event) => {
    decrementWeather()
})