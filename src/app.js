import React, { useState } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const App = () => {

  let [data, setData] = useState(null);
  let [requestParams, setRequestParams] = useState({});
  let [loading, setLoading] = useState(false);

  const fetchData = (requestParams) => {
    console.log(requestParams);
    fetch(requestParams.url)
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    })
  }

  const callApi = async (requestParams) => {
    const data = {
      count: 2,
      results: [
        { name: 'Fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'Fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(data);
    setLoading(false);
    await setRequestParams(requestParams);
    await fetchData(requestParams);
  }
  
  return (
    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL {requestParams.url}</div>
      <Form loading={ loading } handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;