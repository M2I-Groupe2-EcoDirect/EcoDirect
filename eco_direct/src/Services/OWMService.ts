const API_KEY = process.env.REACT_APP_API_OWM;
const URI = "http://api.openweathermap.org/data/2.5/air_pollution?"
class OWMService{

getAllData = () =>{
    return fetch(`${URI}`)
}

}

export const OwmService = Object.freeze(new OWMService());