import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {

        window.addEventListener("offline", () => {
            console.log("oooppsss I am offline!!");
            setOnlineStatus(false);
        })
    }, []);


    return onlineStatus;
}