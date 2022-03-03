import React, { useState } from "react";

function DigitalClock() {

    let currentTime = new Date().toLocaleTimeString();
    const [latestTime, setLatestTime] = useState(currentTime)


    function updateTime() {
        //get the actual time
        //update the latest time

        let now = new Date().toLocaleTimeString();
        setLatestTime(now);

    }
    setInterval(updateTime,1000)
    return <>
        <h1 className="current-time">{latestTime}</h1>
        <button onClick={updateTime} className="get-time-button">Get Time</button>
    </>
}
export default DigitalClock;