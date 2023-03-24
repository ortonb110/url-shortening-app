import styles from "../../../styles";
import Button from "../../../UI/Button";
import bgDesktop from "../../../Assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white ">
      <div className="pl-[16.5rem] flex pt-[7.8rem] mb-[18.6rem]">
        <div className="mr-[10.2rem] mt-[6.1rem]">
          <h1 className="text-[8rem] tracking-[-2px] leading-[9rem] font-bold w-[56.5rem] h-[18rem]">
            More than just shorter links
          </h1>
          <p className="text-neutralGrayishViolet font-medium text-[2.2rem] tracking-[0.15px] leading-[3.6rem] mb-[3.8rem]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button classes={"px-[4rem] !py-[1.4rem] font-bold"}>get started</Button>
        </div>
        <img src={bgDesktop} alt="" />
      </div>
      <form className="bg-heroMobileInputPattern lg:bg-heroDesktopInputPattern bg-no-repeat bg-cover h-[16.8rem] bg-primaryDarkViolet xl:w-[111.1rem] rounded-[1rem]  flex items-center justify-center absolute bottom-[10px] left-[50%] translate-x-[-50%] ">
        <input type="text" placeholder="Shorten a link here..."  className="w-[76.9rem] px-[3.2rem] py-[1.4rem] rounded-[1rem] mr-[2.4rem]"/>
        <Button classes={"!rounded-[1rem] px-[4.1rem] !py-[1.4rem] font-bold"}>shorten it!</Button>
      </form>
    </section>
  );
};

export default Hero;
