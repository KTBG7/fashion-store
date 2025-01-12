import { useEffect, useState } from "react";
import CustomButton from "./atoms/CustomButton";
import { Collection } from "../types";
import { useQuery } from "@tanstack/react-query";
import { fetchCollections } from "../utils/apiHelper";
import Image from "next/image";
import CollectionsSectionSkeleton from "./CollectionsSectionSkeleton";

const CollectionsSection = () => {
  const [collectionItems, setCollectionItems] = useState<Array<Collection>>([]);

  const { data, isFetching, isLoading, isError } = useQuery({
    queryKey: ["collectionsGrid"],
    queryFn: fetchCollections,
  });

  useEffect(() => {
    if (data && !isFetching && !isLoading && !isError) {
      setCollectionItems(data);
    }
  }, [data, isFetching, isLoading, isError]);
  return (
    <section className="custom-col-container w-full containerMax:px-8 grid-cols-12 gap-y-8 h-fit">
      <h2 className="text-3xl font-semibold text-neutral-900 col-span-full">
        Our Collections
      </h2>
      <div className="col-span-full grid gap-7 min-h-[580px] grid-cols-4 tablet:grid-cols-6 containerMax:grid-cols-12 grid-rows-12 gap-y-7 h-fit">
        {isFetching || isLoading || isError ? (
          <CollectionsSectionSkeleton />
        ) : null}

        {!isFetching && !isError && !isLoading && collectionItems.length
          ? collectionItems.map((collection, idx: number) => {
              return (
                <CustomButton
                  key={idx}
                  label={collection.name}
                  localLink={"shop/" + collection.collection_id}
                  role="link"
                  variant="Image"
                  needsSpan={false}
                  className={`relative group w-full object-cover col-span-full tablet:col-span-3 containerMax:col-span-6 ${collection.collection_id !== "cozy" ? "tablet:row-span-6" : "row-span-12"} min-w-full min-h-full`}
                >
                  <Image
                    className={
                      collection.collection_id !== "cozy"
                        ? "min-w-full h-[337px] group tablet:h-[276px] object-cover relative rounded-lg hover:bg-gradient-to-b hover:from-black hover:to-black hover:bg-opacity-40 "
                        : "h-[580px] w-auto aspect-[319/580] tablet:aspect-[338/580] containerMax:aspect-[594/580] object-cover group rounded-lg min-w-full relative"
                    }
                    alt={collection.name}
                    quality={45}
                    width={594}
                    height={580}
                    aria-details={collection.description}
                    src={collection.image_url}
                  />
                  <div className="hidden absolute left-0 top-0 bottom-0 group-hover:flex group-focus:flex w-full h-full bg-gradient-to-b from-black to-black rounded-lg opacity-40"></div>
                  <div className="absolute left-4 bottom-4 pr-4 flex flex-col *:text-white">
                    <h3 className="text-sm font-normal">{collection.name}</h3>
                    <h4 className="text-lg font-medium">
                      {collection.description}
                    </h4>
                  </div>
                </CustomButton>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default CollectionsSection;
