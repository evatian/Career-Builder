import React, { Component } from 'react';
import CareerBuilder from './containers/CareerBuilder/CareerBuilder';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CareerBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
