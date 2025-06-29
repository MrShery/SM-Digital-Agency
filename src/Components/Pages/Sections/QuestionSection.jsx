
import SectionTitleInfo from "../../SectionTitleInfo";
import SmLogo from "../../../assets/Media/Logo/Asset 1.png";
import Accordion from "../../Accordion";

const QuestionSection = () => {
  return (
    <section id="terms_conditions" className="h-full px-4">
    <div className="my-5">
          <SectionTitleInfo
        subTitle="Frequently asked questions"
        title="Still Have Questions?"
        titleClassName="lg:text-[48.5px] font-bold"
        subTitleClassName="font-bold"
      />
    </div>
      <div className="mx-auto  w-[21.7vw] h-[5.6vw] flex justify-center items-center  rounded-[1.5vw] customGradient-bg2">
        <div className=" w-[21.4vw] h-[5.3vw] rounded-[1.5vw] bg-[#000000]">
          <img src={SmLogo} alt="" className="sm:px-6 px-3 md:px-10 py-1  md:py-4" />
        </div>
      </div>
      <div className="  w-[73vw] md:w-[51vw] py-[.18vw]  flex justify-center items-center  rounded-[1.9vw] mx-auto bg-[linear-gradient(55deg,#8043ef_0%,#8043ef_0%,#00000075_115%)] ">
        <Accordion />
       </div>
    </section>
  );
};

export default QuestionSection;
