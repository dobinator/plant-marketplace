import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SearchLocationForm from "../components/SearchLocationForm";
import SearchByPlant from "../components/SearchByPlant";
import BaseSalesPost from "../components/BaseSalesPost";

function SearchPage({ user }) {
  //state that stores user posts in order to map over BaseSalesPost
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPlantType, setSearchPlantType] = useState(null);

  const getUserPosts = async () => {
    try {
      let response = await API.getPosts();
      await setPosts(response.data, ...posts);
    } catch (error) {
      return console.error(error);
    }
  };
  useEffect(() => {
    getUserPosts();  
    // eslint-disable-next-line
  }, []);

  //search posts.plantName
  const filteredPlantName = posts.filter((plantName) => {
    if(!searchTerm && !searchPlantType){
      return true
    }
    if (searchPlantType === null && !searchTerm) {
      return plantName.plant_name
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    }
    if(searchPlantType !== null){
      return plantName.plant_type?.includes(searchPlantType)
    }

  });

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const sortByPlant = (e) => {
    const value = e.target.value;
    setSearchTerm(
      value
    );
    // console.log(searchTerm)
    // console.log(posts, "USERS")
  };
// console.log(filteredPlantName)
  return (
    <div className="search-page columns" style={{ margin: "20px 5px" }}>
      <div className="search-field column is-one-third">
        {/* Separate divs so we can fit the search field and the searched-posts side by side */}
        <div className="search-input">
          <SearchLocationForm />
          <SearchByPlant
            value={searchTerm}
            handleInputChange={handleInputChange}
            sortByPlant={sortByPlant}
          />
        </div>
      </div>

      <div className="searched-posts column is-two-thirds is-5 is-flex is-flex-wrap-wrap is-justify-content-space-around">
        {filteredPlantName
          .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
          .map((item) => (
            <BaseSalesPost key={item._id} plant={item} className="card" />
          ))}
      </div>
    </div>
  );
}

export default SearchPage;
