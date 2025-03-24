export const ItemList = ({ card }) => {
  return (
    <div>
      {card.itemCards.map((item) => (
        <div className="flex justify-between">
          <div className="flex flex-col p-4 border-b-gray-300 h-[200px] w-[100%]">
            <div className="font-medium text-left">{item.card.info.name}</div>
            <div className="font-medium px-3 text-left">
              Rs {" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
              
            </div>
            {/* <div className="rating">{item.ratings.aggregatedRating}</div> */}
            <div className="mt-3 break-words overflow-hidden h-[100%] font-light text-ellipsis ">
              {item.card.info.description}
            </div>
          </div>

          <div className="image-container">
            <img
              alt="Item Image"
              className="item-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
