import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import fonts from './fonts';

export const COLORS = {

    mainBackground: '#ffffff',
    // colors
    yellow: "#FBB915",
    yellow1: "#FBC74F",
    yellow2: "#FDD57E",
    yellow3: "#FDE4AA",
    yellow4: "#FEF1D5",
    yellow5: "#ffb500",

    dark: "#000000",
    dark1: "#4B4B4B",
    dark2: "#8E8E8E",
    dark3: "#CACACA",
    dark4: "#EAEAEA",
    dark5: "#FAFAFA",

    light: "#2C2C2C",
    light: "#6E6E6E",
    light: "#B3B3B3",
    light: "#E1E1E1",
    light: "#F5F5F5",
    light: "#FFFFFF",

    black: '#000000',       // h4
    black1: '#121212',      //header, imgButton
    black2: '#4b4b4b',       //btnBG , overviewDesc
    black3: '#161616',       //keyword remove icon, keyword text
    white: '#ffffff',      //body
    light: '#f5f5f5',        //btnText
    light1: '#fafafa',
    lightGray1: '#b3b3b3',  //p
    lightGray2: '#e1e1e1',  //hrline btnSectiontopBorder
    lightGray3: '#eaeaea',   //profileImgBg,
    lightGray4: '#f4f4f4',  // sideMenu
    lightGray5: '#e0e0e0', //keyword bg
    lightGray6: '#cacaca', //keyword icon bg // signup login page background
    lightGray7: '#c6c6c6', //text color for payment confirmation

    lightGray8: '#393939',
    lightGray10: '#6f6f6f',
    lightGray11: 'rgba(255, 255, 255, 0.8)',
    lightGray12: '#ecebeb',
    gray: '#a8a8a8',        //placeholder
    gray2: '#8d8d8d',      //textFieldBorder
    gray3: '#525252',        //textLink, textLabel
    gray4: '#979797',          //profileImgBorder
    // lightGray3: '#f4f4f4',  //textFields
    gray5: '#8e8e8e',
    gray6: '#2f2f2f',    // dashboardMenuButtons
    gray7: '#2c2c2c',  // cards footer
    gray8: '#6e6e6e',
    gray9: '#262626',

    danger: '#F32013',
    warning: '#ffc107',
    success: '#4bb543',
    info: '#6f6f6f',
    disabled: '#c2c2c2'

};

// ==================== DARK MODE CUSTOMIZATION ====================== //
export const DARK_THEME = {
    // COLORS: { ...COLORS }
    darkBG: { backgroundColor: COLORS.black1 },
    lightGray6: { backgroundColor: COLORS.lightGray6 },
    lightGray6BG: { backgroundColor: COLORS.lightGray6 },



    black1: { color: COLORS.black1 },
    black2: { color: COLORS.black2 },
    light: { color: COLORS.light },
    white: { color: COLORS.white },

    lightGray6: { color: COLORS.lightGray6 },
    lightGray7: { color: COLORS.lightGray7 },
    lightGray10: { color: COLORS.lightGray10 },
    lightGray9: { color: COLORS.lightGray9 },

    gray7: { color: COLORS.gray7 },

    black2BR: { borderColor: COLORS.black2 }
}

//static sizes for fonts
// for dynamic sizes use deviceOrientation width and height

export const SIZES = {
    xLargTitle: 34,
    largTitle: 32,
    title1: 28,
    title: 24,    //experience
    subTitle: 20, //experience

    h: 18,
    h1: 16,  //textlink //header
    h2: 15,  //username
    h3: 14,  //msg
    h4: 12,  //date

    body1: 16,
    body2: 15,
    body3: 14,
    body4: 12,
    small: 12, //experience
    xsmall: 10,

    arrow_down: 16,
    calender: 18,

    // app dimensions
    width,
    height,
};

export const FONTS = {

    AmostelySignatureRegular40: {
        fontSize: Platform.OS === 'android' ? 40 : 40,
        // fontFamily: Platform.OS === 'android' ? fonts.AmostelySignature : fonts.MrDeHavilandRegular
    },
    xLargTitle_m: {
        Poppins: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    xLargTitle_r: {
        Poppins: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    xLargTitle_b: {
        Poppins: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.xLargTitle,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    largTitle_m: {
        Poppins: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    largTitle_r: {
        Poppins: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    largTitle_b: {
        Poppins: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.largTitle,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    title1_m: {
        Poppins: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    title1_r: {
        Poppins: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    title1_b: {
        Poppins: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.title1,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    title_m: {
        Poppins: {
            fontSize: SIZES.title,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.title,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.title,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    title_r: {
        Poppins: {
            fontSize: SIZES.title,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.title,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.title,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    title_b: {
        Poppins: {
            fontSize: SIZES.title,
            // fontFamily: fonts.PoppinsBold
        },
        Montserrat: {
            fontSize: SIZES.title,
            // fontFamily: fonts.MontserratBold
        },
        OpenSans: {
            fontSize: SIZES.title,
            // fontFamily: fonts.OpenSansBold
        }

    },

    subTitle_m: {
        Poppins: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    subTitle_r: {
        Poppins: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    subTitle_b: {
        Poppins: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.subTitle,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    h_m: {
        Poppins: {
            fontSize: SIZES.h,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.h,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.h,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    h_r: {
        Poppins: {
            fontSize: SIZES.h,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    h_b: {
        Poppins: {
            fontSize: SIZES.h,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    h1_m: {
        Poppins: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    h1_r: {
        Poppins: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    h1_b: {
        Poppins: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h1,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    h2_m: {
        Poppins: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    h2_r: {
        Poppins: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    h2_b: {
        Poppins: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h2,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    h3_m: {
        Poppins: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    h3_r: {
        Poppins: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    h3_b: {
        Poppins: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h3,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    h4_m: {
        Poppins: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    h4_r: {
        Poppins: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    h4_b: {
        Poppins: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.h4,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    body1_m: {
        Poppins: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    body1_r: {
        Poppins: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    body1_b: {
        Poppins: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body1,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    body2_m: {
        Poppins: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    body2_r: {
        Poppins: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    body2_b: {
        Poppins: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body2,
            // fontFamily: fonts.OpenSansRegular
        }

    },


    body3_m: {
        Poppins: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    body3_r: {
        Poppins: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    body3_b: {
        Poppins: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body3,
            // fontFamily: fonts.OpenSansRegular
        }

    },


    body4_m: {
        Poppins: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    body4_r: {
        Poppins: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    body4_b: {
        Poppins: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.body4,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    small_m: {
        Poppins: {
            fontSize: SIZES.small,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.small,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.small,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    small_r: {
        Poppins: {
            fontSize: SIZES.small,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.small,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.small,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    small_b: {
        Poppins: {
            fontSize: SIZES.small,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.small,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.small,
            // fontFamily: fonts.OpenSansRegular
        }

    },

    xsmall_m: {
        Poppins: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.PoppinsMedium
        },
        Montserrat: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.MontserratMedium
        },
        OpenSans: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.OpenSansMedium
        }

    },
    xsmall_r: {
        Poppins: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.OpenSansRegular
        }

    },
    xsmall_b: {
        Poppins: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.PoppinsRegular
        },
        Montserrat: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.MontserratRegular
        },
        OpenSans: {
            fontSize: SIZES.xsmall,
            // fontFamily: fonts.OpenSansRegular
        }

    },
};

const appTheme = { COLORS, SIZES, FONTS, DARK_THEME };

export default appTheme;
