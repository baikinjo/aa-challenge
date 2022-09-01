import { Component } from 'react';

import Menu from './components/Menu';
import WeatherCards from './components/WeatherCards';

import { API_KEY, BASE_URL, CITIES } from './utils/constants';
import { Weather, City } from './utils/types';
import './styles/app.less';

interface State {
  error: boolean;
  loading: boolean;
  weatherList: Weather[];
  cities: City[];
  currentCity: City;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: false,
      loading: true,
      weatherList: [],
      cities: CITIES,
      currentCity: CITIES[0]
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  fetchData(city: City) {
    const { lat, lon } = city;

    this.setState({
      ...this.state,
      loading: true,
      currentCity: city
    });

    fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${API_KEY}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then(data => this.setState({
        ...this.state,
        loading: false,
        weatherList: data.list
      }))
      .catch(() => this.setState({
        ...this.state,
        loading: false,
        error: true
      }));
  }

  handleItemClick(city: City) {
    this.fetchData(city);
  }

  componentDidMount() {
    this.fetchData(this.state.currentCity);
  }

  render() {
    if (this.state.error) {
      return (
        <div className='container'>
          <p className='error'>Something went wrong... please check back again</p>
        </div>
      );
    }

    return (
      <div className='container'>
        <Menu currentCity={this.state.currentCity} onItemClick={this.handleItemClick} />
        {this.state.loading
          ? <div className='loading'>Fetching data...</div>
          : <WeatherCards weatherList={this.state.weatherList} />
        }
      </div>
    );
  }
}

export default App;
