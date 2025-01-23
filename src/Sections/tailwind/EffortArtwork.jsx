import effort from "../../assets/effort-artwork.png";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import whiteArrow from "../../assets/white-arrow.png";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const EffortArtwork = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-text-light bg-[length:35%_68%] bg-[22%_50%] bg-no-repeat lg:bg-custom-grid-bg"
      style={{
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <div className="flex flex-col mx-auto px-4 sm:px-12 md:px-16 max-w-screen-xl gap-[45px] py-[60px] md:py-[80px]">
        <h2 className="leading-normal font-readex text-[32px] md:text-[42px] font-normal text-text-green2">
          {t("effortTitle")}
        </h2>

        <div className="flex w-full flex-col gap-[40px] lg:flex-row">
          <div className="h-auto w-full overflow-hidden rounded-lg lg:w-[40%]">
            <img
              src={effort}
              alt="Effort Artwork"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-[25px] lg:w-[60%]">
            <article className="flex flex-col sm:flex-row w-full items-center gap-[24px]">
              <img
                src={person1}
                alt="Person 1"
                loading="lazy"
                className="h-[154px] w-[154px] object-cover"
              />
              <p className="font-readex text-[14px] md:text-[18px] leading-7 font-light text-text-gray">
                {t("effortPerson1")}
              </p>
            </article>

            <article className="flex flex-col sm:flex-row w-full items-center gap-[24px]">
              <img
                src={person2}
                alt="Person 2"
                loading="lazy"
                className="h-[154px] w-[154px] object-cover"
              />
              <p className="font-readex text-[14px] md:text-[18px] leading-7 font-light text-text-gray">
                {t("effortPerson2")}
              </p>
            </article>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center justify-items-center gap-6 px-[3rem]">
          {images.map((image) => (
            <img
              key={image}
              src={image}
              alt={image}
              className="max-h-[45px] w-fit object-contain"
              loading="lazy"
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#participation"
            className="transition-all duration-[0.35s] px-[18px] rounded-lg cursor-pointer py-[8px] bg-white font-inter text-[12px] text-black font-[600] hover:text-text-btnHover shadow-lg"
          >
            {t("howWorks")}
          </a>

          <a
            href="https://geosa-frontend-staging.rgp-dev.com/app/login"
            className="transition-all duration-[0.35s] px-[18px] rounded-lg cursor-pointer py-[8px] bg-primary font-readex text-[14px] text-white font-normal hover:bg-text-btnHover"
            target="_blank"
          >
            <img
              src={whiteArrow}
              alt="button icon"
              loading="lazy"
              className="mr-1 inline h-[20px] w-[20px] object-contain mb-[3px]"
            />
            {t("startedButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EffortArtwork;
