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
