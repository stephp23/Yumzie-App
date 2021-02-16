import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <ul className="category-list">
      <li>
          <Link to="/category/vegan">
              <div className="list-icon">Vegan
                <img className="category-icon" src="https://www.svgrepo.com/show/95357/carrot.svg" />
              </div>
           </Link>
          <hr />
      </li>
      <li>
          <Link to="category/vegetarian">
            <div className="list-icon">Vegetarian
              <img className="category-icon" src="https://www.svgrepo.com/show/269948/tomatoes-vegetable.svg" />
           </div>
           </Link>
          <hr />
      </li>
      <li>
      <Link to="/category/paleo">
        <div className="list-icon">Paleo
           <img className="category-icon" src="https://www.svgrepo.com/show/30672/avocado.svg" />
           </div>
      </Link>
          <hr />
      </li>
      <li>
        <Link to="/category/dairy-free">
            <div className="list-icon">Dairy-Free
              <img className="category-icon" src="https://www.svgrepo.com/show/259403/no-ice-cream.svg" />
           </div>
        </Link>
          <hr />
      </li>
      <li>
      <Link to="/category/gluten-free">
        <div className="list-icon">Gluten-Free
           <img className="category-icon" src="https://www.svgrepo.com/show/113467/wheat.svg" />
           </div></Link>
          <hr />
      </li>
      <li>
      <Link to="/category/FODMAP">
          <div className="list-icon">FODMAP
           <img className="category-icon" src="https://www.svgrepo.com/show/164142/chinese-food.svg" />
           </div>
           </Link>
          <hr />
      </li>
      <li>
      <Link to="/category/fat-free">
        <div className="list-icon">Fat-Free
           <img className="category-icon" src="https://www.svgrepo.com/show/171966/bodybuilder.svg" />
        </div>
           </Link>
          <hr />
      </li>
      <li>
      <Link to="/category/low-sugar">
        <div className="list-icon">Low-Sugar
           <img className="category-icon" src="https://www.svgrepo.com/show/186253/sugar.svg" /></div></Link>
          <hr />
      </li>
      <li>
      <Link to="/category/keto">
        <div className="list-icon">Keto
           <img className="category-icon" src="https://www.svgrepo.com/show/282183/steak-meat.svg" /></div> </Link>
          <hr />
      </li>
      <li>
      <Link to="/category/fish">
        <div className="list-icon">Fish
           <img className="category-icon" src="https://www.svgrepo.com/show/49773/fish.svg" /></div> </Link>
      </li>
    </ul>
  )
};

export default Categories;

//Use ROUTER to a new page for
//Have all categories listed
//Redirect 
//Make API call and map through categories in the Object
//?Check if API has categories property in the object

//Look into overflow in CSS
//


//HOW TO CREATE CATEGORY CARDS
//have an array of categories as strings
//map through the array that has state 

//create a component that takes the string as a prop
//getData() when the component is rendered, use effect 
//use React Router to route the click on the card

//NavLink to -> RecipeHolder
//State= category
// You can wrap a navlink in a compontent, and style the component (even add buttons)

// const healthLabels = [“vegan”, “vegetarian”, “paleo”, “dairy-free”, “gluten-free”, “wheat-free”, “fat-free”, “low-sugar”, “egg-free”, “peanut-free”];

//make an array of objects 
//inside of each object include the label and the route
//make the label for each link  

// label: "Tree Nut Free"
// '?q=tree-nut-free'

{/* <ul>
          <li>
            <Link to="/vegan">Vegan</Link>
          </li>
          <li>
            <Link to="/vegetarian">Vegetarian</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul> */}