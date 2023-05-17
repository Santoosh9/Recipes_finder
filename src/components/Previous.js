import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { YOUR_APP_ID, YOUR_APP_KEY } from './key';

const Previous = () => {
  const searches = [
    'pizza',
    'cookies',
    'somosa',
    'cheese',
    'drinks',
    'icecream',
    'shoup',
  ];

  const [querry, setQuery] = useState('');

  const [recipes, setRecipes] = useState([]);
  // const [isLoding, setIsLoding] = useState(false);

  var url = `https://api.edamam.com/search?q=${querry}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free
`;

  async function getRecipes() {
    var result = await Axios.get(url);

    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <>
      <div className="previous-searches section">
        <h2>Previous Searchs</h2>

        <div className="previous-searches-container">
          {searches.map((serch) => (
            <div className="search-items">{serch}</div>
          ))}
        </div>

        <div className="serch-box">
          <input
            type="text"
            placeholder="Search Recipes..."
            onChange={(e) => setQuery(e.target.value)}
            value={querry}
          />
          <button className="btn" onClick={onSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <h1 className="h11">Searched Recipes Items</h1>
      <br /> <br />
      <div className="main-list">
        {recipes.map((recipe) => {
          return (
            <div className="recipelist">
              <img
                className="recipelist-img"
                src={recipe['recipe']['image']}
                alt="img"
              />
              <p className="recipelist-p">{recipe['recipe']['label']}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Previous;
