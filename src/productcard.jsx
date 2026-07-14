function ProductCard({ name, price, description, image }) {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <h2>{name}</h2>
            <p className="product-price">${price.toFixed(2)}</p>
            <p className="product-description">{description}</p>
            <button type="button" className="product-button">Add to Cart</button>
        </div>
    );
}

export default ProductCard;