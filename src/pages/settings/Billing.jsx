import BaseRadioButton from "../../components/base-components/BaseRadioButton";
import mail from "../../assets/mail.svg";
import BaseCardDetails from "../../components/base-components/BaseCardDetails";
import masterCard from "../../assets/mastercard.svg";
import visaCard from "../../assets/visa-card.svg";
import plus from "../../assets/plus.svg";
const Billing = () => {
  const cardDetails = [
    { icon: masterCard, expiry: "06/2023", type: "Mastercard" },
    { icon: visaCard, expiry: "06/2023", type: "Visa" },
  ];

  return (
    <div className="">
      <div className="pb-5 border-b mb-6">
        <h3 className="font-medium text-lg text-[#101828]">Payment Method</h3>
        <p className="text-sm text-[#667085]">
          Update your billing details and address.
        </p>
      </div>
      <div
        className="mb-5 pb-5 flex flex-col md:flex-row border-b"
        id="contactEmail"
      >
        <div className="text-sm mb-5 w-full md:w-1/4">
          <h4 className="text-sm font-medium text-[#344054]">Contact Email</h4>
          <p className="text-[#667085]">Where should invoices be sent?</p>
        </div>
        <div className="w-full md:w-3/4">
          <div className="flex mb-4 w-full">
            <div className="mr-2">
              <BaseRadioButton />
            </div>
            <div className="text-sm">
              <h5 className="font-medium text-[#344054]">
                Send to my account email
              </h5>
              <p className="text-[#667085]">olivia@untitledui.com</p>
            </div>
          </div>
          <div className="flex w-full">
            <div className="mr-2">
              <BaseRadioButton />
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2">
              <h5 className="mb-3 text-sm font-medium text-[#344054]">
                Send to an alternative email
              </h5>
              <button className="w-full items-center rounded-md px-3.5 py-3 flex border bg-white">
                <img src={mail} alt="mail icon" />
                <p className="ml-2">billing@untitledui.com</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="text-sm mb-5 w-full md:w-1/4">
          <h4 className="text-sm font-medium text-[#344054]">Card Details</h4>
          <p className="text-[#667085]">Select default payment method.</p>
        </div>
        <div className="w-full md:w-3/4">
          {cardDetails.map((card, index) => {
            return (
              <div key={index} className="mb-3">
                <BaseCardDetails
                  icon={card.icon}
                  type={card.type}
                  expiry={card.expiry}
                ></BaseCardDetails>
              </div>
            );
          })}
          <div className="flex">
            <div>
              <img src={plus} alt="" />
            </div>
            <p className="ml-2 text-[#667085] hover:text-[#4a556b] hover:cursor-pointer font-medium text-sm">
              Add new payment method
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
