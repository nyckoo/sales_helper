const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  fullHeight: "height: 100%",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetweenCol: "flex flex-col justify-between items-center",

  iconHover: "rounded-md hover:bg-neutral-600",
  clickFocus: "focus:ring focus:ring-neutral-300 m-2",
  focused: "ring ring-neutral-300 m-2",
  paginationEnd: "outline outline-3 outline-lime-600 rounded-[28px]",
  clickEnabled: "ring ring-neutral-300",
  modalBg: "flex fixed inset-0 bg-stone-900 bg-opacity-75 justify-center items-center",
  modalContainer: "flex-column md:w-[500px] md:h-[500px] p-5 bg-zinc-800 bg-opacity-75 rounded-[10px]",
  inputField: "bg-transparent border-[2px] border-oldWhite text-[16px] text-dimWhite leading-[26px] rounded-md",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
