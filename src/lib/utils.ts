import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const truncateWords = (text: string, maxWords = 7) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
};

export const formatDate = (
    isoDateString: string | undefined | null
): string => {
    if (!isoDateString) return "N/A";
    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) {
        return "Invalid date";
    }

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
};
