import { Button } from "@mui/base";
import "./style.css";

function DiscountCard1() {
  return (
    <div className="discount-section-with-button">
      <p className="discount-badge">-26%</p>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="discount-button">Add to cart</Button>
    </div>
  );
}

export default DiscountCard1;
