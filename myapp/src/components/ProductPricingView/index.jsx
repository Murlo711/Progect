import DiscountBlock1 from "../DiscountBlock1";
import BlackGlovesPrice from "../BlackGlovesPrice";
import "./style.css";

function ProductPricingView() {
  return (
    <div className="discount-card">
      <DiscountBlock1 />
      <BlackGlovesPrice />
    </div>
  );
}

export default ProductPricingView;
