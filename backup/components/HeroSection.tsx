import Image from "next/image";
import CustomButton from "./atoms/CustomButton";

const HeroSection = () => {
  return (
    <section className="no-padding-container gap-y-12 tablet:gap-y-8 containerMax:px-8 items-center min-h-fit relative">
      <div className="flex flex-col gap-8 col-span-full containerMax:col-span-5">
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
        className="flex aspect-[319/264] tablet:aspect-[704/526] containerMax:h-[526px] object-cover rounded-2xl flex-grow flex-shrink-0 min-w-full col-span-full containerMax:col-span-7"
        src="/hero_image.png"
        width={696}
        height={464}
        quality={45}
        alt="Woman going up the escalator"
      />
    </section>
  );
};

export default HeroSection;
