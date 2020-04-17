import React, { Component } from "react";

import { Cards, Chart, CountryPicker, Navbar, Footer } from "./components";

import { fetchData } from "./api";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      country: "",
    };
  }

  componentDidMount = async () => {
    const data = await fetchData();

    this.setState({ data: data });
  };

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data: data, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Footer />
      </div>
    );
  }
}

export default App;
