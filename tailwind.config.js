/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      monitor: { min: "1800px" },
      desktop: { min: "1200px" },
      tablet: { min: "900px" },
      mobile: { min: "600px" },
      "small-mobile": { max: "400px" },
      "max-monitor": { max: "1800px" },
      "max-desktop": { max: "1200px" },
      "max-tablet": { max: "900px" },
      "max-mobile": { max: "600px" },
      "max-small-mobile": { max: "400px" },
    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      white: "#FFFFFF",
      black: "#000000",
      dark: "#1E2022",
      dim: "#D9D9D9",
      "cool-white": "#CFD0D3",
      "subtle-white": "#EFF2F2",
      gray: "#77838F",
      "light-gray": "#9EA1B4",
      "search-gray": "#F3F8F7",
      green: "#17C5A5",
      "dark-green": "#008370",
      "light-green": "#F1FAF9",
      red: "#CC0000",
    },
    boxShadow: {
      none: "none",
      lg: "0px 2px 48px rgba(0, 0, 0, 0.06)",
      card: "0px 2px 4px rgba(220, 219, 222, 0.31)",
      search: "0px 4px 4px rgba(130, 134, 157, 0.08)",
      "check-icon": "0px 7.5px 20px rgba(0, 0, 0, 0.16)",
    },
    borderRadius: {
      none: "0px",
      xs: "2px",
      sm: "4px",
      md: "8px",
      lg: "12px",
      xl: "16px",
      "2xl": "18px",
      "pop-up": "25px",
      "3xl": "32px",
      search: "60px",
      full: "999px",
    },
    fontSize: {
      xs: ["10px", { lineHeight: "10px" }],
      sm: ["12px", { lineHeight: "12px" }],
      md: ["14px", { lineHeight: "14px" }],
      "md-line-height": ["14px", { lineHeight: "24px" }],
      lg: ["16px", { lineHeight: "22px" }],
      "lg-line-height": ["17px", { lineHeight: "27px" }],
      xl: ["18px", { lineHeight: "24px" }],
      "xl-line-height": ["18px", { lineHeight: "30px" }],
      "2xl": ["20px", { lineHeight: "28px" }],
      "2xl-line-height": ["22px", { lineHeight: "32px" }],
      "3xl": ["25px", { lineHeight: "38px" }],
      "4xl": ["32px", { lineHeight: "48px" }],
      "5xl": ["36px", { lineHeight: "54px" }],
      "6xl": ["40px", { lineHeight: "60px" }],
      "7xl": ["68px", { lineHeight: "72px" }],
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
      "dm-sans": "DMSans, sans-serif",
    },
    extend: {
      backgroundImage: {
        "button-linear-gradient":
          "linear-gradient(180deg, #00CAAC 0%, #01B5AE 100%), linear-gradient(0deg, rgba(61, 67, 84, 0.2), rgba(61, 67, 84, 0.2))",
        "linear-gradient":
          "linear-gradient(122.54deg, #222737 32.41%, #000000 129.9%)",
        "radial-gradient":
          "radial-gradient(63.37% 63.37% at 50% 50.07%, rgba(219, 243, 239, 0.5) 8.25%, rgba(219, 243, 239, 0) 100%)",
        "calc-radial-gradient":
          "radial-gradient(63.37% 63.37% at 50% 50.07%, #DBF3EF 8.25%, rgba(219, 243, 239, 0) 100%))",
      },
      animation: {
        loader: "loader 0.6s infinite alternate",
      },
      keyframes: {
        loader: {
          to: {
            opacity: 0.65,
            transform: "translate3d(0, -1rem, 0)",
          },
        },
      },
    },
  },
  plugins: [],
};
