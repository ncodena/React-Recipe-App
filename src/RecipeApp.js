import './RecipeApp.css';

import RecipeList from './RecipeList.js';
import Navbar from './navbar.js';

function RecipeApp() {
  return (
    <div className="App">
    <Navbar />
      <RecipeList />
    </div>
  );
}

export default RecipeApp;
