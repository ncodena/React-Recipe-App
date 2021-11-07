import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe.js';
import PropTypes from 'prop-types';

export default class RecipeList extends Component {
    static defaultProps = {
    recipes: [
        {
            title:'Milkshake',
            instructions: 'zzzzzzzzzzzzzzzzzzzz',
            ingredients: [
                "Ice-cream",
                "Milk"
            ],
            img: "milkshake.jpg"
        },

        {
            title:'Spaghetti',
            instructions: 'zzzzzzzzzzzzzzzzzzzz',
            ingredients: [
                "Flour",
                "Water"
            ],
            img: "spaghetti.jpg"
        },

        {
            title:'Avocado Toast',
            instructions: 'zzzzzzzzzzzzzzzzzzzz',
            ingredients: [
                "Avocado",
                "Bread"
            ],
            img: "avocado_toast.jpg"
        },

    ]};

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
       

    const recipes = this.props.recipes.map((r, index) => (
        <Recipe key= {index} {...r}/>
    ));

    return (
        
        <div className="recipe-list">
        {recipes}
        </div>
    )
                
            
    
    }
}
