import DiscountBlock from "../DiscountBlock";
import PriceComparisonWidget from "../PriceComparisonWidget";
import "./style.css";

function ProductComparisonSection() {
  return (
    <div className="discount-card">
      <DiscountBlock />
      <PriceComparisonWidget />
    </div>
  );
}

export default ProductComparisonSection;
