import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { MenuItem } from "./MenuItem";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants.js";
import { useRestaurantMenu } from "../utils/useRestaurantMenu.js";
import { CategoryAccordian } from "./CategoryAccordian.js";
import { UserContext } from "../context/UserContext.js";

export const RestaurantMenu = () => {
  // let [resDetails, setResDetails] = useState();
  // let [menu, setMenu] = useState();
  const { resId } = useParams();
  console.log("res id is ", resId);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const { loggedInUser } = useContext(UserContext);

  // useEffect(() => {
  //     console.log("Use Effect");
  //     fetchData2();

  //     return () => {
  //         console.log("Effect Return!!! will act like componentUnmount");
  //     }
  // }, [])

  const { resDetails, menu, categories } = useRestaurantMenu(resId);
  console.log("categories details are ::: ", categories);

  /** const fetchData2 = async () => {
       let data = await useRestaurantMenu();
        console.log(data);
        setResDetails(data.cards[2]);
        setMenu(data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);

    }
    const fetchData = async () => {
        let response = await fetch(MENU_API + resId);
        let data = await response.json();
        setResDetails(data.data.cards[2]);
        console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
        // setMenu(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
    }

    **/

  if (!resDetails) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resDetails?.card?.card?.info;

  return (
    <div className="justify-center flex-col text-center">
      <h4>Logged in user details: {loggedInUser}</h4>
      <h2 className="font-bold">Menu of {name}</h2>
      <div className="font-medium">{cuisines.join(", ")}</div>
      <div className="font-normal">{costForTwoMessage}</div>
      <div className="font-normal">{avgRating}</div>

      <span className="font-bold">Menu </span>
      {categories.map((category, index) => (
        // Controlled Component
        <CategoryAccordian
          title={category.card.card.title}
          key={category.card.card.categoryId}
          card={category.card.card}
          // If the element's index === selectedIndex, then it needs to be shown and others will be false
          showIndex={index === selectedIndex ? true : false}
          // We are setting the currentSelectedIndex to selectedIndex variable
          setShowIndex={() => setSelectedIndex(index)}
        ></CategoryAccordian>
      ))}
    </div>
  );
};
