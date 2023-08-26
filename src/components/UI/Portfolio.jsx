import React, { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
import Model from "./Model";

function Portfolio() {
  const [nextItems, setNextItems] = useState(6);
  const [portfolio, setPortfolio] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false)
  const [activeID, setActiveID] = useState(null)

  const loadMoreHandle = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandle = id => {
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolio(data);
    }

    if (selectTab === "web-design") {
      const filtereData = data.filter(item => item.category === "Web Design");
      setPortfolio(filtereData);
    }

    if (selectTab === "ux-design") {
      const filtereData = data.filter(item => item.category === "Ux");
      setPortfolio(filtereData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2rem] font-[700] ">
              My Recent Projects
            </h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="tex-smallTextColor border border-solid border-smallTextColor 
                    py-2 px-4 rounded-[8px] "
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-design")}
              className="tex-smallTextColor border border-solid border-smallTextColor 
                    py-2 px-4 rounded-[8px] "
            >
              Web Design
            </button>
            <button
              onClick={() => setSelectTab("ux-design")}
              className="tex-smallTextColor border border-solid border-smallTextColor 
                    py-2 px-4 rounded-[8px] "
            >
              UX Design
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolio.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={portfolio.id}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] "
            >
              <figura>
                <img className="rounded-[8px] " src={portfolio.imgUrl} alt="" />
              </figura>

              <div
                className="w-full h-full bg-primaryColor bg-opacity-40  absolute top-0 left-0 
                       z-[5] hidden group-hover:block "
              >
                <div className="w-full h-full flex items-center justify-center">
                  <button onClick={() => showModalHandle(portfolio.id)}
                  className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 ">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          {nextItems < portfolio.length && data.length > 6 && (
            <button
              onClick={loadMoreHandle}
              className="text-white bg-primaryColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {
        showModal && <Model activeID={activeID} setShowModal={setShowModal}/>
      }
    </section>
  );
}

export default Portfolio;
