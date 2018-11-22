import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import './App.css';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(term) {
    // console.log(term);
    const response = await unsplash
    .get('search/photos', {
      params: { query: term }
    })
    this.setState({
      images: response.data.results
    });
  }

  render() {

    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
