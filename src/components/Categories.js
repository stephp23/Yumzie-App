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

