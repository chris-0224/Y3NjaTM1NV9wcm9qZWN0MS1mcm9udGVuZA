import placeholder_img from "../media/placeholder-image.png";

export default function MediaPromotion({title, img, desc, width, height, attribute, id}){
    const image = img ? img : placeholder_img;

    return (
        <div className="media-promo-container" id={id}>
            <div className="image-container">
                <img src={image} alt="promotion" width={width} height={height}/>
                <cite>{attribute}</cite>
            </div>
            <div className="content-body-container">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
    )
}