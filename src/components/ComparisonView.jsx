function ComparisonView({ products, onRemove, onClear, featureKeys }) {
  if (products.length < 2) return null;

  // Highlight differences for each feature
  function isDifferent(key) {
    const values = products.map((p) => {
      if (key === "Price") return p.price;
      return p.features[key];
    });
    return new Set(values).size > 1;
  }

  return (
    <div
      className="comparison-container"
      role="region"
      aria-label="Product Comparison View"
    >
      <h2>Comparing {products.length} products</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {products.map((p) => (
              <th key={p.id}>
                {p.name}
                <button
                  className="remove-btn"
                  aria-label={`Remove ${p.name} from comparison`}
                  onClick={() => onRemove(p.id)}
                >
                  ×
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className={isDifferent("Price") ? "highlight" : ""}>
            <td>Price</td>
            {products.map((p) => (
              <td key={p.id}>${p.price}</td>
            ))}
          </tr>
          {featureKeys.map((key) => (
            <tr key={key} className={isDifferent(key) ? "highlight" : ""}>
              <td>{key}</td>
              {products.map((p) => (
                <td key={p.id}>{p.features[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button className="clear-btn" onClick={onClear}>
        Clear Comparison
      </button>
    </div>
  );
}
export default ComparisonView;
