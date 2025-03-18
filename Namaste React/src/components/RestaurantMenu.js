import { useEffect, useState } from "react"
import { Shimmer } from "./Shimmer";
import { MenuItem } from "./MenuItem";
import { useParams } from "react-router"
import { MENU_API } from "../utils/constants.js";

export const RestaurantMenu = () => {
    let [resDetails, setResDetails] = useState();
    let [menu, setMenu] = useState();
    const {resId} = useParams();
    console.log("res id is ", resId);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        let response = await fetch(MENU_API + resId);
        let data = await response.json();
        setResDetails(data.data.cards[2]);
        console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
        setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
    }

    if(!resDetails) return <Shimmer/>

    const {name, cuisines, costForTwoMessage, avgRating} = resDetails?.card?.card?.info;

    return  (
        <div>
            <h2>Menu of {name}</h2>
            <div className="res-info">{cuisines.join(", ")}</div>
            <div className="res-info">{costForTwoMessage}</div>
            <div className="res-info">{avgRating}</div>


            Menu is as follows {menu.map((item) => <MenuItem item={item.card.info} key={item.card.info.id}/>)}

        </div>

    )
}