import React, {Component} from "react";
import PropTypes from "prop-types";
import Recipe from "./Recipe";
import "./RecipeList.css";

class ReacipeList extends Component {
    static defaultProps = {
        recipes: [
            {
              title: "Spaghetti",
              instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
              ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
              img: "spaghetti.jpg"
            },
            {
              title: "Milkshake",
              instructions: "Combine ice cream and milk.  Blend until creamy",
              ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
              img: "milkshake.jpg"
            },
            {
              title: "Avocado Toast",
              instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
              ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
              img: "avocado_toast.jpg"
            }
        ]     
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    render() {
        const recipes = this.props.recipes.map((r, index) => {
            return <Recipe key={index} {...r}/>
        })
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        )
    }
}

export default ReacipeList;

