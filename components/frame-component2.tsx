import type { NextPage } from "next";
import Component1 from "./component1";
import Component from "./component";
import { BorderBeam } from "@/components/ui/BorderBeam";
export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch relative flex flex-row items-start justify-center pt-0 pb-5 pr-[22px] pl-5 box-border max-w-full text-center text-17xl text-midnightblue-100 font-satoshi-variable ${className}`}
    > 
      <div className="w-[1256px] relative flex flex-col items-center justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <h1 className="m-0 self-stretch h-[49px] relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq750:text-10xl">
          Our Services
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border gap-[32px_18px] min-h-[428px] max-w-full text-5xl text-darkblue">
          <Component1
            directTaxation="Direct Taxation"
            minimizeTaxStressMaximize={`Minimize tax stress, maximize savings. Our CAs handle complex personal & corporate income taxes, ensuring compliance while legally reducing your tax burden.`}
          />
          <Component
            directTaxation="Business Advisory"
            minimizeTaxStressMaximize={`Grow your business with expert guidance. Our CAs provide strategic advice on finances, operations, and growth. Make informed decisions & achieve your goals.`}
          />
          <Component
            directTaxation="GST Filing"
            minimizeTaxStressMaximize="Streamline your GST filing with our expert CAs. Our CAs handle everything from returns to record-keeping, with accuracy and minimizing penalties. "
          />
          <Component
            directTaxation="Corporate Advisory"
            minimizeTaxStressMaximize={`Navigate complex corporate matters with confidence. Our CAs offer comprehensive advisory services for mergers, acquisitions structuring & legal compliance.`}
          />
          <Component1 className="h-[217px]"
            directTaxation="Consulting"
            minimizeTaxStressMaximize="Unlock your business potential with our expert CA consulting. We offer tailored solutions for financial strategies, risk management, and operational efficiency."
          />
          <Component1 className="h-[217px]"
            directTaxation={`Audit`}
            minimizeTaxStressMaximize={`Gain trust and transparency with our CA-led audits & assurance. We provide independent verification of your financial health, boosting investor confidence and mitigating risks.`}
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
