import type { NextPage } from "next";

export type ComponentType = {
  className?: string;
  directTaxation?: string;
  minimizeTaxStressMaximize?: string;
};

const Component: NextPage<ComponentType> = ({
  className = "",
  directTaxation,
  minimizeTaxStressMaximize,
}) => {
  return (
    <div
      className={`w-[405px] rounded-xl box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[13px] px-[22px] max-w-full text-center text-5xl text-darkblue font-satoshi-variable border-[2px] border-solid border-blue ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <div className="w-[200px] flex flex-row items-end justify-start">
            <h3 className="m-0 flex-1 relative text-inherit font-bold font-inherit mq450:text-lgi">
              {directTaxation}
            </h3>
          </div>
          <div className="self-stretch h-[88px] relative text-base leading-[18.4px] font-medium text-blue text-justify inline-block">
            {minimizeTaxStressMaximize}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-[4px] text-left text-base">
          <a
            className="relative [text-decoration:underline] font-bold text-[inherit] inline-block min-w-[98px]"
            href="mailto:harshitn2002@gmail.com"
            target="_blank"
          >
            Contact Now
          </a>
          <img
            className="h-5 w-5 relative"
            loading="lazy"
            alt=""
            src="/arrow-outward.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
