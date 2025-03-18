import { CARD_URL } from "../utils/constants";

export const Card = (props) => {
    const { resData } = props;

    return (
        <div className='res-card'>
            <img alt="res-logo"
                className="res-img"
                src={`${CARD_URL}${resData && resData.info.cloudinaryImageId}`} />
            <h3>{resData && resData.info.name}</h3>
            <div className='subheading'>
                <span className="ratings">{resData && resData.info.avgRating} </span>
                <span className="time">{resData && resData.info.sla.deliveryTime} mins</span>
            </div>
            <div className="description">
                <span>{resData && resData.info.cuisines.join(",")}</span>

            </div>
        
            <div className="location">
                {resData && resData.info.areaName}
            </div>
        </div>
    )
}

