import '../styles/components/Main.scss';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { getDailyForecast, getHourlyForecast } from '../api';
import { useContext } from 'react';
import WeatherContext from '../context/weather.context';
import Loader from './Loader';

function Main() {

  const { loading } = useContext(WeatherContext);

  return (
    <div className="Main">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CurrentWeather />
          <Forecast 
            type="hourly" 
            title="HOURLY FORECAST" 
            data={getHourlyForecast()} 
          />
          <Forecast 
            type="daily" 
            title="21 DAYS FORECAST" 
            data={getDailyForecast()} 
          />
        </>
      )}
    </div>
  )
}

export default Main