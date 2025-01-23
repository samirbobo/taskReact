import vision from "../../assets/vision-2030.png";
import whiteArrow from "../../assets/white-arrow.png";
import backOverlay from "../../assets/back-overlay.png";
import heroArtwork from "../../assets/hero-artwork.png";
import frontOverlay from "../../assets/front-overlay.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-primary-dark bg-custom-map-bg bg-cover bg-center bg-no-repeat pb-[40px] md:pb-[0px] pt-[110px]"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <div className="flex flex-col px-4 sm:px-12 md:px-16 max-w-screen-xl gap-[36px]">
        <div>
          <h1 className="leading-normal text-center font-readex text-[36px] md:text-[52px] lg:text-[68px] font-light text-white">
            {t("heroH1")}
          </h1>
          <h2 className="leading-normal text-center font-readex text-[34px] md:text-[52px] lg:text-[68px] mt-[-8px] sm:mt-[-14px] md:mt-[-20px] font-medium text-white">
            {t("heroH2")}
          </h2>
        </div>

        <div className="mt-[-20px]">
          <p className="leading-7 mb-1 font-inter text-[16px] sm:md:text-[22px] md:text-[24px] font-light text-white sm:text-center">
            {t("heroTitle1")}
          </p>
          <p className="leading-7 mt[-6px] font-inter text-[16px] sm:md:text-[22px] md:text-[24px] font-light text-white sm:text-center">
            {t("heroTitle2")}
          </p>
          <p className="leading-7 mt[-4px] font-inter text-[14px] sm:text-[18px] md:text-[22px] font-light text-text-light sm:text-center">
            {t("heroTitle3")}
          </p>
          <a
            href="https://www.vision2030.gov.sa/en"
            target="_blank"
            className="mt-4 flex items-center justify-center"
          >
            <img
              src={vision}
              alt="Saudi Vision 2030 Logo"
              loading="lazy"
              className="h-[50px] w-fit self-center object-contain md:h-[80px]"
            />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#participation"
            className="transition-all duration-[0.35s] px-[18px] rounded-lg cursor-pointer py-[8px] text-[12px] font-inter text-black bg-white font-semibold hover:text-text-btnHover shadow-lg"
          >
            {t("LearnMore")}
          </a>
          <a
            href="https://geosa-frontend-staging.rgp-dev.com/app/login"
            className="transition-all duration-[0.35s] px-[18px] rounded-lg cursor-pointer py-[8px] text-[14px] font-readex text-white bg-primary font-normal hover:bg-text-btnHover"
            target="_blank"
          >
            <img
              src={whiteArrow}
              alt="button icon"
              loading="lazy"
              className="mr-1 inline h-[20px] w-[20px] object-contain mb-[3px]"
            />
            {t("LoginButton")}
          </a>{" "}
        </div>

        <div className="relative flex items-center justify-center mb-7 w-full md:h-[650px]">
          <img
            src={backOverlay}
            alt="back Overlay"
            loading="lazy"
            className="absolute top-0 hidden h-full w-[90%] object-contain md:block"
          />
          <img
            src={heroArtwork}
            alt="Hero Artwork"
            loading="lazy"
            className="z-10 h-[70%] w-[90%] md:w-[75%] rounded-xl border border-primary-light object-cover"
          />
          <img
            src={frontOverlay}
            alt="front Overlay"
            loading="lazy"
            className="absolute bottom-0 z-20 hidden md:block h-full w-full object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
