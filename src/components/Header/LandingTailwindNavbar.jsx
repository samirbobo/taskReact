import navLogo from "../../assets/nav-logo.png";
import bookmark from "../../assets/bookmark.png";
import lang from "../../assets/lang.png";
import login from "../../assets/login.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const LandingTailwindNavbar = () => {
  const { t } = useTranslation();
  return (
    <nav
      className="absolute left-1/2 -translate-x-1/2 top-[68px] flex items-center justify-between w-[90%] md:w-[75%] rounded-[20px] bg-white p-[10px] md:p-4 shadow-xl z-50"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <a href="https://www.geosa.gov.sa/ar/Pages/default.aspx" target="_blank">
        <img
          src={navLogo}
          alt="GEOSA Logo"
          loading="lazy"
          className="h-[40px] w-[115px] object-contain"
        />
      </a>

      <div className="flex items-center gap-5">
        <a
          className="hidden md:flex items-center gap-2 cursor-pointer rounded px-[8px] py-[12px] transition-all duration-300 hover:bg-text-hover"
          href="#participation"
        >
          <img
            src={bookmark}
            alt="Bookmark Icon"
            loading="lazy"
            className="h-[20px] w-[20px] object-contain"
          />
          <p className="leading-normal text-center font-inter text-[13px] font-normal text-text-gray">
            {t("navRFI")}
          </p>
        </a>

        <a
          className="hidden md:block cursor-pointer rounded px-[8px] py-[12px] transition-all duration-300 hover:bg-text-hover"
          href="#footer"
        >
          <p className="leading-normal text-center font-inter text-[13px] font-normal text-text-gray">
            {t("navAbout")}
          </p>
        </a>

        <button
          onClick={() => {
            const newLanguage = i18n.language === "en" ? "ar" : "en";
            i18n.changeLanguage(newLanguage);
          }}
          className="cursor-pointer"
        >
          <div className="flex items-end gap-1">
            <img
              src={lang}
              alt="GEOSA Logo"
              loading="lazy"
              className="h-[20px] w-[20px] object-contain"
            />
            <p className="leading-normal text-center font-inter text-[13px] font-normal text-text-gray">
              {t("lang")}
            </p>
          </div>
        </button>

        <a
          href="https://geosa-frontend-staging.rgp-dev.com/app/login"
          className="bg-primary px-3 sm:px-4 py-[10px] font-inter text-[14px] font-medium rounded-lg cursor-pointer text-white hover:bg-text-btnHover transition-all duration-[0.35s]"
          target="_blank"
        >
          <img
            src={login}
            alt="button icon"
            loading="lazy"
            className="mr-1 inline h-[20px] w-[20px] object-contain mb-[3px]"
          />
          {t("login")}
        </a>
      </div>
    </nav>
  );
};

export default LandingTailwindNavbar;
