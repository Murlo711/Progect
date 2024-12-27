import GardenPriceWidget from "../GardenPriceWidget";
import "./style.css";

function GardenViewWidget() {
  return (
    <div className="product-card1">
      <img src="/assets/image_80610d3b.png" className="product-card-img" />
      <GardenPriceWidget />
    </div>
  );
}

export default GardenViewWidget;
