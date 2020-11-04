
const API_KEY= '79ba7e126cf6a892454d22ee9c7b287f';

const getForecastWeatherByCoords = async (lat: number, long: number) => {
    try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&cnt=7&appid=${API_KEY}`)
        const json = await res.json();
        return json;
    } catch (error) {
        console.error(error);
    }

}

export {
    getForecastWeatherByCoords
}