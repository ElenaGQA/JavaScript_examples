let weatherContainer = document.querySelector('#weatherContainer')
let userInp = document.querySelector("#userInp")
let click = document.querySelector("#click")
let weatherImg = document.querySelector("#weatherImg")
let temp = document.querySelector("#temp")
let info = document.querySelector("#info")
let hourForecast = document.querySelector("#hourForecast")

let cities = [
    { city: "New York", country: "United States" },
    { city: "Los Angeles", country: "United States" },
    { city: "Chicago", country: "United States" },
    { city: "Houston", country: "United States" },
    { city: "Phoenix", country: "United States" },
    { city: "Philadelphia", country: "United States" },
    { city: "San Antonio", country: "United States" },
    { city: "San Diego", country: "United States" },
    { city: "Dallas", country: "United States" },
    { city: "San Jose", country: "United States" },
    { city: "London", country: "United Kingdom" },
    { city: "Manchester", country: "United Kingdom" },
    { city: "Birmingham", country: "United Kingdom" },
    { city: "Leeds", country: "United Kingdom" },
    { city: "Glasgow", country: "United Kingdom" },
    { city: "Liverpool", country: "United Kingdom" },
    { city: "Edinburgh", country: "United Kingdom" },
    { city: "Bristol", country: "United Kingdom" },
    { city: "Paris", country: "France" },
    { city: "Marseille", country: "France" },
    { city: "Lyon", country: "France" },
    { city: "Toulouse", country: "France" },
    { city: "Nice", country: "France" },
    { city: "Nantes", country: "France" },
    { city: "Montpellier", country: "France" },
    { city: "Berlin", country: "Germany" },
    { city: "Munich", country: "Germany" },
    { city: "Hamburg", country: "Germany" },
    { city: "Cologne", country: "Germany" },
    { city: "Frankfurt", country: "Germany" },
    { city: "Stuttgart", country: "Germany" },
    { city: "Düsseldorf", country: "Germany" },
    { city: "Sydney", country: "Australia" },
    { city: "Melbourne", country: "Australia" },
    { city: "Brisbane", country: "Australia" },
    { city: "Perth", country: "Australia" },
    { city: "Adelaide", country: "Australia" },
    { city: "Gold Coast", country: "Australia" },
    { city: "Auckland", country: "New Zealand" },
    { city: "Wellington", country: "New Zealand" },
    { city: "Christchurch", country: "New Zealand" },
    { city: "Tokyo", country: "Japan" },
    { city: "Osaka", country: "Japan" },
    { city: "Nagoya", country: "Japan" },
    { city: "Sapporo", country: "Japan" },
    { city: "Kyoto", country: "Japan" },
    { city: "Fukuoka", country: "Japan" },
    { city: "Seoul", country: "South Korea" },
    { city: "Busan", country: "South Korea" },
    { city: "Incheon", country: "South Korea" },
    { city: "Daegu", country: "South Korea" },
    { city: "Daejeon", country: "South Korea" },
    { city: "Gwangju", country: "South Korea" },
    { city: "Beijing", country: "China" },
    { city: "Shanghai", country: "China" },
    { city: "Guangzhou", country: "China" },
    { city: "Shenzhen", country: "China" },
    { city: "Chengdu", country: "China" },
    { city: "Hong Kong", country: "China" },
    { city: "São Paulo", country: "Brazil" },
    { city: "Rio de Janeiro", country: "Brazil" },
    { city: "Salvador", country: "Brazil" },
    { city: "Brasília", country: "Brazil" },
    { city: "Fortaleza", country: "Brazil" },
    { city: "Belo Horizonte", country: "Brazil" },
    { city: "Buenos Aires", country: "Argentina" },
    { city: "Córdoba", country: "Argentina" },
    { city: "Rosario", country: "Argentina" },
    { city: "Mendoza", country: "Argentina" },
    { city: "Lima", country: "Peru" },
    { city: "Arequipa", country: "Peru" },
    { city: "Trujillo", country: "Peru" },
    { city: "Quito", country: "Ecuador" },
    { city: "Guayaquil", country: "Ecuador" },
    { city: "Caracas", country: "Venezuela" },
    { city: "Maracaibo", country: "Venezuela" },
    { city: "Bogotá", country: "Colombia" },
    { city: "Medellín", country: "Colombia" },
    { city: "Cali", country: "Colombia" },
    { city: "Kigali", country: "Rwanda" },
    { city: "Nairobi", country: "Kenya" },
    { city: "Lagos", country: "Nigeria" },
    { city: "Abuja", country: "Nigeria" },
    { city: "Cape Town", country: "South Africa" },
    { city: "Johannesburg", country: "South Africa" },
    { city: "Durban", country: "South Africa" },
    { city: "Pretoria", country: "South Africa" },
    { city: "Moscow", country: "Russia" },
    { city: "Saint Petersburg", country: "Russia" },
    { city: "Novosibirsk", country: "Russia" },
    { city: "Yekaterinburg", country: "Russia" },
    { city: "Kazan", country: "Russia" },
    { city: "Novgorod", country: "Russia" },
    { city: "Cairo", country: "Egypt" },
    { city: "Alexandria", country: "Egypt" },
    { city: "Giza", country: "Egypt" },
    { city: "Marrakech", country: "Morocco" },
    { city: "Casablanca", country: "Morocco" },
    { city: "Rabat", country: "Morocco" },
    { city: "Lagos", country: "Nigeria" },
    { city: "Kinshasa", country: "Democratic Republic of the Congo" },
    { city: "Dar es Salaam", country: "Tanzania" },
    { city: "Zanzibar", country: "Tanzania" },
    { city: "Kinshasa", country: "Democratic Republic of Congo" },
    { city: "Lima", country: "Peru" },
    { city: "Bangkok", country: "Thailand" },
    { city: "Hong Kong", country: "China" },
    { city: "Kuala Lumpur", country: "Malaysia" },
    { city: "Singapore", country: "Singapore" },
]

