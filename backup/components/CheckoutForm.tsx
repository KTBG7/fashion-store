import React, {
  ChangeEvent,
  Dispatch,
  InvalidEvent,
  SetStateAction,
  useState,
} from "react";
import CustomInput from "./CustomInput";
import SelectionCard from "./SelectionCard";
import MasterCard from "./MasterCard";
import { ShippingOptions } from "../constants";

type CheckoutOrderForm = {
  email: string;
  firstName: string;
  lastName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  zip: string;
  creditCardNumber: string;
  creditCardOwnerName: string;
  creditCardExpiry: string;
  creditCardCVV: string;
  shipping: ShippingOptions;
};

const CheckoutForm = () => {
  const [checkoutOrderFormState, setCheckoutOrderFormState] =
    useState<CheckoutOrderForm>({
      email: "",
      firstName: "",
      lastName: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zip: "",
      creditCardNumber: "",
      creditCardOwnerName: "",
      creditCardExpiry: "",
      creditCardCVV: "",
      shipping: ShippingOptions.Standard,
    });
  const [showEmailError, setShowEmailError] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [street, setStreet] = useState("");
  const [streetUnit, setStreetUnit] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [creditCard, setCreditCard] = useState("");
  const [creditCardName, setCreditCardName] = useState("");
  const [creditCardExpiry, setCreditCardExpiry] = useState("");
  const [creditCardCVV, setCreditCardCVV] = useState("");

  const [selectedCard, setSelectedCard] = useState("Standard");

  const handleEmailError = (e: InvalidEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowEmailError(true);
  };

  const checkIfPastMaxLength = (
    maxLength: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value.toString().length === maxLength) {
      return true;
    }
    return false;
  };

  const handleMaxLengthInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    updateState: Dispatch<SetStateAction<any>>,
    maxLength: number,
  ) => {
    !checkIfPastMaxLength(maxLength + 1, e)
      ? updateState(e.target.value)
      : null;
  };

  return (
    <section className="col-span-full containerMax:col-span-6">
      <form className="flex flex-col gap-10">
        <div>
          <h3 className="text-neutral-600 pb-6 font-medium text-lg">
            Contact Information
          </h3>
          <CustomInput
            placeholder="user@example.com"
            label="Email"
            type="email"
            value={userEmail}
            updateState={setUserEmail}
            onInvalid={handleEmailError}
          />
        </div>
        <div className="pt-10 border-t border-t-neutral-200 flex flex-col gap-6">
          <h3 className="text-neutral-600 pb-6 font-medium text-lg">
            Shipping Information
          </h3>
          <CustomInput
            type="text"
            placeholder="John"
            label="First name"
            value={firstName}
            updateState={setFirstName}
          />
          <CustomInput
            type="text"
            placeholder="Appleseed"
            label="Last name"
            value={lastName}
            updateState={setLastName}
          />
          <div className="flex flex-col gap-4">
            <CustomInput
              type="text"
              placeholder="Street address"
              label="Address"
              value={street}
              updateState={setStreet}
            />
            <CustomInput
              type="text"
              placeholder="Apartment, suite, etc (optional)"
              value={streetUnit}
              updateState={setStreetUnit}
            />
          </div>
          <CustomInput
            type="text"
            placeholder="City"
            label="City"
            value={city}
            updateState={setCity}
          />

          <CustomInput
            type="text"
            placeholder="State"
            label="State"
            value={state}
            updateState={setState}
          />

          <CustomInput
            type="text"
            label="Zipcode"
            placeholder="12345"
            value={zip}
            updateState={setZip}
          />
        </div>
        <div className="pt-10 border-t border-t-neutral-200">
          <h3 className="text-neutral-600 pb-6 font-medium text-lg">
            Delivery Method
          </h3>
          <div className="flex max-tablet:flex-col gap-4">
            <SelectionCard
              onClick={() => {
                setSelectedCard("Standard");
              }}
              selected={selectedCard === "Standard"}
              title="Standard"
              description="4-10 business days"
              price="FREE"
            />

            <SelectionCard
              onClick={() => {
                setSelectedCard("Express");
              }}
              selected={selectedCard === "Express"}
              title="Express"
              description="2-5 business days"
              price="$15.00"
            />
          </div>
        </div>

        <div className="pt-10 border-t flex flex-col gap-6 border-t-neutral-200">
          <h3 className="text-neutral-600  font-medium text-lg">
            Payment Method
          </h3>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Card number</label>
            <div className="relative">
              <input
                placeholder="1234 1234 1234 1234"
                className="border pl-14 w-full border-solid border-neutral-200 bg-neutral-50 ring-none outline-none rounded pr-[14px] py-[10px] text-sm h-10 focus:ring  focus:ring-opacity-20 focus:ring-indigo-500 focus:border-indigo-500 invalid:focus:ring-red-600 invalid:focus:border-red-600"
                type="number"
                value={creditCard}
                onChange={(e) =>
                  handleMaxLengthInputChange(e, setCreditCard, 16)
                }
              />
              <MasterCard className="absolute  left-4 top-2 w-[34px] h-6" />
            </div>
          </div>

          <CustomInput
            type="text"
            placeholder="Full name on card"
            label="Name on card"
            value={creditCardName}
            updateState={setCreditCardName}
          />
          <div className="flex w-full gap-8">
            <CustomInput
              type="text"
              placeholder="MM/YY"
              label="Expiry"
              value={creditCardExpiry}
              updateState={setCreditCardExpiry}
              onChange={handleMaxLengthInputChange}
              maxLength={5}
            />

            <CustomInput
              type="number"
              placeholder="123"
              label="CVV"
              value={creditCardCVV}
              updateState={setCreditCardCVV}
              onChange={handleMaxLengthInputChange}
              maxLength={3}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutForm;
