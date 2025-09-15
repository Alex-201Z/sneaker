import { sneakersList } from '../datas/sneakersList.js'

function ShoppingList() {
    return (
        <div>
            <ul>
                {sneakersList.map((sneaker) => (
                    <li key={sneaker.id}>{sneaker.nom}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList
