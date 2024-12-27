import DiscountCard from "../DiscountCard";
import GardenToolListing from "../GardenToolListing";
import "./style.css";

function ProductDisplayAssistant() {
  return (
    <div className="product-card1">
      <DiscountCard />
      <GardenToolListing />
    </div>
  );
}

export default ProductDisplayAssistant;
