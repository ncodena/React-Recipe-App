import './RecipeApp.css';

import Recipe from './Recipe.js';

function RecipeApp() {
  return (
    <div className="App">
      <Recipe 
      title="pasta" 
      ingredients={['flour', 'water']}
      instructions="Mix ingredients"
      img="spaghetti.jpg"
      />
    </div>
  );
}

export default RecipeApp;
