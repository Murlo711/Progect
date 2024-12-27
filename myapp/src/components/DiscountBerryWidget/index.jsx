import DiscountCard1 from "../DiscountCard1";
import BerryCollectionWidget from "../BerryCollectionWidget";
import "./style.css";

function DiscountBerryWidget() {
  return (
    <div className="product-card-with-discount">
      <DiscountCard1 />
      <BerryCollectionWidget />
    </div>
  );
}

export default DiscountBerryWidget;
