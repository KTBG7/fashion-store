import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
import logo from "@/public/stylenest.svg";
import CustomButton from "./atoms/CustomButton";
import youtubeLogo from "@/public/youtube-line.svg";
import instagramLogo from "@/public/instagram-line.svg";
import facebookLogo from "@/public/facebook-box-line.svg";
import githubLogo from "@/public/github-line.svg";
import twitterXLogo from "@/public/twitter-x-line.svg";

const Footer = () => {
  return (
    <footer className="no-padding-container w-full containerMax:px-8 gap-y-12">
      <div className="no-padding-container gap-y-8 col-span-full">
        <div className="col-span-4 tablet:col-span-6 containerMax:col-span-8 flex flex-col flex-grow gap-2">
          <h2 className="text-xl font-semibold">Join our newsletter</h2>
          <span className="text-neutral-600">
            We'll send you a nice letter once per week. No spam.
          </span>
        </div>
        <SubscribeForm />
      </div>

      <section className="col-span-full">
        <div className="no-padding-container gap-y-12">
          <div className="no-padding-container col-span-full containerMax:col-span-6 gap-y-6 justify-between">
            <div className="no-padding-container col-span-8 h-fit gap-y-8">
              <Image
                src={logo}
                width={105}
                height={32}
                alt="Stylenest logo"
                className="col-span-full"
              />
              <span className="col-span-full tablet:col-span-3 containerMax:col-span-11 text-base text-neutral-600">
                Craft stunning style journeys that weave more joy into every
                thread.
              </span>
            </div>
          </div>
          <div className="no-padding-container col-span-full gap-y-8 containerMax:col-span-6">
            <div className="col-span-4 w-full tablet:col-span-3 containerMax:col-span-6 flex flex-col gap-3">
              <h5 className="text-sm text-neutral-500 pb-1">SHOP CATEGORIES</h5>
              <CustomButton
                variant="Footer"
                localLink="/shop/unisex"
                role="link"
                label="Unisex"
              >
                Unisex
              </CustomButton>
              <CustomButton
                localLink="/shop/women"
                variant="Footer"
                role="link"
                label="Women"
              >
                Women
              </CustomButton>
              <CustomButton
                variant="Footer"
                localLink="/shop/men"
                role="link"
                label="Men"
              >
                Men
              </CustomButton>
            </div>
            <div className="col-span-4 tablet:col-span-3 containerMax:col-span-6 w-full flex flex-col gap-3">
              <h5 className="text-sm text-neutral-500 pb-1">
                SHOP COLLECTIONS
              </h5>
              <CustomButton
                role="link"
                label="Latest arrivals"
                variant="Footer"
                localLink="/shop/latest"
                needsSpan
              >
                Latest arrivals
              </CustomButton>
              <CustomButton
                role="link"
                label="Urban Oasis"
                variant="Footer"
                localLink="/shop/collections/urban"
                needsSpan
              >
                Urban Oasis
              </CustomButton>
              <CustomButton
                role="link"
                label="Cozy Comfort"
                variant="Footer"
                localLink="/shop/collections/cozy"
                needsSpan
              >
                Cozy Comfort
              </CustomButton>
              <CustomButton
                role="link"
                label="Fresh Fusion"
                variant="Footer"
                localLink="/shop/collections/fresh"
                needsSpan
              >
                Fresh Fusion
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
      <section className="flex col-span-4 tablet:col-span-6 containerMax:col-span-12 grow justify-center">
        <div className="flex grow">
          <div className="flex max-tablet:flex-col max-containerMax:gap-8 containerMax:justify-between grow pt-8 border-t border-solid border-neutral-200">
            <span className="font-normal text-base text-neutral-500">
              © 2024 StyleNest, Inc. All rights reserved.
            </span>
            <div className="flex flex-wrap justify-start items-center gap-5">
              <CustomButton
                role="link"
                label="Youtube"
                link="https://youtube.com/"
                variant="Footer"
              >
                <Image
                  src={youtubeLogo}
                  width={24}
                  height={24}
                  alt="Youtube Logo"
                />
              </CustomButton>
              <CustomButton
                role="link"
                label="Instagram"
                link="https://instagram.com/"
                variant="Footer"
              >
                <Image
                  src={instagramLogo}
                  width={24}
                  height={24}
                  alt="Instagram Logo"
                />
              </CustomButton>
              <CustomButton
                role="link"
                label="Facebook"
                link="https://facebook.com/"
                variant="Footer"
              >
                <Image
                  src={facebookLogo}
                  width={24}
                  height={24}
                  alt="Facebook Logo"
                />
              </CustomButton>
              <CustomButton
                role="link"
                label="Github"
                link="https://github.com/"
                variant="Footer"
              >
                <Image
                  className="box-content w-6 h-6"
                  src={githubLogo}
                  alt="Github Logo"
                />
              </CustomButton>
              <CustomButton
                variant="Footer"
                label="Twitter / X"
                role="link"
                link="https://x.com/"
              >
                <Image
                  src={twitterXLogo}
                  width={24}
                  height={24}
                  alt="Twitter / X Logo"
                />
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
