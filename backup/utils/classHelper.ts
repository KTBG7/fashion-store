const primary =
  " bg-indigo-700 text-center rounded text-white hover:bg-indigo-800 w-full focus:bg-indigo-800 ";

const localLinkButtonStyling =
  " flex items-center justify-center font-medium  disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none ";
const focusRing =
  " outline-none focus:ring-[4px] focus:ring-indigo-500 focus:ring-opacity-20 ";

const focusBorder =
  " outline-none border border-transparent border-[1.5px]  focus:border-indigo-200 ";

const spanClasses: Map<string, string> = new Map([
  ["linkTertiary", "font-medium text-base text-neutral-600"],

  [
    "linkFooter",
    "font-medium text-base text-neutral-600 outline-none [&>span]:focus:ring-[4px] [&>span]:focus:ring-indigo-500 [&>span]:focus:ring-opacity-20 [&>span]:rounded ",
  ],
]);

const buttonClasses: Map<string, string> = new Map([
  [
    "linkPrimary",
    "px-6 py-4 max-w-[151.5px] tablet:max-w-[213px] containerMax:max-w-[175.5px] " +
      primary +
      localLinkButtonStyling +
      focusRing,
  ],
  [
    "linkSecondary",
    "bg-white border-neutral-200 border border-0.5 hover:bg-neutral-50 customShadow px-4 py-2.5" +
      localLinkButtonStyling +
      focusRing,
  ],
  ["linkTertiary", "flex justify-center items-center rounded " + focusRing],
  [
    "linkFooter",
    "flex items-center rounded border-none outline-none ring-none ",
  ],

  ["linkImage", "flex w-fit h-fit rounded-lg" + focusRing],
  [
    "linkProduct",
    "relative rounded-lg flex flex-col gap-4 w-full h-fit" + focusRing,
  ],

  [
    "linkPurple",
    "flex items-center justify-center self-grow " + primary + focusRing,
  ],
  [
    "buttonPrimary",
    "flex items-center justify-center self-grow px-[14px] py-2.5 containerMax:w-[90px]  h-10" +
      primary +
      focusRing,
  ],
  [
    "buttonSecondary",
    "flex justify-center items-center px-[2px] py-[2px] rounded",
  ],
  ["buttonTertiary", "flex justify-center items-center rounded " + focusRing],
  ["buttonDropdown", "flex justify-center items-center rounded " + focusBorder],
  [
    "buttonWhite",
    "bg-white border-neutral-200 border border-0.5 hover:bg-neutral-50 customShadow " +
      focusRing,
  ],
  [
    "buttonPurple",
    "flex items-center justify-center self-grow " + primary + focusRing,
  ],
  [
    "buttonSizes",
    "bg-white border-neutral-200 text-base font-medium rounded aria-selected:border-indigo-600 border border-0.5 hover:bg-neutral-50 w-16 h-12 aria-disabled:bg-neutral-100 aria-disabled:text-neutral-400 " +
      localLinkButtonStyling,
  ],
  ["buttonRound", "group rounded-3xl border hover:cursor-pointer w-4 h-4"],
  ["buttonImage", "flex w-fit h-fit rounded-lg" + focusRing],
  [
    "buttonCarouselItem",
    "w-full h-[120px] tablet:h-[190px] bg-center bg-cover ring-0 outline-0 border-0 focus:border-[3px] focus:border-indigo-600 rounded-lg",
  ],
]);

export const getClasses = (variant: string, span: boolean): string => {
  return span
    ? buttonClasses.get(variant) + " " + spanClasses.get(variant) + " "
    : buttonClasses.get(variant) + " ";
};
