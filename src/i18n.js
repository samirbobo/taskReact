import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // Connects react-i18next with i18next.
  .init({
    resources: {
      // Here, place the texts for the English language.
      en: {
        translation: {
          // navbar
          navRFI: "RFI Process",
          navAbout: "About Us",
          lang: "ع",
          login: "Login",

          // hero section
          heroH1: "Shaping the Future of",
          heroH2: "Geospatial Innovation",
          heroTitle1:
            "GEOSA invites global innovators to collaborate. Access key documents,",
          heroTitle2:
            "Submit your RFI, and shape the future of Saudi Arabia’s geospatial innovation.",
          heroTitle3: "in alignment with KSA Vision 2030.",
          LearnMore: "Learn More",
          LoginButton: "Login to Access Documents",

          // effort section
          effortTitle: "Effortless Access, Clear Steps, Real Impact",
          effortPerson1:
            "Participating in GEOSA’s RFI process is designed for your convenience, ensuring smooth access to essential documents and straightforward submission.",
          effortPerson2:
            "We empower companies & governmental entities to build groundbreaking solutions that redefine industries and enhance lives.",
          howWorks: "How it works?",
          startedButton: "Get Started with Your RFI",

          // participation section
          participationTitle: "How to Participate in the RFI Process",
          participationP1: "A Simple, Streamlined Way to Contribute",
          participationP2:
            "Joining GEOSA’s RFI process is quick and hassle-free.",
          cardTitle1: "Login or Create Your Account",
          cardTitleP1: "Access the portal to get started",
          cardTitle2: "Complete Your Company Profile",
          cardTitleP2: "A quick questionnaire about your organization",
          cardTitle3: "Download Key Documents",
          cardTitleP3: "Access the General Policy Document and RFI files",
          cardTitle4: "Submit Your RFI",
          cardTitleP4: "Upload your PDF response",

          // footer section
          footerTitle1: "Say goodbye to",
          footerTitle2: "endless piles of paperwork",
          footerP:
            "GEOSA simplifies the process—access, submit, and innovate effortlessly.",
          DownloadButton: "Login to Download Documents",
        },
      },
      // Here, place the texts for the Arabic language.
      ar: {
        translation: {
          // navbar
          navRFI: "عمليه RFI",
          navAbout: "معلومات عنا",
          lang: "EN",
          login: "تسجيل الدخول",

          // hero section
          heroH1: "تشكيل مستقبل",
          heroH2: "الابتكار الجغرافي المكاني",
          heroTitle1:
            "تدعو GEOSA المبتكرين العالميين للتعاون. الوصول إلى الوثائق الأساسية،",
          heroTitle2:
            "قم بتقديم طلب المعلومات الخاص بك، وساهم في تشكيل مستقبل الابتكار الجغرافي المكاني في السعودية",
          heroTitle3: "تماشياً مع رؤية المملكة العربية السعودية 2030",
          LearnMore: "تعرف علي المزيد",
          LoginButton: "تسجيل الدخول للوصول الي الوثائق",

          // effort section
          effortTitle: "سهولة الوصول، خطوات واضحة، تأثير حقيقي",
          effortPerson1:
            "تم تصميم عملية RFI الخاصة بـ GEOSA لتناسب احتياجاتك، مما يضمن الوصول السلس إلى الوثائق الأساسية وتقديم الطلب بسهولة.",
          effortPerson2:
            "نحن نمكّن الشركات والجهات الحكومية من بناء حلول مبتكرة تعيد تعريف الصناعات وتحسن حياة الناس.",
          howWorks: "كيف يعمل؟",
          startedButton: "ابدا مع طلب المعلومات الخاص بك",

          // participation section
          participationTitle: "كيفية المشاركة في عملية طلب المعلومات",
          participationP1: "طريقة بسيطة ومنظمة للمساهمة",
          participationP2:
            "الانضمام إلى عملية طلب المعلومات الخاصة بـ  سريع وخالٍ من التعقيدات.",
          cardTitle1: "قم بتسجيل الدخول أو إنشاء حساب",
          cardTitleP1: "الوصول إلى البوابة للبدء",
          cardTitle2: "أكمل ملف شركتك",
          cardTitleP2: "استبيان سريع عن مؤسستك",
          cardTitle3: "قم بتنزيل الوثائق الرئيسية",
          cardTitleP3: "الوصول إلى مستند السياسة العامة وملفات RFI",
          cardTitle4: "قدم طلب المعلومات الخاص بك",
          cardTitleP4: "قم بتحميل استجابتك بصيغة PDF",

          // footer section
          footerTitle1: "وداعًا لـ",
          footerTitle2: "أكوام الأوراق التي لا تنتهي",
          footerP:
            "GEOSA تبسط العملية - وصول سهل، تقديم سريع، وابتكار بلا جهد.",
          DownloadButton: "تسجيل الدخول لتنزيل الوثائق",
        },
      },
    },

    lng: "en", // Default language
    fallbackLng: "en", // he fallback language if a translation is not available.
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
