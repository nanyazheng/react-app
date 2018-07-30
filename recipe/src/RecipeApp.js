import React, { Component } from 'react';
import Navbar from "./Navbar";
import RecipeList from "./RecipeList";
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Recipe 
        title={["Spaghetti", "Milkshake", "Avocado Toast"]}
        ingredients={[["flour", "water"], ["2 Scoops Ice cream", "8 ounces milk"], ["2 slices of bread", "1 avocado"]]}
        img={["spaghetti.jpg", "milkshake.jpg", "avocado_toast.jpg"]}
        instructions={["mix", "Combine", "Slice"]} */}
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
