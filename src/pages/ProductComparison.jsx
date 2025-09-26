import { useEffect, useState } from "react";
import ComparisonView from "../components/ComparisonView";
import { PRODUCTS } from "../static-products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import "../styles/ProductComparison.css";

function ProductComparison() {
  const FEATURE_KEYS = Object.keys(PRODUCTS[0].features);

  const [compareList, setCompareList] = useState(() => {
    const saved = localStorage.getItem("compareList");
    return saved ? JSON.parse(saved) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("compareList", JSON.stringify(compareList));
  }, [compareList]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  function toggleCompare(id) {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      } else {
        if (prev.length < 3) {
          return [...prev, id];
        }
        return prev; 
      }
    });
  }

  function removeFromCompare(id) {
    setCompareList((prev) => prev.filter((i) => i !== id));
  }

  function clearCompare() {
    setCompareList([]);
  }

  // Filter products based on search term
  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Selected products
  const selectedProducts = PRODUCTS.filter((p) => compareList.includes(p.id));

  return (
    <>
      <Header darkMode={darkMode} />
      <div className={darkMode ? "app dark" : "app"}>
        <div className="top-bar">
          {/* search input */}
          <input
            type="search"
            placeholder="Search by name or brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search products by name or brand"
          />
          <button
            className="mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-pressed={darkMode}
            aria-label="Toggle light or dark mode"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div className="product-grid" role="list" aria-label="Product list">
          {/* product list */}
          {filteredProducts.map((product) => (
            // product card component
            <ProductCard
              key={product.id}
              product={product}
              selected={compareList.includes(product.id)}
              onToggle={toggleCompare}
              featureKeys={FEATURE_KEYS}
            />
          ))}
          {filteredProducts.length === 0 && <p>No products found.</p>}
        </div>

        {/* comparison view component */}
        <ComparisonView
          products={selectedProducts}
          onRemove={removeFromCompare}
          onClear={clearCompare}
          featureKeys={FEATURE_KEYS}
        />
      </div>
    </>
  );
}
export default ProductComparison;
