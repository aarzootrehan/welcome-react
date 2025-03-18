import { Card } from "./Card"
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";


export const Body = () => {
    let [filteredList, setFilteredList] = useState([]);
    let [listOfRes, setListOfRes] = useState([]);

    let [searchTxt, setSearchTxt] = useState("");

    console.log("Body has been rendered");
    // Called when the render cycle has been finished. After rendering of component is done.
    // Callback function will be called
    useEffect(() => {
        console.log("Use Effect")
        fetchData();
    }, []);


    const fetchData = async () => {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3985667&lng=76.9646908&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    return listOfRes.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="search">
                <input type="text"
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value)

                    }}
                />
                <button onClick={() => {
                    let fList = listOfRes.filter((elem) => elem.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                    setFilteredList(fList);
                }}>
                    Search
                </button>

                <button onClick={() => {
                    let fList = listOfRes.filter((res) => res.info.avgRating > 4.2);
                    setFilteredList(fList);
                }}>Top Rated Restuarants</button>
            </div>

            <div className="res-container">

                {filteredList?.map((item) => (
                    <Link to={"/restaurant/" + item.info.id} 
                    key={item.info.id}>
                        <Card resData={item} />
                    </Link>))}
            </div>
        </div>
    )

}