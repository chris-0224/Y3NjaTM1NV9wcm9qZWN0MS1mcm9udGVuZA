
export function getStoreItems(){
    const items = [];

    for (let i= 0; i<10; i++){
        items.push(
            {
                name: `Item ${i}`,
                imageUrl: null,
                price: Math.floor(Math.random() * 100) + 0.99,
                notes: "Limited Edition!"
            }
        )
    }

    return (items)
}