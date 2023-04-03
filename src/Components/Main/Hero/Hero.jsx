import styles from "../../../styles";
import Button from "../../../UI/Button";
import bgDesktop from "../../../Assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className=" bg-white  h-[72rem] relative">
      <div className="pl-[16.5rem] flex pt-[7.8rem] mb-[18.6rem] w-full overflow-x-hidden">
        <div className="mr-[10.2rem] mt-[6.1rem] ">
          <h1 className="text-[8rem] tracking-[-2px] leading-[9rem] font-bold w-[56.5rem] h-[18rem]">
            More than just shorter links
          </h1>
          <p className="text-neutralGrayishViolet font-medium text-[2.2rem] tracking-[0.15px] leading-[3.6rem] mb-[3.8rem]">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button classes={"px-[4rem] !py-[1.4rem] font-bold"}>
            get started
          </Button>
        </div>
        <img src={bgDesktop} alt="" />
      </div>
      <form className="bg-heroMobileInputPattern lg:bg-heroDesktopInputPattern bg-no-repeat bg-cover flex flex-col gap-[3.8rem] md:gap-0 items-center p-[2.4rem] md:p-0  md:justify-center md:flex-row md:h-[16.8rem] bg-primaryDarkViolet w-[32.7rem] md:w-[80rem] xl:w-[111.1rem] rounded-[1rem] absolute translate-y-[11rem] md:translate-y-[6.5rem] bottom-[0px] left-[50%] translate-x-[-50%] ">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="w-[27.9rem] md:w-[40rem] xl:w-[76.9rem] px-[3.2rem] py-[1.4rem] rounded-[1rem] md:mr-[2.4rem] mx-auto md:mx-0"
        />
        <Button
          classes={
            "!rounded-[1rem] px-[4.1rem] !py-[1.4rem] font-bold w-full md:w-[18.8rem]"
          }
        >
          shorten it!
        </Button>
      </form>
    </section>
  );
};

export default Hero;
