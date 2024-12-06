import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  InvalidEvent,
  MouseEvent,
  useEffect,
  useState,
} from "react";
import CustomButton from "./atoms/CustomButton";

const SubscribeForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showEmptyEmailError, setShowEmptyEmailError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const updateUserEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setUserEmail(e.target.value);

  const handleEmailError = (e: InvalidEvent<HTMLInputElement>) => {
    e.preventDefault();
    setShowEmailError(true);
  };

  const handleSubscribeSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent,
  ) => {
    e.preventDefault();
    setErrorMsg(true);
  };

  const verifyEmail = (e: MouseEvent<HTMLButtonElement>) => {
    if (userEmail.length < 1) {
      e.preventDefault();
      setShowEmptyEmailError(true);
    }
    if (userEmail.indexOf("@") === -1 && userEmail.length > 0) {
      e.preventDefault();
      setShowEmailError(true);
    }
  };

  useEffect(() => {
    setShowEmailError(false);
    setShowEmptyEmailError(false);
  }, [userEmail]);
  useEffect(() => {
    if (successMsg) {
      setTimeout(() => {
        setSuccessMsg(false);
      }, 5000);
    }
  }, [successMsg]);
  useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setErrorMsg(false);
      }, 5000);
    }
  }, [errorMsg]);
  return (
    <form
      onSubmit={handleSubscribeSubmit}
      className="col-span-full containerMax:col-span-4 pl-4 containerMax:w-[400px] flex max-tablet:flex-col max-containerMax:flex-grow gap-4"
    >
      {successMsg ||
        (errorMsg && (
          <div
            className={`${successMsg ? "bg-green-50" : "bg-red-50"} fixed left-3 right-3 tablet:left-0 tablet:right-0 mx-auto top-9 w-auto tablet:w-fit flex items-center gap-3 pl-1 tablet:py-0.5  tablet:pr-2.5 rounded-[2000px]`}
          >
            <div className="flex items-center bg-white px-2.5 py-0.5 rounded-full">
              <span
                className={`${successMsg ? "text-green-700" : "text-red-800"} font-medium text-sm text-center`}
              >
                {successMsg ? "Success" : "Error"}
              </span>
            </div>
            <div className="flex items-center pr-1">
              <span
                className={`${successMsg ? "text-green-700" : "text-red-600"} font-medium text-sm`}
              >
                {successMsg
                  ? "Subscription successful! Please check your email to confirm."
                  : "Failed to subscribe. Please ensure your email is correct or try again later."}
              </span>
            </div>
          </div>
        ))}
      <div className="flex max-containerMax:w-full containerMax:w-[270px] flex-col gap-1.5">
        <input
          placeholder="Enter your email"
          className={`border w-full border-solid border-neutral-200 bg-neutral-50 ring-none outline-none rounded px-[14px] py-[10px] text-sm h-10 focus:ring  focus:ring-opacity-20 ${showEmailError || showEmptyEmailError ? "focus:ring-red-600 focus:border-red-600" : "focus:ring-indigo-500 focus:border-indigo-500"}`}
          type="email"
          value={userEmail}
          onChange={updateUserEmail}
          onInvalid={handleEmailError}
        ></input>

        {showEmptyEmailError && (
          <span className="text-sm text-red-600">
            Email address is required.
          </span>
        )}
        {showEmailError && (
          <span className="text-sm text-red-600">
            Please enter a valid email address.
          </span>
        )}
      </div>
      <CustomButton
        variant="Secondary"
        label="Email subscribe button"
        onClick={verifyEmail}
      >
        Subscribe
      </CustomButton>
    </form>
  );
};

export default SubscribeForm;
