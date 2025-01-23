import grayArrow from "../../assets/gray-arrow.png";
import geosa from "../../assets/geosa-logo-white.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="footer" className="bg-text-primary pt-[94px]">
      <div
        className="flex flex-col mx-auto px-4 sm:px-12 md:px-16 max-w-screen-xl items-center gap-[16px]"
        style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
      >
        <h2 className="leading-normal text-center font-readex text-[28px] md:text-[36px] lg:text-[48px] font-normal text-white">
          {t("footerTitle1")}
          <span className="mt-[-8px] block">{t("footerTitle2")}</span>
        </h2>

        <p className="leading-7 text-center text-[18px] md:text-[22px] font-light text-white">
          {t("footerP")}
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="https://geosa-frontend-staging.rgp-dev.com/app/login"
            className="transition-all duration-[0.35s] px-[18px] rounded-lg cursor-pointer py-[8px] text-[12px] font-inter text-black bg-white font-[600] hover:text-text-btnHover"
            target="_blank"
          >
            <img
              src={grayArrow}
              alt="button icon"
              loading="lazy"
              className="mr-1 inline h-[20px] w-[20px] object-contain "
            />
            {t("DownloadButton")}
          </a>
          <img
            src={geosa}
            alt="geosa logo"
            loading="lazy"
            className="h-[36px] w-[100px] object-contain"
          />
        </div>
      </div>

      <div className="min-h-[770px] w-full bg-text-primary bg-custom-footer-bg bg-cover bg-bottom bg-no-repeat pt-[94px]"></div>
    </footer>
  );
};

export default Footer;
