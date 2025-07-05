
import SectionTitleInfo from "../../SectionTitleInfo";
import SmLogo from "../../../assets/Media/Logo/Asset 1.png";
import Accordion from "../../Accordion";

const QuestionSection = () => {
  return (
    <section id="terms_conditions" className="h-full px-4">
    <div className="my-5">
          <SectionTitleInfo
        subTitle="Frequently asked questions"
        subTitleClassName="font-bold"
        title="Still Have Questions?"
        titleClassName=" xs:text-[9vw] lg:text-[3.61vw]  md:font-bold"
      />
    </div>
      <div className="mx-auto  w-[28.7vw] h-[8.6vw] xs:w-[20.7vw] xs:h-[6vw] md:w-[18.7vw] md:h-[5.6vw] flex justify-center items-center  rounded-[1.5vw] customGradient-bg2">
        <div className=" w-[28.4vw] h-[8.3vw] md:w-[18.3vw] xs:w-[20.2vw] xs:h-[5.5vw] md:h-[5.3vw] rounded-[1.5vw] bg-[#000] dark:bg-white">
          <img src={SmLogo} alt="" className="sm:px-6 px-3 md:px-10 py-1  md:py-4 xs:w-[20.2vw] xs:h-[5.5vw]  w-[28.4vw] h-[7vw] md:w-[18.4vw] md:h-[5vw] dark:invert" />
        </div>
      </div>
      <div className="  w-[83vw] xs:w-[85vw] md:w-[51vw] py-[.18vw]  flex justify-center items-center  rounded-[1.9vw] mx-auto  bg-[linear-gradient(55deg,#8043ef_0%,#8043ef_0%,#00000075_115%)] ">
        <Accordion />
       </div>
    </section>
  );
};
export default QuestionSection;
