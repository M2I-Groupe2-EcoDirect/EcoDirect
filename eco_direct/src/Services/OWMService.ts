const API_KEY = "4fa831592ca19ca577c3d24d285b6bbe"
const URI = "http://api.openweathermap.org/data/2.5/air_pollution?"
class OWMService{

getAllData = () =>{
    return fetch(`${URI}`)
}

}

export const OwmService = Object.freeze(new OWMService());