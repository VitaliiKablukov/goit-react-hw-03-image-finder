import axios from 'axios';
import { Component } from 'react';

export class App extends Component {
  state = {
    picture: [],
  };
  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://pixabay.com/api/?q=cat&page=1&key=29826556-a4f91074fca654992db1f732d&image_type=photo&orientation=horizontal&per_page=12'
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <div></div>;
  }
}
