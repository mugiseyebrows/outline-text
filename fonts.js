

let WINDOWS_FONTS = ["Arial", "Arial Black", "Bahnschrift", "Calibri",
    "Calibri Light", "Cambria", "Candara", "Comic Sans MS", "Consolas",
    "Constantia", "Corbel", "Corbel Light", "Courier New", "Ebrima",
    "Franklin Gothic Medium", "Gabriola", "Gadugi", "Georgia",
    "HoloLens MDL2 Assets", "Impact", "Ink Free", "Javanese Text",
    "Leelawadee UI", "Leelawadee UI Semilight", "Lucida Console",
    "Lucida Sans Unicode", "MV Boli", "Malgun Gothic",
    "Malgun Gothic Semilight", "Marlett", "Microsoft Himalaya",
    "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif",
    "Microsoft Tai Le", "Microsoft Yi Baiti", "Mongolian Baiti",
    "Myanmar Text", "Nirmala UI", "Nirmala UI Semilight",
    "Palatino Linotype", "Segoe MDL2 Assets", "Segoe Print", "Segoe Script",
    "Segoe UI", "Segoe UI Black", "Segoe UI Emoji", "Segoe UI Historic",
    "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Semilight",
    "Segoe UI Symbol", "SimSun-ExtB", "Sylfaen", "Symbol", "Tahoma",
    "Times New Roman", "Trebuchet MS", "Verdana", "Webdings", "Wingdings"
]

let UBUNTU_FONTS = ["Abyssinica SIL", "Ani", "AnjaliOldLipi", "C059", "Chandas",
    "Chilanka", "D050000L", "DejaVu Sans", "DejaVu Sans Mono",
    "DejaVu Serif", "Dhurjati", "Droid Sans Fallback", "Dyuthi", "FreeMono",
    "FreeSans", "FreeSerif", "Gargi", "Garuda", "Gayathri", "Gayathri Thin",
    "Gidugu", "Gubbi", "Gurajada", "Jamrul", "KacstArt", "KacstBook",
    "KacstDecorative", "KacstDigital", "KacstFarsi", "KacstLetter",
    "KacstNaskh", "KacstOffice", "KacstOne", "KacstPen", "KacstPoster",
    "KacstQurn", "KacstScreen", "KacstTitle", "KacstTitleL", "Kalapi",
    "Kalimati", "Karumbi", "Keraleeyam", "Khmer OS", "Khmer OS System",
    "Kinnari", "LKLUG", "LakkiReddy", "Laksaman", "Liberation Mono",
    "Liberation Sans", "Liberation Sans Narrow", "Liberation Serif",
    "Likhan", "Lohit Assamese", "Lohit Bengali", "Lohit Devanagari",
    "Lohit Gujarati", "Lohit Gurmukhi", "Lohit Kannada", "Lohit Malayalam",
    "Lohit Odia", "Lohit Tamil", "Lohit Tamil Classical", "Lohit Telugu",
    "Loma", "Mallanna", "Mandali", "Manjari", "Manjari Thin", "Meera",
    "Mitra ", "Mukti", "NATS", "NTR", "Nakula", "Navilu", "Nimbus Mono PS",
    "Nimbus Roman", "Nimbus Sans", "Nimbus Sans Narrow", "Norasi",
    "Noto Color Emoji", "Noto Mono", "Noto Sans Mono", "OpenSymbol", "P052",
    "Padauk", "Padauk Book", "Pagul", "Peddana", "Phetsarath OT", "Ponnala",
    "Pothana2000", "Potti Sreeramulu", "Purisa", "Rachana",
    "RaghuMalayalamSans", "Ramabhadra", "Ramaraja", "Rasa", "Rasa Light",
    "Rasa Medium", "Rasa SemiBold", "RaviPrakash", "Rekha", "Saab",
    "Sahadeva", "Samanata", "Samyak Devanagari", "Samyak Gujarati",
    "Samyak Malayalam", "Samyak Tamil", "Sarai", "Sawasdee",
    "Sree Krushnadevaraya", "Standard Symbols PS", "Suranna", "Suravaram",
    "Suruma", "Syamala Ramana", "TenaliRamakrishna", "Tibetan Machine Uni",
    "Timmana", "Tlwg Typist", "Tlwg Typo", "TlwgMono", "TlwgTypewriter",
    "URW Bookman", "URW Gothic", "Ubuntu", "Ubuntu Condensed",
    "Ubuntu Mono", "Umpush", "Uroob", "Vemana2000", "Waree", "Yrsa",
    "Yrsa Light", "Yrsa Medium", "Yrsa SemiBold", "Z003", "aakar",
    "mry_KacstQurn", "padmaa", "padmaa-Bold.1.1", "utkal"
]

let GOOGLE_FONTS = ["Lobster", "Raleway"]

export default function getFontFamilies() {
    let fontFamilies = []
    let userAgent = window.navigator.userAgent;
    if (userAgent.indexOf('Ubuntu') > -1) {
        fontFamilies = fontFamilies.concat(UBUNTU_FONTS)
    } else if (userAgent.indexOf('Windows NT') > -1) {
        fontFamilies = fontFamilies.concat(WINDOWS_FONTS)
    }
    fontFamilies = fontFamilies.concat(GOOGLE_FONTS)
    fontFamilies.sort()
    return fontFamilies
}
