import React from "react";
// there will need to be some functionality for the plants in the dropdown menu... not totally done
function SearchByPlant() {
  return (
    <section>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar">
          <span className="navbar-item">
            <strong>Search by plant</strong>
          </span>
          <p className="subtitle is-5 text-center" />
          <div className="field has-addons">
            <p className="control" />
            <input className="input" type="text" placeholder="Find a plant" />
            <p className="control">
              <button className="button is-primary">Search</button>
            </p>
          </div>
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Plants</a>
            <div className="navbar-dropdown">
              <ul>
              <li className="navbar-item"></li>
              <li className="navbar-item">Flowering Plants</li>
              <li className="navbar-item">Foliage Type</li>
              <li className="navbar-item">Succulents and Cacti</li>
              <li className="navbar-item">Vegetables</li>
              <li className="navbar-item">Seeds</li> 
              <li className="navbar-item">Trees</li>
              </ul>
            </div>
          </div> */}
          <div className="select is-primary">
            <select className="is-hovered" name="Plants">
              <option>Select Plant Type</option>
              <option >Flowering Plants</option>
              <option >Foliage Type</option>
              <option >Succulents and Cacti</option>
              <option >Vegetables</option>
              <option >Seeds</option> 
              <option >Trees</option>
            </select>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default SearchByPlant;
