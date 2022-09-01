import { Component } from 'react';

import { CITIES } from '../utils/constants';
import { City } from '../utils/types';

interface MenuProps {
  currentCity: City;
  onItemClick: (city: City) => void;
}

class Menu extends Component<MenuProps, {}> {
  constructor(props: MenuProps) {
    super(props);
  }

  render() {
    return (
      <div className='menu'>
        {CITIES.map(city => (
          <h1 key={city.name}
            onClick={() => this.props.onItemClick(city)}
            className={city.name === this.props.currentCity.name ? 'active' : ''}
          >
            {city.name}
          </h1>
        ))}
      </div>
    );
  }
}

export default Menu;
