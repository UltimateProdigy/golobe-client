import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { IHotel } from "../pages/hotels/listing";

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
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    return date.toLocaleDateString("en-US", options);
};
export const formatDateAlt = (
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

export const formatDuration = (durationStr: string): string => {
    const matches = durationStr.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    const hours = matches?.[1] ? `${matches[1]}h` : "";
    const minutes = matches?.[2] ? `${matches[2]}m` : "";
    return `${hours} ${minutes}`.trim();
};

export const getRandomListing = ({
    listings,
}: {
    listings: Partial<IHotel>[];
}): Partial<IHotel> => {
    const randomIndex = Math.floor(Math.random() * listings.length);
    return listings[randomIndex];
};

export const getRandomAirlineIcon = () => {
    const airlines = ["emirates", "flydubai", "qatar", "etihad"];
    const randomIndex = Math.floor(Math.random() * airlines.length);
    return `/src/assets/${airlines[randomIndex]}.png`;
};

export const getRandomFlightImage = () => {
    const airlines = ["emirates_bg.png", "qatar.jpg", "etihad.jpg"];
    const randomIndex = Math.floor(Math.random() * airlines.length);
    return `/src/assets/${airlines[randomIndex]}`;
};

const airlineCodes: Record<string, string> = {
    // North America
    AA: "American Airlines",
    DL: "Delta Air Lines",
    UA: "United Airlines",
    AC: "Air Canada",
    WN: "Southwest Airlines",
    AS: "Alaska Airlines",
    B6: "JetBlue Airways",
    F9: "Frontier Airlines",
    NK: "Spirit Airlines",

    // Europe
    BA: "British Airways",
    LH: "Lufthansa",
    AF: "Air France",
    KL: "KLM Royal Dutch Airlines",
    AY: "Finnair",
    AZ: "ITA Airways",
    IB: "Iberia",
    LX: "Swiss International Air Lines",
    OS: "Austrian Airlines",
    SK: "SAS Scandinavian Airlines",
    DY: "Norwegian Air Shuttle",
    FR: "Ryanair",
    U2: "easyJet",

    // Middle East
    EK: "Emirates",
    QR: "Qatar Airways",
    EY: "Etihad Airways",
    TK: "Turkish Airlines",
    SV: "Saudi Arabian Airlines",
    RJ: "Royal Jordanian",

    // Asia
    SQ: "Singapore Airlines",
    CX: "Cathay Pacific",
    NH: "ANA (All Nippon Airways)",
    JL: "Japan Airlines",
    KE: "Korean Air",
    OZ: "Asiana Airlines",
    CI: "China Airlines",
    BR: "EVA Air",
    MU: "China Eastern Airlines",
    CZ: "China Southern Airlines",
    CA: "Air China",
    AI: "Air India",
    VN: "Vietnam Airlines",
    TG: "Thai Airways",
    MH: "Malaysia Airlines",
    GA: "Garuda Indonesia",

    // Oceania
    QF: "Qantas",
    NZ: "Air New Zealand",

    // Africa
    ET: "Ethiopian Airlines",
    SA: "South African Airways",
    MS: "EgyptAir",
    KQ: "Kenya Airways",

    // Latin America
    LA: "LATAM Airlines",
    AV: "Avianca",
    CM: "Copa Airlines",
    JJ: "LATAM Brasil",
    AM: "Aeroméxico",
    G3: "Gol Transportes Aéreos",
    FI: "Icelandair",
    VS: "Virgin Atlantic",
};

export const getAirlineName = (code: string): string => {
    return airlineCodes[code.toUpperCase()] || "Unknown airline";
};

const airportCodes: Record<string, string> = {
    // North America
    ATL: "Hartsfield-Jackson Atlanta International Airport",
    LAX: "Los Angeles International Airport",
    ORD: "Chicago O'Hare International Airport",
    DFW: "Dallas/Fort Worth International Airport",
    JFK: "John F. Kennedy International Airport (New York)",
    EWR: "Newark Liberty International Airport",
    SFO: "San Francisco International Airport",
    YYZ: "Toronto Pearson International Airport",
    YVR: "Vancouver International Airport",
    MEX: "Mexico City International Airport",

    // Europe
    LHR: "London Heathrow Airport",
    CDG: "Paris-Charles de Gaulle Airport",
    FRA: "Frankfurt Airport",
    AMS: "Amsterdam Airport Schiphol",
    IST: "Istanbul Airport",
    DUB: "Dublin Airport",
    BCN: "Barcelona-El Prat Airport",
    FCO: "Rome Fiumicino Airport",
    MAD: "Adolfo Suárez Madrid-Barajas Airport",
    MUC: "Munich Airport",

    // Asia
    HND: "Tokyo Haneda Airport",
    NRT: "Tokyo Narita Airport",
    PEK: "Beijing Capital International Airport",
    PVG: "Shanghai Pudong International Airport",
    HKG: "Hong Kong International Airport",
    SIN: "Singapore Changi Airport",
    BKK: "Suvarnabhumi Airport (Bangkok)",
    DEL: "Indira Gandhi International Airport (Delhi)",
    DXB: "Dubai International Airport",
    ICN: "Incheon International Airport (Seoul)",

    // Middle East
    DOH: "Hamad International Airport (Doha)",
    AUH: "Abu Dhabi International Airport",
    TLV: "Ben Gurion Airport (Tel Aviv)",
    RUH: "King Khalid International Airport (Riyadh)",

    // Oceania
    SYD: "Sydney Kingsford Smith Airport",
    MEL: "Melbourne Airport",
    AKL: "Auckland Airport",

    // Africa
    JNB: "O.R. Tambo International Airport (Johannesburg)",
    CAI: "Cairo International Airport",
    NBO: "Jomo Kenyatta International Airport (Nairobi)",
    CPT: "Cape Town International Airport",

    // Latin America
    GRU: "São Paulo-Guarulhos International Airport",
    EZE: "Ministro Pistarini International Airport (Buenos Aires)",
    SCL: "Arturo Merino Benítez International Airport (Santiago)",
    LIM: "Jorge Chávez International Airport (Lima)",

    KEF: "Keflavík International Airport",
    PDX: "Portland International Airport",
    SEA: "Seattle–Tacoma International Airport",
    FLL: "Fort Lauderdale–Hollywood International Airport",
    AMM: "Queen Alia International Airport",
    LGA: "LaGuardia Airport (New York)",
    MCO: "Orlando International Airport",
    HEL: "Helsinki-Vantaa Airport (Finland)",
    ABJ: "Port Bouet Airport (Abidjan, Ivory Coast)",
    ADD: "Addis Ababa Bole International Airport (Ethiopia)",
};

export const getAirportName = (code: string): string => {
    return airportCodes[code.toUpperCase()] || code;
};
