import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="container">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/*  ========= hero left content start ======= */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600]
                    text-[16px] "
            >
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800]  text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Yaasiin Ahmed <br /> Web Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-[500] flex items-center gap-2
                    hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] "
                >
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor "
              >
                See Portfolio
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor font-[500] mt-14 text-[15px]
              leading-7 sm:pl-14 sm:pr-10 "
            >
              <span>
                <i class="ri-apps-line"></i>
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              reprehenderit distinctio unde error sit dolorem, qui eaque magni!
              Iste, veritatis.
            </p>

            <div className="flex items-center gap-8 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600] ">
                Follow me:
              </span>
              <span>
                <a
                  href="https://gihtub.com/yaasiinaxmed"
                  className="text-smallTextColor text-[18px] font-[600] "
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/yaasiin__ahmed"
                  className="text-smallTextColor text-[18px] font-[600] "
                >
                  <i class="ri-twitter-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/yaasiin-ahmed-92126725b/"
                  className="text-smallTextColor text-[18px] font-[600] "
                >
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </div>
          {/*  ========= hero left content end ======= */}
          {/*  ========= hero img start ====== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/*  ========= hero img end ====== */}
          {/*  ========= hero content right start ====== */}
          <div
            className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 
          md:flex-col md:justify-end md:text-end"
          >
            <div className="mb-">
              <h1 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={1.5} duration={3} suffix="+" />
              </h1>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Years of experience
              </h4>
            </div>
            <div className="mb-">
              <h1 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={100} duration={3} suffix="%" />
              </h1>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Success rate
              </h4>
            </div>
            <div className="mb-">
              <h1 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={117} duration={3} suffix="+" />
              </h1>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Happy clients
              </h4>
            </div>
            <div className="mb-">
              <h1 className="text-headingColor font-[700] text-[32px] ">
                <CountUp start={0} end={139} duration={3} suffix="+" />
              </h1>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
          {/*  ========= hero content right end ====== */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
