import placeholder_img from "../media/placeholder-image.png";

function Item({name, price, img, notes}){
    const item_image = img ? img : placeholder_img;

    return (
        <button className="item-container">
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
    const itemsAry = (()=> {
        const items = [];

        for (let i= 0; i < 8; i++){
            items.push(
                {
                    name: `Item ${i+1}`,
                    imageUrl: null,
                    price: Math.floor(Math.random() * 100) + 0.99,
                    notes: "Limited Edition!"
                }
            )
        }
        return (items)
    })();

    return (
        <div className="items-grid-container">
            {itemsAry.map((item) => {
                return <Item key={crypto.randomUUID()} name={item.name} price={item.price}
                             img={item.imageUrl} notes={item.notes}/>;
            })
            }
        </div>
    )
}