import React from 'react';
import { useHistory } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  const {title} = props;
  const history = useHistory();
  function mainPage() {
    history.push("/");
  }
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button" onClick={() => mainPage()}>Anasayfa</div>
    </div>
  );
}
