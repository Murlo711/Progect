import ProductDisplayAssistant from "../ProductDisplayAssistant";
import DiscountBerryWidget from "../DiscountBerryWidget";
import ProductPricingView from "../ProductPricingView";
import ImageToolDisplay from "../ImageToolDisplay";
import GearDisplay from "../GearDisplay";
import GardenViewWidget from "../GardenViewWidget";
import ImageProductSection from "../ImageProductSection";
import ProductComparisonSection from "../ProductComparisonSection";
import "./style.css";

function ProductDisplayLayout() {
  return (
    <div className="garden-product-listing">
      <div className="product-card-container1">
        <ProductDisplayAssistant />
        <DiscountBerryWidget />
        <ProductPricingView />
        <ImageToolDisplay />
      </div>
      <div className="garden-product-grid">
        <GearDisplay />
        <GardenViewWidget />
        <ImageProductSection />
        <ProductComparisonSection />
      </div>
    </div>
  );
}

export default ProductDisplayLayout;
