import PageHeader from "../page-header";
import Banner from "../banner";
import Footer from "../page-footer";
import '../store-styles.css'
import {getStoreItems} from "../data-interface";
import {useEffect, useState} from "react";

import placeholder_img from '../placeholder-image.png';
import doomguy from '../media/doomguy.jpg'

import MediaPromotion from "../media-promotion";
import {dummyText} from "../data.ts";

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

function ItemFilters(){
    return (
        <div className="filters-container">

        </div>
    )
}
function Body() {
    const [items, setItems] = useState(null);

    console.log(items);
    useEffect(() => {
        setItems(getStoreItems());
    }, []);

    return (
        <div className="body-container">
            <h2 className="store-header">THE STORE</h2>
            <MediaPromotion title="Lorem Ipsum" img={doomguy} width="700px" desc={dummyText}/>

            <h2 className="section-header">HOT MERCHANDISE</h2>
            <div className="outer-items-grid-container">
                <ItemFilters/>
                <div className="items-grid-container">
                    {items ?
                        items.map((item) => {
                            return <Item key={crypto.randomUUID()} name={item.name} price={item.price} img={item.imageUrl} notes={item.notes}/>;
                        })
                        : <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default function Store() {
    return (
        <div className="storepage-container">
            <div className="grid-container">
                <div className="leftmost-container">
                    f
                </div>
                <div className="middle-container">
                    <PageHeader/>
                    <Body/>
                </div>
                <div className="rightmost-container">
                    f
                </div>
            </div>
            <Footer/>

        </div>
    );
}
/*
DOOMGUY: <a href="https://wallpapers.com/wallpapers/doomguy-live-gaming-ec02pq3hos4kkijw.html">Wallpaper by johns</a> on Wallpapers.com
 */