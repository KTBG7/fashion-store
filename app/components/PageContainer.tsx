import { ReactNode } from "react";
import Navbar from "./Navbar";

type PageContainerProps = {
  gridContainer?: boolean;
  className?: string;
  customGap?: string;
  children?: ReactNode | undefined;
};

const PageContainer = ({
  children,
  className,
  gridContainer = true,
  customGap = "gap-8",
}: PageContainerProps) => {
  return (
    <>
      <Navbar />
      <div className="w-full px-4 bg-transparent">
        <main className="flex min-h-screen flex-col items-center gap-12 tablet:gap-16 w-full bg-white rounded-lg max-containerMax:px-4 py-12 tablet:py-16 containerMax:py-24 px-3 tablet:px-4">
          {gridContainer ? (
            <div
              className={
                className ??
                "no-padding-container w-full containerMax:px-8 " + customGap
              }
            >
              {children}
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </>
  );
};

export default PageContainer;
