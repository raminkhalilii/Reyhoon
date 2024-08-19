import React, {useState} from 'react';
import "./Home.style.css"
import Header from "../../components/Header/Header.jsx";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay.jsx";

function Home() {

    const [category, setCategory] = useState([]);
    return (
        <div className="Home">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
        </div>
    )
}

export default Home;