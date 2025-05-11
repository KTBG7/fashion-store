import Image from "next/image";
import CustomButton from "./atoms/CustomButton";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col gap-8 col-span-full justify-center containerMax:col-span-5">
        <div className="col-span-full flex flex-col gap-4 h-fit">
          <h1 className="text-4xl tablet:text-5xl containerMax:text-6xl text-neutral-900 font-semibold">
            Summer styles are finally here
          </h1>
          <p className="text-lg tablet:text-xl font-normal text-neutral-600">
            This year, our new summer collection will be your haven from the
            world&apos;s harsh elements.
          </p>
        </div>
        <CustomButton
          variant="Primary"
          label="Shop now"
          role="link"
          localLink="/shop/products/all"
        >
          Shop now
        </CustomButton>
      </div>
      <Image
        className="flex aspect-[319/264] tablet:aspect-[704/526] w-full containerMax:aspect-[704/526] object-cover rounded-2xl flex-grow flex-shrink-0 col-span-full containerMax:col-span-7"
        src="/hero_image.png"
        width={704}
        height={526}
        quality={45}
        alt="Woman going up the escalator"
      />
    </>
  );
};

export default HeroSection;
