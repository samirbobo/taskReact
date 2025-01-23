import { useTranslation } from "react-i18next";
import check from "../../assets/check.png";
import participation1 from "../../assets/participation1.png";
import participation2 from "../../assets/participation2.png";
import participation3 from "../../assets/participation3.png";
import participation4 from "../../assets/participation4.png";
import i18n from "../../i18n";

const cardData = [
  {
    id: 1,
    title: "cardTitle1",
    subTitle: "cardTitleP1",
    img: participation1,
  },
  {
    id: 2,
    title: "cardTitle2",
    subTitle: "cardTitleP2",
    img: participation2,
  },
  {
    id: 3,
    title: "cardTitle3",
    subTitle: "cardTitleP3",
    img: participation3,
  },
  {
    id: 4,
    title: "cardTitle4",
    subTitle: "cardTitleP4",
    img: participation4,
  },
];

const Participate = () => {
  const { t } = useTranslation();

  return (
    <section
      id="participation"
      className="flex flex-col mx-auto px-4 sm:px-12 md:px-16 max-w-screen-xl gap-[6px] py-[80px]"
      style={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
    >
      <h2 className="text-[1.7rem] md:text-[2.5rem] leading-normal font-readex font-normal text-text-dark sm:text-center">
        {t("participationTitle")}
      </h2>
      <p className="leading-7 font-readex text-[18px] font-[400] text-text-gray sm:text-center">
        {t("participationP1")}
        <br />
        {t("participationP2")}
      </p>

      <div className="grid lg:grid-cols-2 mt-[38px] w-full gap-5 p-4">
        {cardData.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-text-border duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex flex-col gap-[8px] p-[12px] md:p-[22px] lg:p-[24px]">
              <div className="flex items-center gap-[12px]">
                <div className="w-[36px] h-[36px] flex items-center justify-center rounded-md bg-text-shade text-[24px] text-text-green">
                  {item.id}
                </div>
                <h3 className="line-clamp-1 text-[18px] md:text-[24px] lg:text-[28px] font-normal text-text-dark">
                  {t(item.title)}
                </h3>
              </div>
              <div className="flex items-center gap-[12px]">
                <img
                  src={check}
                  alt="check image"
                  loading="lazy"
                  className="h-[22px] w-[22px] object-contain"
                />
                <h4 className="line-clamp-1 text-[16px] lg:text-[18px] font-normal text-text-gray">
                  {t(item.subTitle)}
                </h4>
              </div>
            </div>

            <img
              src={item.img}
              alt={item.img}
              loading="lazy"
              className="h-[162px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Participate;
