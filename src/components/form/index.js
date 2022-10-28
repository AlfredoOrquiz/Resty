import React, { useState } from 'react';
import './form.scss';

const Form = (props) => {
  let [method, setMethod] = useState('');
  let [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      method,
      url,
    };
    props.handleApiCall(fromData);
  }

  const onChange = (e) => {
    let {name, value, checked} = e.target;
    console.log(e.target);
    if (name === 'url') setUrl(value);
    if (name === 'get' && checked) setMethod(name);
    if (name === 'post' && checked) setMethod(name);
    if (name === 'put' && checked) setMethod(name);
    if (name === 'delete' && checked) setMethod(name);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' onChange={onChange}/>
        </label>
        <label className="methods">
          <input type="radio" name="get" id="get" onChange={onChange}/>GET
          <input type="radio" name="post" id="post" onChange={onChange}/>POST
          <input type="radio" name="put" id="put" onChange={onChange}/>PUT
          <input type="radio" name="delete" id="delete" onChange={onChange}/>DELETE
        </label>
        <button type="submit">GO!</button>
      </form>
    </>
  )
}

export default Form;