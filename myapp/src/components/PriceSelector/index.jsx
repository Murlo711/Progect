import { forwardRef } from "react";
import { Input, Select, Option } from "@mui/base";
import ProductDisplayLayout from "../ProductDisplayLayout";
import "./style.css";

function PriceSelector() {
  return (
    <div className="garden-equipment-listing">
      <div className="product-card-container">
        <div className="price-container">
          <p className="price-heading">Price</p>
          <div className="price-container1">
            {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Input slotProps={{ root: { className: "input-container" }, input: { className: "montserrat-input montserrat-input::placeholder", placeholder: "from", type: "text" } }} />
          </div>
          <div className="price-container1">
            {/* Input Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
            <Input slotProps={{ root: { className: "input-container" }, input: { className: "montserrat-input montserrat-input::placeholder", placeholder: "to", type: "text" } }} />
          </div>
        </div>
        <p className="discounted-items-title">Discounted items</p>
        <div className="sorted-text-container">
          <div className="sorted-icon-container" />
          <p className="sorted-heading-text-style">Sorted</p>
        </div>
        <div className="price-filter-dropdown">
          {/* Select Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Select
            slotProps={{
              listbox: {
                style: {
                  listStyle: "none",
                  minHeight: "300px",
                  minWidth: "250px",
                  boxSizing: "border-box",
                  border: "1px solid",
                  borderRadius: "12px",
                },
              },
            }}
            slots={{
              root: forwardRef((props, ref) => {
                const { ownerState, className, ...rest } = props;
                return (
                  <div {...rest} ref={ref} className={`selectable-options-dropdown fullwidth-select ${className}`}>
                    {props.children}
                  </div>
                );
              }),
            }}
            renderValue={() => (
              <>
                <p className="dropdown-styler">by default</p>
                <div className="option-container">
                  <svg fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" x="0" y="0">
                    <g id="ic" xmlns="http://www.w3.org/2000/svg" data-node-id="I35:2138;35:2131">
                      <path id="Vector_4" d="M16,7l-6,6l-6,-6" stroke="#282828" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.34998" data-node-id="I35:2138;35:2133" />
                    </g>
                  </svg>
                </div>
              </>
            )}
          >
            <Option>Add your options here!</Option>
          </Select>
        </div>
      </div>
      <ProductDisplayLayout />
    </div>
  );
}

export default PriceSelector;
