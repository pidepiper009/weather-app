import axios from 'axios';

export async function getWeatherData(
    endpoint,
    place_id,
    measurementSystem
) {
    const options = {
        method: 'GET',
        url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
        params: {
            place_id,
            language: 'en',
            units: measurementSystem
        },
        headers: {
            'x-rapidapi-key': 'bd0515dfb7msh4361f8d0e152992p14b72djsn014c15410a4f',
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}