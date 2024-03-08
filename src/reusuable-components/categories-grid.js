import placeholder_img from "../media/placeholder-image.png";

function CategoryItem({title, img}){
    const image = img ? img : placeholder_img;

    function clickEvent(e){
        console.log("clicked!");
    }

    return (
        <div className="category-item-container">
            <button className="category-item-button" onClick={clickEvent}>
                <img src={image} alt="promotion" width="200px" height="200px"/>
            </button>
            <h2 className="category-item-title">{title}</h2>
        </div>
    )
}

export default function CategoriesGrid({categoryNamesList}){
    return (
        <div className="categories-grid-container">
            {categoryNamesList ?
                categoryNamesList.map((catName)=>{
                return <CategoryItem key={crypto.randomUUID()} title={catName}/>;
            })
                : <></>
            }
        </div>
    )
}