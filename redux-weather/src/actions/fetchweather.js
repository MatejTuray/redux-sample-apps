import axios from "axios";
const apiKey = "3659730b49ae257b7e73b61fd06f8540"


const fetchWeather = (city) => {
    const url = `https://peaceful-oasis-31467.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${city},sk&units=metric&lang=sk&appid=${apiKey}`
    return {
        type: "FETCH_WEATHER",
        payload: axios.get(url),

    }

}

export default fetchWeather;