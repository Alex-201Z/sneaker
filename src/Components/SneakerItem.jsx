import { useState } from 'react';
import formatReview from './CustomerReview'; 
import '../styles/SneakerItem.css';
import CustomerReview from './CustomerReview';
// Import du composant CustomerReview
// Debug this code | Explain this function to me | Optimize this function's Speed | Generate Doc String | Generate Unit test

function SneakerItem({ sneakerData, onAddToCart }) {
  const[showRewiews, setShowReviews] = useState(false);
  const{ nom, marque, prix, style, esthetique, confort, image, bestSeller=false } = sneakerData;

const handleClickAvis = () => {
  setShowReviews(!showRewiews);
};
const handleAddToCart = () => {
  console.log('Données transmises:', sneakerData);
  onAddToCart(sneakerData);
};


    return (
<div className={`sneaker-item ${bestSeller ? 'best-seller' : ''}`}>      
      {bestSeller && <span className="best-seller-badge">Top vente</span>}
      <img src={image} alt={nom} className="sneaker-image" />
      <h3>{nom}</h3>
      <p>{marque}</p>
      <p>{prix} €</p>
      <p>{style}</p>
      <div className="sneaker-review">
        <button onClick={handleClickAvis}>
          {showRewiews ? 'masquer les avis' : 'Voir les avis'}
        </button>
        {showRewiews && (
          <div className="avis-details">
            <CustomerReview reviewType='esthétisme' scaleValue={esthetique} />
            <CustomerReview reviewType='confort' scaleValue={confort} />
          </div>
        )}
      </div>
      <div className="sneaker-actions">
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Ajouter au panier
        </button>
      </div>
</div>
  );
}

export default SneakerItem;