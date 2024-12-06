import CustomButton from "./atoms/CustomButton";

const HeroSection = () => {
  return (
    <section className="no-padding-container gap-y-12 tablet:gap-y-8 containerMax:px-8 items-center h-fit">
      <div className="flex flex-col gap-8 col-span-full containerMax:col-span-5">
        <div className="col-span-full flex flex-col gap-4 h-fit">
          <h1 className="text-4xl tablet:text-5xl containerMax:text-6xl text-neutral-900 font-semibold">
            Summer styles are finally here
          </h1>
          <p className="text-lg tablet:text-xl font-normal text-neutral-600">
            This year, our new summer collection will be your haven from the
            world's harsh elements.
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
      <img
        className="h-fit w-full col-span-full containerMax:col-span-7"
        src="/hero_svg.svg"
        alt="Woman going up the escalator"
      />
    </section>
  );
};

export default HeroSection;
