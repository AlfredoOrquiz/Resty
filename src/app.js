import React, { useState } from 'react';
import './app.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

const initialState = {
  loading: false,
  results: null,
  history: [],
  request: {},
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'begin':
      return { ...state, request: payload, loading: true }
    default:
        return state;
  }
};

const App = () => {

  // let [data, setData] = useState(null);
  // let [requestParams, setRequestParams] = useState({});
  // let [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const callApiReducer = async (searchQuery) => {
    const action = {
      type: "begin",
      payload: searchQuery,
    }
    dispatch(action);
  }

  const fetchData = (requestParams) => {
    console.log(requestParams);
    fetch(requestParams.url)
    .then((res) => res.json())
    .then((json) => {
      setData(json);
    })
  }

  useEffect(() => {
    if (state.loading === true && state.request.method && state.request.url) {
      fetchData(state.request);
    }
  }, [requestParams]);

  const callApi = async (requestParams) => {
    const data = {
      count: 2,
      results: [
        { name: 'Fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'Fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(data);
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