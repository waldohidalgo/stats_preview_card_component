import imgMobile from "./assets/image-header-mobile.jpg";
import imgDesktop from "./assets/image-header-desktop.jpg";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="bg-veryDarkGroundMainBg py-[98px] font-inter lg:py-[179px]">
        <div className="w-[87%] mx-auto overflow-hidden rounded-[6px] text-center bg-darkDesaturedBlueCardBg flex flex-col lg:flex-row-reverse max-w-[1112px]">
          <img className="lg:hidden " src={imgMobile} alt="hero image mobile" />
          <img
            className="hidden lg:block lg:w-[48%] object-cover"
            src={imgDesktop}
            alt="hero image desktop"
          />
          <div className="p-[42px_22px] lg:p-[74px_76px_64px_76px] lg:w-[52%]">
            <h2 className="text-white text-[31px] font-semibold leading-[38px] lg:text-start lg:text-[36px] lg:leading-[42px]">
              Get <span className="text-softViolet">insights</span> that help
              your business grow.
            </h2>
            <p className="text-slightlyTransparentWhiteMainParagraph px-[14px] mt-[15px] text-[17px] leading-[27px] lg:text-start lg:px-0 lg:text-[15px] lg:mt-[24px] lg:pe-[38px]">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            <ul className="mt-[42px] flex flex-col gap-[26px] lg:flex-row lg:gap-[60px] lg:mt-[67px]">
              <li>
                <h3 className="text-white text-[29px] font-semibold lg:text-start lg:text-[24px]">
                  10k+
                </h3>
                <p className="uppercase text-slightlyTransparentWhiteStatHeadings  text-[13px] tracking-[2px] lg:text-[11px]">
                  companies
                </p>
              </li>
              <li>
                <h3 className="text-white text-[29px] font-semibold lg:text-start lg:text-[24px]">
                  314
                </h3>
                <p className="uppercase text-slightlyTransparentWhiteStatHeadings text-[13px] tracking-[2px] lg:text-[11px]">
                  templates
                </p>
              </li>
              <li>
                <h3 className="text-white text-[29px] font-semibold uppercase lg:text-start lg:text-[24px] ">
                  12m+
                </h3>
                <p className="uppercase text-slightlyTransparentWhiteStatHeadings text-[13px] tracking-[2px] lg:text-[11px]">
                  queries
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
