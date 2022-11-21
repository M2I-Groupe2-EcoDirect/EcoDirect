
const URI = "https://datahub.io/core/geo-countries/r/0.geojson";
class GeoJson {
    getAllData() {
        return fetch(URI)
               .then((response) => response.json())
               .catch(err => console.error(err))
    }
}

export const geoJson = Object.freeze(new GeoJson());