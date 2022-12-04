/*import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
    <h1>Hey Azna!</h1>
    <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginal}/>
    <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
    
    </div>
  );
}

export default App;
*/

import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
 <h1>Hey Clever Programmer! Let's build Netflix Clone Front-end today </h1>
        <Row title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests. fetchTrending} />
        <Row title="Comedy Movies" fetchUrl={requests. fetchTrending}/>
        <Row title="Horror Movies" fetchUrl={requests. fetchTrending} />
        <Row title="Romance Movies" fetchUrl={requests. fetchTrending}/>
        <Row title="Documentaries" fetchUrl={requests. fetchTrending} />
            </div>
  );
    }
export default App;