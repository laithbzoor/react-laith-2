import React, { useEffect, useState } from 'react';

export default function Details() {
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    let response = await fetch("https://forkify-api.herokuapp.com/api/get?rId=47746");
    let data = await response.json();
    setDetails(data.recipe);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className='m-auto'>
      <div className='container'>
        <img className='img-fluid' src={details.image_url} />
        <h2>{details.title}</h2>
        <p>{details.ingredients}</p>
        <p>{details.social_rank}</p>
      </div>
    </div>
  );
}
