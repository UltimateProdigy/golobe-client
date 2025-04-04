// Define type safety for our theme structure
export interface ThemeColors {
    bg: string;
    hover: string;
    text: string;
    border: string;
    light: string;
    dark: string;
}

export interface Theme {
    primary: ThemeColors;
    secondary: ThemeColors;
    success: ThemeColors;
    error: ThemeColors;
}

export interface ColorShades {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

export interface Colors {
    primary: ColorShades;
}

export const theme: Theme = {
    primary: {
        bg: "bg-blue-500",
        hover: "hover:bg-blue-600",
        text: "text-blue-500",
        border: "border-blue-500",
        light: "bg-blue-100",
        dark: "bg-blue-700",
    },
    secondary: {
        bg: "bg-purple-500",
        hover: "hover:bg-purple-600",
        text: "text-purple-500",
        border: "border-purple-500",
        light: "bg-purple-100",
        dark: "bg-purple-700",
    },
    success: {
        bg: "bg-green-500",
        hover: "hover:bg-green-600",
        text: "text-green-500",
        border: "border-green-500",
        light: "bg-green-100",
        dark: "bg-green-700",
    },
    error: {
        bg: "bg-red-500",
        hover: "hover:bg-red-600",
        text: "text-red-500",
        border: "border-red-500",
        light: "bg-red-100",
        dark: "bg-red-700",
    },
};

export const colors: Colors = {
    primary: {
        100: "#f1f9f6",
        200: "#e3f3ee",
        300: "#d5eee5",
        400: "#b9e2d4",
        500: "#b9e2d4",
        600: "#abdccb",
        700: "#82cbb2",
        800: "#66c0a1",
        900: "#58ba98",
    },
};

// Utility function to combine theme classes with custom classes
export const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(" ");

// Define types for variant options
export type ColorVariant = keyof Theme;
export type ButtonVariant = "solid" | "outline" | "ghost";
export type AlertVariant = "solid" | "soft";

// Common component variants
export const variants = {
    button: {
        solid: (color: ColorVariant = "primary") =>
            cx(
                theme[color].bg,
                theme[color].hover,
                "text-white px-4 py-2 rounded-lg",
                "transition-colors duration-200"
            ),
        outline: (color: ColorVariant = "primary") =>
            cx(
                "bg-transparent",
                theme[color].text,
                theme[color].border,
                `hover:${theme[color].bg}`,
                "hover:text-white",
                "border px-4 py-2 rounded-lg",
                "transition-colors duration-200"
            ),
        ghost: (color: ColorVariant = "primary") =>
            cx(
                "bg-transparent",
                theme[color].text,
                `hover:${theme[color].light}`,
                "px-4 py-2 rounded-lg",
                "transition-colors duration-200"
            ),
    },
    alert: {
        solid: (color: ColorVariant = "primary") =>
            cx(theme[color].bg, "text-white p-4 rounded-lg"),
        soft: (color: ColorVariant = "primary") =>
            cx(theme[color].light, theme[color].text, "p-4 rounded-lg"),
    },
};
