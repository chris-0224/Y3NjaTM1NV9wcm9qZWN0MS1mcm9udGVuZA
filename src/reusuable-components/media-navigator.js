import {useState} from "react";
import MediaPromotion from "./media-promotion";

import arrowLeft from "../icons/icon-arrow-left.svg";
import arrowRight from "../icons/icon-arrow-right.svg";

export default function MediaNavigator({mediaList}){
    const [mediaActiveIndex, setMediaActiveIndex] = useState(0);
    const currMedia = mediaList[mediaActiveIndex];

    function onClickHandler(val){
        if (mediaActiveIndex + val < mediaList.length && mediaActiveIndex + val > -1){
            setMediaActiveIndex(mediaActiveIndex + val);
        }
    }

    return (
        <div className="media-navigator-container">
            <MediaPromotion id={currMedia.id} title={currMedia.title} img={currMedia.img} desc={currMedia.desc}
                            width={currMedia.width} height={currMedia.height}/>

            <div className="progress-container">
                <div className="progress" id="progress"
                     style={{width: (mediaActiveIndex / (mediaList.length - 1) * 100) + '%'}}
                ></div>
                {mediaList.map((val, index)=>{
                    return (
                        <div key={crypto.randomUUID()} className={`circle ${index <= mediaActiveIndex ? "active" : ""}`}></div>
                    )
                })}
            </div>

            <div className="buttons-container">
                <button disabled={mediaActiveIndex === 0} onClick={()=>onClickHandler(-1)}>
                    <img src={arrowLeft} alt="previous"/>
                </button>
                <button disabled={mediaActiveIndex === mediaList.length-1} onClick={()=>onClickHandler(1)}>
                    <img src={arrowRight} alt="next"/>
                </button>
            </div>
        </div>
    )
}