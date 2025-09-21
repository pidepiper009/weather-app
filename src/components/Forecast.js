import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';
import HorizontallyScrollable from './HorizontallyScrollable';

import '../styles/components/Forecast.scss';

function Forecast({ type, title, data }) {
  return (
    <div className="Forecast">
        <div className="forecast-container">
            <h3>{title}</h3>
            <HorizontallyScrollable className='widget-container'>
                {
                    data.map((singleData) => (
                        <div key={singleData.date || singleData.day}>
                            {
                                type ==="hourly" ?
                                <HourlyForecastWidget data={singleData} /> :
                                <DailyForecastWidget data={singleData} />
                            }
                        </div>
                    ))
                }
            </HorizontallyScrollable>
        </div>
    </div>
  )
}

export default Forecast