import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

/**
 * A custom hook
 * @param {} resId 
 * @returns 
 */
export const useRestaurantMenu = (resId) => {
    let [resDetails, setResDetails] = useState();
    let [menu, setMenu] = useState();
    let [categories, setCategories] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async ()  => {
        let response = await fetch(MENU_API + resId);
        let data = await response.json();
        setResDetails(data.data.cards[2]);
        setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);

        const itemCategory =  data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item) => item.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        setCategories(itemCategory);
    }

    return {resDetails, menu, categories};

}