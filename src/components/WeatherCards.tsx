import { Component, Fragment } from 'react';

import { IMAGE_URL } from '../utils/constants';
import { Weather } from '../utils/types';

interface WeatherCardsProps {
  weatherList: Weather[];
}

const getDate = (dt: Weather['dt']) =>
  new Date(dt * 1000).toLocaleString('en-us', { weekday: 'short' });

const WeatherIcon = (weather: Weather['weather'], width = 120) =>
  <img width={width} src={`${IMAGE_URL}/${weather[0].icon}@2x.png`} alt={weather[0].description} />;

const TodayCard = (item: Weather) => (
  <div className='today-card'>
    Today
    <div className='today-details'>
      {WeatherIcon(item.weather, 200)}
      <div className='today-info'>
        <span className='today-temp'>{Math.round(item.temp.day)}</span>
        {item.weather[0].main}
      </div>
    </div>
  </div>
);

const WeatherCard = (item: Weather) => (
  <div className='card'>
    {getDate(item.dt)}
    {WeatherIcon(item.weather)}
    <span>{Math.round(item.temp.day)}</span>
  </div>
);


class WeatherCards extends Component<WeatherCardsProps, {}> {
  constructor(props: WeatherCardsProps) {
    super(props);
  }

  render() {
    return (
      <div className='card-container'>
        {this.props.weatherList.map((weather, idx) => (
          <Fragment key={idx}>
            {idx === 0 ? TodayCard(weather) : WeatherCard(weather)}
          </Fragment>
        ))}

      </div>
    );
  }
}

export default WeatherCards;
