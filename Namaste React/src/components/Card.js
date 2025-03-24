import { CARD_URL } from "../utils/constants";

export const Card = (props) => {
    const { resData } = props;


    return (
        <div className="flex-col w-[212px] h-[320px] bg-gray-200 rounded-sm m-2 px-2 py-3 hover:border-solid cursor-pointer">
            <img alt="res-logo"
                className="w-[212px] h-[128px] rounded-md"
                src={`${CARD_URL}${resData && resData.info.cloudinaryImageId}`} />
            <h3 className="font-bold pt-2">{resData && resData.info.name}</h3>
            <div className='subheading'>
                <span className="ratings">{resData && resData.info.avgRating} </span>
                <span className="time">{resData && resData.info.sla.deliveryTime} mins</span>
            </div>
            <div className="overflow-hidden pb-3">
                <span>{resData && resData.info.cuisines.join(",")}</span>

            </div>
        
            <div className="location">
                {resData && resData.info.areaName}
            </div>
        </div>
    )
}

export const withPromotedLabel = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="bg-black text-white m-3 p-3">Promoted</label>
                <Card {...props}/>
            </div>
        )
    }
}
