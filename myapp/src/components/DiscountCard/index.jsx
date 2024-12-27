import { Button } from "@mui/base";
import "./style.css";

function DiscountCard() {
  return (
    <div className="percentage-discount-button-container">
      <p className="discount-badge">-17%</p>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="cart-button-with-discount">Add to cart</Button>
    </div>
  );
}

export default DiscountCard;
