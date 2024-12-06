import { ReactNode } from "react";
import { RiCloseLine } from "react-icons/ri";

type CustomDrawerProps = {
  visible: boolean;
  children: ReactNode | undefined;
  onClose: () => void;
  drawerTitleChild: ReactNode;
};

const CustomDrawer = ({
  visible,
  children,
  onClose,
  drawerTitleChild,
}: CustomDrawerProps) => {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 z-10 w-full h-full transition-transform duration-300 ease-in-out transform -translate-x-full overflow-y-scroll ${visible && "translate-x-0"}`}
    >
      <div className="min-h-screen flex flex-grow flex-col gap-6 bg-white p-6 border-r-[16px] border-r-black border-opacity-50 pt-8">
        <div className="flex justify-between items-center">
          {drawerTitleChild}
          <button
            className="flex justify-center m-0 items-center rounded outline-none border-2 border-transparent border-opacity-0 focus:border-2 focus:border-indigo-500 focus:border-opacity-20 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-20"
            tabIndex={visible ? 0 : -1}
            type="button"
            aria-label="Close menu button"
            id="close-menu-button"
            onClick={onClose}
          >
            <RiCloseLine className="flex items-center justify-end w-5 h-5 text-neutral-600" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomDrawer;
