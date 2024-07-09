import type { NextPage } from "next";
import FrameComponent1 from "./frame-component1";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[22px] pl-5 box-border max-w-full text-center text-17xl text-midnightblue-100 font-satoshi-variable ${className}`}
    >
      <div className="w-[1256px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <h1 className="m-0 self-stretch h-[49px] relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq750:text-10xl">
          Meet Our Team
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[36px_38px] min-h-[802px] max-w-full text-base text-midnightblue-200 mq750:gap-[19px]">
          <FrameComponent1 />
          <FrameComponent1 />
          <FrameComponent1 />
          <FrameComponent1 />
          <FrameComponent1 />
          <FrameComponent1 />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
