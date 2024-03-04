import {useEffect, useState} from "react";
import {getStoreItems} from "./data-interface";
import placeholder_img from "./placeholder-image.png";

function Item({name, price, img, notes}){
    const item_image = img ? img : placeholder_img;

    function itemClicked(e){
        console.log(e);
    }

    return (
        <button className="item-container" onClick={itemClicked}>
            <img src={item_image} alt="item" width="100%"/>
            <div className="item-desc-container">
                <div className="flex-container">
                    <p className="price-content">${price}</p>
                    <p className="notes-content">{notes}</p>
                </div>
                <p>{name}</p>
            </div>
        </button>
    )
}

export default function ItemsGrid(){
    const [items, setItems] = useState(null);

    useEffect(() => {
        setItems(getStoreItems());
    }, []);

    return (
        <div className="items-grid-container">
            {items ?
                items.map((item) => {
                    return <Item key={crypto.randomUUID()} name={item.name} price={item.price}
                                 img={item.imageUrl} notes={item.notes}/>;
                })
                : <></>
            }
        </div>
    )
}