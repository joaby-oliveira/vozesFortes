import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function buildWhatsAppLink(text: string, _source?: string) {
    const phoneNumber = "5514997335195";
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

    return url;
}
