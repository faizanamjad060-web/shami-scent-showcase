import diorSauvage from "@/assets/dior-sauvage.jpg.asset.json";
import ajmalDubai from "@/assets/ajmal-dubai-new.jpg.asset.json";
import oudAlShami from "@/assets/oud-al-shami-new.jpg.asset.json";
import officeForMen from "@/assets/office-for-men-new.jpg.asset.json";
import dunhillDesire from "@/assets/dunhill-desire-new.jpg.asset.json";
import zaraarGold from "@/assets/zaraar-gold-new.jpg.asset.json";
import afshAlTamamLeather from "@/assets/afsh-al-tamam-leather.jpg.asset.json";
import alEmaratAlTamamAmir from "@/assets/al-emarat-al-tamam-amir.jpg.asset.json";
import jananSport from "@/assets/janan-sport.jpg.asset.json";
import oudAlAjami from "@/assets/oud-al-ajami-new.jpg.asset.json";
import muskAlAjami from "@/assets/musk-al-ajami-new.jpg.asset.json";
import testers from "@/assets/testers.jpg.asset.json";

export type Product = {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  note?: string;
};

export const products: Product[] = [
  {
    id: "dior-sauvage",
    name: "Dior Sauvage",
    size: "30ml",
    price: 1800,
    image: diorSauvage.url,
    note: "Special price",
  },
  {
    id: "ajmal-dubai",
    name: "Ajmal Dubai",
    size: "30ml",
    price: 2499,
    image: ajmalDubai.url,
  },
  {
    id: "oud-al-shami",
    name: "Oud Al-Shami",
    size: "30ml",
    price: 2499,
    image: oudAlShami.url,
  },
  {
    id: "office-for-men",
    name: "Office for Men",
    size: "30ml",
    price: 2499,
    image: officeForMen.url,
  },
  {
    id: "dunhill-desire",
    name: "Dunhill Desire",
    size: "30ml",
    price: 2499,
    image: dunhillDesire.url,
  },
  {
    id: "zaraar-gold",
    name: "Zaraar Gold",
    size: "30ml",
    price: 2499,
    image: zaraarGold.url,
  },
  {
    id: "afsh-al-tamam-leather",
    name: "Afsh Al-Tamam Leather",
    size: "30ml",
    price: 2499,
    image: afshAlTamamLeather.url,
  },
  {
    id: "al-emarat-al-tamam-amir",
    name: "Al Emarat Al-Tamam Amir",
    size: "30ml",
    price: 2499,
    image: alEmaratAlTamamAmir.url,
  },
  {
    id: "janan-sport",
    name: "Janan Sport",
    size: "30ml",
    price: 2499,
    image: jananSport.url,
  },
  {
    id: "oud-al-ajami",
    name: "Oud Al-Ajami",
    size: "30ml",
    price: 2499,
    image: oudAlAjami.url,
  },
  {
    id: "musk-al-ajami",
    name: "Musk Al-Ajami",
    size: "30ml",
    price: 2499,
    image: muskAlAjami.url,
  },
];

export const testerSet: Product = {
  id: "tester-set-4",
  name: "Perfume Testers Set",
  size: "4 Testers – 12ml each",
  price: 1500,
  image: testers.url,
  note: "Tester set only — not an individual 30ml bottle",
};

export const fragranceList = [
  "Ajmal Dubai",
  "Oud Al-Shami",
  "Office for Men",
  "Dunhill Desire",
  "Zaraar Gold",
  "Afsh Al-Tamam Leather",
  "Al Emarat Al-Tamam Amir",
  "Janan Sport",
  "Oud Al-Ajami",
  "Musk Al-Ajami",
];

export const formatPrice = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;

export const WHATSAPP_PRIMARY = "03067970247";
export const WHATSAPP_NUMBERS: string[] = [WHATSAPP_PRIMARY, "03187970247"];
export const waLink = (text?: string) =>
  `https://wa.me/92${WHATSAPP_PRIMARY.slice(1)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
