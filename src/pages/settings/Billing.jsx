import BaseRadioButton from "../../components/base-components/BaseRadioButton";
import mail from "../../assets/mail.svg";
const Billing = () => {
  return (
    <div className="">
      <div className="pb-5 border-b mb-6">
        <h3 className="font-medium text-lg text-[#101828]">Payment Method</h3>
        <p className="text-sm text-[#667085]">
          Update your billing details and address.
        </p>
      </div>
      <div id="contactEmail">
        <div className="text-sm mb-5">
          <h4 className="text-sm font-medium text-[#344054]">Contact Email</h4>
          <p className="text-[#667085]">Where should invoices be sent?</p>
        </div>
        <div>
          <div className="flex mb-4">
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
          <div className="flex">
            <div className="mr-2">
              <BaseRadioButton />
            </div>
            <div>
              <h5 className="mb-3 text-sm font-medium text-[#344054]">
                Send to an alternative email
              </h5>
              <div className="rounded-md px-3.5 py-3 flex border">
                <img src={mail} alt="mail icon" />
                <p className="ml-2">billing@untitledui.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
