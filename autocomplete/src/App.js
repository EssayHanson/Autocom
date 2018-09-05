import React, { Component } from 'react';
import Autocomplete from  'react-autocomplete';
import { getShows, matchShows } from './data';
import ShowDisplay from './components/ShowDisplay';
import './App.css';

class App extends Component {

  state = { value: '' };

  render() {
    return (
      <div style = {{ marginTop: 40, marginLeft: 50 }}>
      <ShowDisplay task="Shows to watch"/>
        <Autocomplete
          value={ this.state.value }
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ getShows() }
          getItemValue={ item => item.name }
          shouldItemRender={ matchShows }
          onChange={(event, value) => this.setState({ value }) }
          onSelect={ value => this.setState({ value }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.abbr } >
              { item.name }
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
