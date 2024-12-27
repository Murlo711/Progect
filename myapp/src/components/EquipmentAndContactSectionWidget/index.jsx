import EquipmentSelector from "../EquipmentSelector";
import ContactSection from "../ContactSection";
import "./style.css";

function EquipmentAndContactSectionWidget() {
  return (
    <div className="equipment-catalog-styles">
      <EquipmentSelector />
      <ContactSection />
    </div>
  );
}

export default EquipmentAndContactSectionWidget;
