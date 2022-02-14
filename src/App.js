import React, { useEffect } from 'react';
import './app.css';
import "./utils/strava";
import polyline from '@mapbox/polyline'

function App() {

    // useEffect(() => {
    // //  console.log('useEffect ran successfully')


    // },
    //   []);
  return (
    <div className="app">
      <h1>Strava Activities</h1>
      <div className="activity" id="activity"></div>
      <div className="activity" id="activity-name"></div>
      <div id="activity-distance"></div>
      <div id="averageSpeed"></div>
      <div id="totalTime"></div>
      <div id="elevationGain"></div>

      <div id="activity-map"></div>

    </div>
  );
}

export default App;