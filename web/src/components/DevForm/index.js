import React, { useState, useEffect } from 'react';

import './styles.css';

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  console.log(onSubmit);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuario do Github</label>
        <input
          type="text"
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={(event) => setGithubUsername(event.target.value)}
        />
      </div>

      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          type="text"
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={(event) => setTechs(event.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            name="latitude"
            id="latitude"
            required
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            name="longitude"
            id="longitude"
            required
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
          />
        </div>
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
