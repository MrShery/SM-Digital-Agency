
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
      <div className="mx-auto w-[21.7vw] h-[5.6vw] flex justify-center items-center  rounded-xl customGradient-bg2">
        <div className=" w-[21.2vw] h-[5.2vw] rounded-2xl bg-[#000000]">
          <img src={SmLogo} alt="" className="sm:px-6 px-3 md:px-10 py-1  md:py-4" />
        </div>
      </div>
      <div className=" w-[73vw] md:w-[51.2vw] py-[2px] flex justify-center items-center  rounded-xl mx-auto bg-[linear-gradient(185deg,#8043ef_0%,#8043ef_0%,#00000075_100%)] ">
        <Accordion />
       </div>
    </section>
  );
};

export default QuestionSection;
