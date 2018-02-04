// Custom French Moment.js Locales
// Based on: https://github.com/moment/moment/blob/develop/locale/fr.js

moment.locale('hu', {
  months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
  monthsShort : 'jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.'.split('_'),
  monthsParseExact : true,
  weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
  weekdaysShort : 'vas._hét._kedd_szer._csüt._pén._szom.'.split('_'),
  weekdaysMin : 'V_H_K_Sze_CS_P_Szo'.split('_'),
  weekdaysParseExact : true,
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'YYYY/MM/DD',
    LL : 'YYYY MMMM D',
    LLL : 'YYYY MMMM D HH:mm',
    LLLL : 'YYYY MMMM D dddd HH:mm'
  },
  calendar : {
    sameDay : '[Ma] LT',
    nextDay : '[Holnap] LT',
    nextWeek : 'dddd [à] LT',
    lastDay : '[Tegnap] LT',
    lastWeek : 'dddd [utoljára] LT',
    sameElse : 'L'
  },
  relativeTime : {
    future : 'dans %s',
    past : 'il y a %s',
    s : 'quelques secondes',
    m : 'une minute',
    mm : '%d minutes',
    h : 'une heure',
    hh : '%d heures',
    d : 'un jour',
    dd : '%d jours',
    M : 'un mois',
    MM : '%d mois',
    y : 'un an',
    yy : '%d ans'
  },
  dayOfMonthOrdinalParse : /\d{1,2}(er|)/,
  ordinal : function (number, period) {
    switch (period) {
      // TODO: Return 'e' when day of month > 1. Move this case inside
      // block for masculine words below.
      // See https://github.com/moment/moment/issues/3375
      case 'D':
        return number + (number === 1 ? 'er' : '');

      // Words with masculine grammatical gender: mois, trimestre, jour
      default:
      case 'M':
      case 'Q':
      case 'DDD':
      case 'd':
        return number + (number === 1 ? 'er' : 'e');

      // Words with feminine grammatical gender: semaine
      case 'w':
      case 'W':
        return number + (number === 1 ? 're' : 'e');
    }
  },
  week : {
    dow : 1, // Monday is the first day of the week. Canadian French uses 0, because Sunday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year. Canadian French uses 6, because the week that contains Jan 1st is the first week of the year.
  }
});
