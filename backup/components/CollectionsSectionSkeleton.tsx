const CollectionsSectionSkeleton = () => {
  return (
    <>
      <div className="bg-neutral-700 animate-pulse-slow rounded-2xl flex flex-grow flex-shrink-0 relative group w-full object-cover col-span-full tablet:col-span-3 containerMax:col-span-6 row-span-12 min-w-full min-h-full">
        <div className="h-[580px] w-auto aspect-[319/580] tablet:aspect-[338/580] containerMax:aspect-[594/580] object-cover group rounded-lg min-w-full relative"></div>
      </div>

      <div className="bg-neutral-700 animate-pulse-slow rounded-2xl flex flex-grow flex-shrink-0 relative group w-full object-cover col-span-full tablet:col-span-3 containerMax:col-span-6 tablet:row-span-6 min-w-full min-h-full">
        <div className="min-w-full h-[337px] group tablet:h-[276px] object-cover relative rounded-lg hover:bg-gradient-to-b hover:from-black hover:to-black hover:bg-opacity-40 "></div>
      </div>

      <div className="bg-neutral-700 animate-pulse-slow rounded-2xl flex flex-grow flex-shrink-0 relative group w-full object-cover col-span-full tablet:col-span-3 containerMax:col-span-6 tablet:row-span-6 min-w-full min-h-full">
        <div className="min-w-full h-[337px] group tablet:h-[276px] object-cover relative rounded-lg hover:bg-gradient-to-b hover:from-black hover:to-black hover:bg-opacity-40 "></div>
      </div>
    </>
  );
};

export default CollectionsSectionSkeleton;
