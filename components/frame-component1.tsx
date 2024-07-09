import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[392px] shadow-[0px_1px_20px_rgba(0,_0,_0,_0.25)] rounded-xl bg-lavender-100 overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border gap-[16px] max-w-full text-center text-base text-midnightblue-200 font-satoshi-variable ${className}`}
    >
      <textarea
        className="[border:none] bg-white h-[227px] w-auto [outline:none] self-stretch relative rounded-t-xl rounded-b-none overflow-hidden shrink-0"
        rows={11}
        cols={20}
      />
      <div className="w-[265px] flex flex-row items-start justify-start py-0 px-4 box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[12px]">
          <b className="w-[151px] relative inline-block">Name: Lorem Ipsum</b>
          <b className="w-[195px] relative inline-block">
            Designation: Lorem Ipsum
          </b>
          <b className="w-[189px] relative inline-block">
            Experience: Lorem Ipsum
          </b>
          <b className="self-stretch relative">
            Area of Expertise: Lorem Ipsum
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
