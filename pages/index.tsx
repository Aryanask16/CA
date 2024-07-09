import type { NextPage } from "next";
import RightPanel from "../components/right-panel";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[100px] leading-[normal] tracking-[normal] mq450:gap-[25px] mq750:gap-[50px]">
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[65px] box-border top-[0] z-[99] sticky max-w-full">
        <header className="h-[74px] flex-1 relative shadow-[0px_4px_22px_rgba(206,_218,_255,_0.5)] rounded-t-none rounded-b-13xl bg-lavender-200 overflow-hidden max-w-full">
          <img
            className="absolute h-[calc(100%_-_25px)] top-[13px] bottom-[12px] left-[92px] max-h-full w-[83px] object-contain"
            loading="lazy"
            alt=""
            src="/pngwingcom2-1@2x.png"
          />
        </header>
      </section>
      <RightPanel />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-center text-17xl text-white font-satoshi-variable">
        <div
          className="flex-1 bg-royalblue-200 h-[600px] overflow-hidden flex flex-col items-start justify-start py-[52px] px-[92px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:py-[34px] mq750:px-[46px] mq750:box-border"
          data-scroll-to="aboutSectionContainer"
        >
          
          <div className="self-stretch flex flex-col items-center justify-start mt-[-220px] gap-[40px] mq750:gap-[20px]">
            <ContainerScroll titleComponent={
            <h1 className="m-0 self-stretch h-[49px] relative text-inherit font-bold font-inherit inline-block mq450:text-3xl mq750:text-10xl">{`About Shishir & Co.`}</h1> }>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-left text-5xl">
              <h3 className="m-0 self-stretch relative text-black text-inherit leading-[33.6px] font-medium font-inherit mq450:text-lgi mq450:leading-[27px]">{`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `}</h3>
              <h3 className="m-0 self-stretch relative text-black text-inherit leading-[33.6px] font-medium font-inherit mq450:text-lgi mq450:leading-[27px]">{`Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum `}</h3>
            </div>
            </ContainerScroll>
          </div>
        
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent />
      <section className="self-stretch bg-mediumblue overflow-hidden flex flex-col items-start justify-start py-[68px] px-[92px] box-border max-w-full text-center text-17xl text-white font-satoshi-variable mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[46px] mq750:pr-[46px] mq750:box-border">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-0 box-border gap-[28px] max-w-full">
          <h1 className="m-0 w-[1283px] h-[49px] relative text-inherit font-black font-inherit inline-block max-w-[103%] shrink-0 mq450:text-3xl mq750:text-10xl">
            Chartered accountants committed to your financial growth and
            prosperity
          </h1>
          <button className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            > <a className="relative text-base [text-decoration:underline] " href="mailto:harshitn2002@gmail.com" target="_blank"></a>
              Contact Now
            </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Desktop;
