import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Artist } from "react-spotify-api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //settings
      attributes: {
        loudness: 0,
        tempo: 0
      },
      track: null,
      artist: null
    };
    console.log(this.props);
    console.log(this.state);
  }
  getAudioFeatures(track) {
    //for attribute in audio features, if key not in this.state, add
  }
  componentDidMount() {
    this.getAudioFeatures();
  }

  //do beofre update ..?
  getNextTrack() {
    //get nexttrack
    //update this.state
  }

  componentDidUpdate() {
    this.changeTrack(); //getupdatedmethod to chekc against old state to verfiy to change
  }

  changeTrack() {
    /*Object.keys(this.state).forEach(key => {
      console.log(this.state[key]);
    });*/

    this.getNextTrack();
  }

  //default incremnt 1 respective unit depending on range
  updateFeature(feature, change) {
    let unit = 1;
    let attributes = { ...this.state.attributes };
    change === "+"
      ? /*? this.setState({
          [`${[feature]}`]: this.state.attributes[feature] + unit
        })
      : this.setState({
          [`${feature}`]: this.state.attributes[feature] - unit
        });*/
        (attributes[feature] = attributes[feature] + unit)
      : (attributes[feature] = attributes[feature] - unit);
    this.setState({
      attributess
    });
  }

  adjust(feature, change) {
    this.updateFeature(feature, change);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Artist id="1XpDYCrUJnvCo9Ez6yeMWh">
            {(artist, loading, error) =>
              artist ? <h1>{artist.name}</h1> : null
            }
          </Artist>
          {Object.keys(this.state.attributes).map(key => {
            //if (key in this.state) ? (
            //console.log(typeof key);
            return (
              <div key={key} style={{ display: "block", float: "left" }}>
                <button style={btn} onClick={() => this.adjust(key, "-")}>
                  -1
                </button>
                <button style={btn} onClick={() => this.adjust(key, "+")}>
                  +1
                </button>
                <p style={{ display: "inline-block" }}>
                  {key}: {this.state.attributes[key]}
                </p>
              </div>
            );
          })}
        </header>
      </div>
    );
  }
}

const btn = {
  marginRight: 10,
  float: "left",
  display: "inline-block",
  marginBlockStart: "2em",
  marginBlockEnd: "2em"
};

export default App;
