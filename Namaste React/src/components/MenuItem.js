export const MenuItem = ({ item }) => {
    console.log("Info is ", item);
    return (
        <div className="menu-item-container">
            <div className="left-container">
                <div>Veg/Non veg</div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">Rs {item.defaultPrice / 100}</div>
                {/* <div className="rating">{item.ratings.aggregatedRating}</div> */}
                <div className="item-desc">{item.description}</div>
            </div>

            <div className="image-container"><img alt="Item Image"
            className="item-img"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + item.imageId} />
            </div>
        </div>
    )
}