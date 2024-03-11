
export function getStoreItems(){
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
}