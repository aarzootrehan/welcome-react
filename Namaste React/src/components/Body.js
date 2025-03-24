import { Card, withPromotedLabel } from "./Card"
import { useState, useEffect, useContext } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus.js";
import { UserContext } from "../context/UserContext";

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
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const PromotedCard = withPromotedLabel(Card);
    const isOnline = useOnlineStatus();
    const {loggedInUser, setUserName} = useContext(UserContext);

    return (

        <div className="body">

            {isOnline ? "" : "Ooopsss!! Looks like you are offline"}
            <div className="p-10">
                <input type="text"
                    className="border border-solid border-black p-2 rounded-md"
                    value={searchTxt}
                    onChange={(e) => {
                        setSearchTxt(e.target.value)

                    }}
                />
                <button
                    className="m-4 px-4 py-2 rounded-md bg-green-400 "
                    onClick={() => {
                        let fList = listOfRes.filter((elem) => elem.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                        setFilteredList(fList);
                    }}>
                    Search
                </button>

                <button
                    className=" rounded-md px-4 py-2 bg-blue-300"
                    onClick={() => {
                        let fList = listOfRes.filter((res) => res.info.avgRating > 4.2);
                        setFilteredList(fList);
                    }}>Top Rated Restuarants</button>

                <label>
                    User name update here:
                </label>
                <input type="text" 
                value={loggedInUser}
                onChange={(e) => setUserName(e.target.value)}></input>
            </div>

            <div className="flex flex-wrap">

                {filteredList?.map((item) => (

                    <Link to={"/restaurant/" + item.info.id}
                        key={item.info.id}>
                        {item.info.promoted ? <PromotedCard resData={item} /> :
                            <Card resData={item} />}

                    </Link>))}
            </div>
        </div>
    )

}