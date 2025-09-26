function ProductCard({ product, selected, onToggle, featureKeys }) {
  return (
    <div
      className={`product-card${selected ? " selected" : ""}`}
      onClick={() => onToggle(product.id)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onToggle(product.id);
      }}
      role="button"
      aria-pressed={selected}
      aria-label={`${selected ? "Remove" : "Add"} ${
        product.name
      } to comparison`}
    >
      <img src={product.image} alt={`${product.brand} ${product.name}`} />
      <h3>{product.name}</h3>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <ul className="features">
        {featureKeys.map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {product.features[key]}
          </li>
        ))}
      </ul>
      <button
        className="compare-btn"
        onClick={(e) => {
          e.stopPropagation();
          onToggle(product.id);
        }}
        aria-label={`${selected ? "Remove" : "Add"} from compare`}
      >
        {selected ? "Remove from Compare" : "Add to Compare"}
      </button>
    </div>
  );
}
export default ProductCard;
