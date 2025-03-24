
/***
 * export const MenuItem = ({ item }) => {
  // console.log("Info is ", item);
  return (
    <div className="flex justify-between">
      <div className="flex flex-col p-4 border-b-gray-300 h-[200px] w-[100%]">
        <div>Veg/Non veg</div>
        <div className="font-medium text-left">{item.name}</div>
        <div className="font-medium px-3 text-left">
          Rs {item.defaultPrice / 100}
        </div>
        <div className="rating">{item.ratings.aggregatedRating}</div>
        <div className="mt-3 break-words overflow-hidden h-[100%] font-light text-ellipsis ">
          {item.description}
        </div>
      </div>

      <div className="image-container">
        <img
          alt="Item Image"
          className="item-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
            item.imageId
          }
        />
      </div>
    </div>
  );
};

**/