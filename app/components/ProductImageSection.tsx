import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { ProductImage } from "../types";
import Image from "next/image";
import CustomButton from "./atoms/CustomButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type ProductImageSectionProps = {
  images: Array<ProductImage>;
  currentImage: ProductImage;
  setCurrentImage: Dispatch<SetStateAction<ProductImage | undefined>>;
  productName: string;
  selectedColor: string;
};

const ProductImageSection = ({
  images,
  currentImage,
  setCurrentImage,
  productName,
  selectedColor = currentImage.color,
}: ProductImageSectionProps) => {
  const carouselRef = useRef<Carousel | null>(null);
  const handleImageChange = (img: ProductImage) => {
    setCurrentImage(img);
  };

  const selectedColorImages = useMemo(() => {
    return images.filter((img) => img.color === selectedColor);
  }, [images]);

  const responsive = {
    containerMax: {
      breakpoint: { max: 9999, min: 1312 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1312, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 3,
    },
  };

  const handleImageFocus = (idx: number) => {
    if (carouselRef.current && carouselRef.current.state.currentSlide !== idx) {
      carouselRef.current.goToSlide(idx);
    }
  };

  const handleImageSelect = (img: ProductImage) => {
    handleImageChange(img);
  };

  return (
    <div className="col-span-full containerMax:col-span-6 flex flex-col gap-4 overflow-visible">
      <div className="w-full relative h-[400px] tablet:h-[800px] containerMax:w-[592px]">
        <Image
          className="object-cover rounded-lg"
          fill
          src={currentImage.image_url}
          alt={productName}
          loading="eager"
        />
      </div>
      <Carousel
        ref={carouselRef}
        sliderClass=" carousel-container-custom overflow-visible"
        className=" min-w-full containerMax:w-[592px] py-1"
        itemClass=" items-center justify-center rounded-lg "
        draggable={true}
        swipeable={true}
        showDots={false}
        arrows={false}
        centerMode={true}
        renderButtonGroupOutside={false}
        responsive={responsive}
        ssr={false}
      >
        {selectedColorImages.map((img, idx) => {
          return (
            <CustomButton
              key={idx}
              variant="CarouselItem"
              onFocus={() => handleImageFocus(idx)}
              onClick={() => handleImageSelect(img)}
              role="button"
              imageSrc={img.image_url}
              needsSpan={false}
              label={productName + " Image"}
            ></CustomButton>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ProductImageSection;
