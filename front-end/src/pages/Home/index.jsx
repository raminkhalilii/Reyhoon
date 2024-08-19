import React, {useState} from 'react';
import "./Home.style.css"
import Header from "../../components/Header/index.jsx";
import ExploreMenu from "../../components/ExploreMenu/index.jsx";

function Home() {

    const [category, setCategory] = useState([]);
    return (
        <div className="Home">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
        </div>
    )
}

export default Home;