const currencies = {
  AED: "الإمارات",
  AFN: "أفغانستان",
  ALL: "ألبانيا",
  AMD: "أرمينيا",
  ANG: "جزر الأنتيل الهولندية",
  AOA: "أنغولا",
  ARS: "الأرجنتين",
  AUD: "أستراليا",
  AWG: "أروبا",
  AZN: "أذربيجان",
  BAM: "البوسنة والهرسك",
  BBD: "بربادوس",
  BDT: "بنغلاديش",
  BGN: "بلغاريا",
  BHD: "البحرين",
  BIF: "بوروندي",
  BMD: "برمودا",
  BND: "بروناي",
  BOB: "بوليفيا",
  BRL: "البرازيل",
  BSD: "البهاما",
  BTC: "بيتكوين",
  BTN: "بوتان",
  BWP: "بوتسوانا",
  BYN: "بيلاروسيا",
  BZD: "بليز",
  CAD: "كندا",
  CDF: "الكونغو",
  CHF: "سويسرا",
  CLF: "تشيلي",
  CLP: "تشيلي",
  CNY: "الصين",
  COP: "كولومبيا",
  CRC: "كوستاريكا",
  CUC: "كوبا",
  CUP: "كوبا",
  CVE: "الرأس الأخضر",
  CZK: "التشيك",
  DJF: "جيبوتي",
  DKK: "الدنمارك",
  DOP: "جمهورية الدومينيكان",
  DZD: "الجزائر",
  EGP: "مصر",
  ERN: "إريتريا",
  ETB: "إثيوبيا",
  EUR: "الاتحاد الأوروبي",
  FJD: "فيجي",
  FKP: "جزر فوكلاند",
  GBP: "المملكة المتحدة",
  GEL: "جورجيا",
  GGP: "غيرنزي",
  GHS: "غانا",
  GIP: "جبل طارق",
  GMD: "غامبيا",
  GNF: "غينيا",
  GTQ: "غواتيمالا",
  GYD: "غيانا",
  HKD: "هونغ كونغ",
  HNL: "هندوراس",
  HRK: "كرواتيا",
  HTG: "هايتي",
  HUF: "المجر",
  IDR: "إندونيسيا",
  ILS: "إسرائيل",
  IMP: "جزيرة مان",
  INR: "الهند",
  IQD: "العراق",
  IRR: "إيران",
  ISK: "آيسلندا",
  JEP: "جيرزي",
  JMD: "جامايكا",
  JOD: "الأردن",
  JPY: "اليابان",
  KES: "كينيا",
  KGS: "قرغيزستان",
  KHR: "كمبوديا",
  KMF: "جزر القمر",
  KPW: "كوريا الشمالية",
  KRW: "كوريا الجنوبية",
  KWD: "الكويت",
  KYD: "جزر كايمان ",
  KZT: "كازاخستان",
  LAK: "لاوس",
  LBP: "لبنان",
  LKR: "سريلانكا",
  LRD: "ليبيريا",
  LSL: "ليسوتو",
  LYD: "ليبيا",
  MAD: "المغرب",
  MDL: "مولدوفا",
  MGA: "مدغشقر",
  MKD: "مقدونيا",
  MMK: "ميانمار",
  MNT: "منغوليا",
  MOP: "ماكاو",
  MRO: "موريتانيا",
  MRU: "موريتانيا",
  MUR: "موريشيوس",
  MVR: "المالديف",
  MWK: "ملاوي",
  MXN: "المكسيك",
  MYR: "ماليزيا",
  MZN: "موزمبيق",
  NAD: "ناميبيا",
  NGN: "نيجيريا",
  NIO: "نيكاراغوا",
  NOK: "النرويج",
  NPR: "نيبال",
  NZD: "نيوزيلندا",
  OMR: "عُمان",
  PAB: "بنما",
  PEN: "بيرو",
  PGK: "بابوا غينيا الجديدة",
  PHP: "الفلبين",
  PKR: "باكستان",
  PLN: "بولندا",
  PYG: "باراغواي",
  QAR: "قطر",
  RON: "رومانيا",
  RSD: "صربيا",
  RUB: "روسيا",
  RWF: "رواندا",
  SAR: "السعودية",
  SBD: " جزر سليمان",
  SCR: " سيشيل",
  SDG: "السودان",
  SEK: "السويد",
  SGD: "سنغافورة",
  SHP: " سانت هيلينا",
  SLL: " سيراليون",
  SOS: " الصومال",
  SRD: " سورينام",
  SSP: " جنوب السودان",
  STD: " ساو تومي قديم",
  STN: " ساو تومي",
  SVC: " السلفادور",
  SYP: "سوريا",
  SZL: " إسواتيني ",
  THB: "تايلاند",
  TJS: " طاجيكستان",
  TMT: " تركمانستان",
  TND: "تونس",
  TOP: " تونغا",
  TRY: "تركيا",
  TTD: "ترينيداد وتوباغو",
  TWD: "تايوان",
  TZS: "تنزانيا",
  UAH: "أوكرانيا",
  UGX: "أوغندا",
  USD: "الولايات المتحدة",
  UYU: "أوروغواي",
  UZS: "أوزبكستان",
  VEF: " فنزويلا ",
  VES: "فنزويلا",
  VND: "فيتنام",
  VUV: " فانواتو",
  WST: " ساموا",
  XAF: "فرنك وسط أفريقيا",
  XAG: " الفضة",
  XAU: " الذهب",
  XCD: "شرق الكاريبي",
  XDR: " صندوق النقد الدولي",
  XOF: "فرنك غرب أفريقيا",
  XPD: "عملة البلاديوم ",
  XPF: "فرنك المحيط الهادئ ",
  XPT: "عملة البلاتين ",
  YER: "اليمن",
  ZAR: "جنوب أفريقيا",
  ZMW: "زامبيا",
  ZWL: "زيمبابوي ",
};
const apiKey = "54b69878ff444f348858df68cfc099a4";
const api = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

//Create dropdown from the currencies array
const createDropDown = (select) => {
  for (const key in currencies) {
    const option = document.createElement("option");
    option.value = key;
    option.text = currencies[key];
    select.add(option);
  }
};
createDropDown(fromDropDown);
createDropDown(toDropDown);

//Setting default values
fromDropDown.value = "USD";
toDropDown.value = "EGP";
const amount = document.querySelector("#amount");

const convertCurrency = async () => {
  const amount = document.querySelector("#amount").value;
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;

  if (amount.length != 0) {
    const data = await (await fetch(api)).json();
    const fromExchangeRate = data.rates[fromCurrency];
    const toExchangeRate = data.rates[toCurrency];
    const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
    document.getElementById("result").innerHTML = `${convertedAmount.toFixed(2)} ${toCurrency} = ${amount} ${fromCurrency}`;
  } else {
    alert("Please fill in the amount");
  }
};

amount.addEventListener("focus", () => (amount.value = ""));
amount.addEventListener("keyup", (e) => e.key === "Enter" && convertCurrency());
document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);

document.querySelector(".swap").addEventListener("click", () => {
  const temp = fromDropDown.value;
  fromDropDown.value = toDropDown.value;
  toDropDown.value = temp;
  convertCurrency();
});