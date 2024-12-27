import ContactInfoWidget from "../ContactInfoWidget";
import SocialMediaSection from "../SocialMediaSection";
import AddressBlock from "../AddressBlock";
import TimeTrackerWidget from "../TimeTrackerWidget";
import "./style.css";

function DashboardLayout() {
  return (
    <div className="center-column-info-box">
      <div className="sorted-text-container">
        <ContactInfoWidget />
        <SocialMediaSection />
      </div>
      <div className="contact-details-section">
        <AddressBlock />
        <TimeTrackerWidget />
      </div>
    </div>
  );
}

export default DashboardLayout;