userInp.addEventListener("input", () => {
    let inputText = userInp.value.trim().toLowerCase()

    if (inputText.length < 1) {
        cityList.innerHTML = ""
        return
    }

    const filteredCities = cities.filter((item) =>
        item.city.toLowerCase().startsWith(inputText)
    )

    cityList.innerHTML = ""
    filteredCities.forEach((item) => {
        const option = document.createElement("option")
        option.value = `${item.city}, ${item.country}`
        cityList.appendChild(option)
    })
})

click.addEventListener('click', () => {
    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${userInp.value}&appid=44765f35773bebd1b177855eeb541374`
    let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${userInp.value}&appid=44765f35773bebd1b177855eeb541374`

    if (userInp.value === "") {
        alert("Please, enter city")
        return
    }

    else {
        fetch(weatherURL)
            .then(response => response.json())
            .then(response => {
                desplayWeather(response)
                console.log(response.description)
            })

        fetch(forecastURL)
            .then(response => response.json())
            .then(response => {
                hourlyForecast(response.list)
                console.log(response.list[0].dt)
            })
    }
})

function desplayWeather(weatherData) {
    console
    let imgURL = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
    temp.innerHTML = `${Math.round(weatherData.main.temp - 273.12)} C°`
    info.innerHTML = weatherData.weather[0].description
    weatherImg.src = imgURL
    weatherImg.style.display = "block"
}

function hourlyForecast(weatherData) {
    let nextHours = weatherData.slice(0, 12)
    nextHours.forEach((elementID) => {
        let dateTime = new Date(elementID.dt * 1000)
        let hour = dateTime.getHours()
        let cityTemp = `${Math.round(elementID.main.temp - 273.12)} C°`
        let imgURL = `https://openweathermap.org/img/wn/${elementID.weather[0].icon}@4x.png`
        let forecastVar = `<div class="hourly-item"> <span>${hour}:00</span> <img src="${imgURL}" alt="Hourly Weather Icon"> <span>${cityTemp}</span> </div> `

        hourForecast.innerHTML += `${forecastVar}`
    })
}

