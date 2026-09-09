import diorSauvage from "@/assets/dior-sauvage.jpg.asset.json";
import shamailOud from "@/assets/shamail-oud.jpg.asset.json";
import oudAlShami from "@/assets/oud-al-shami.jpg.asset.json";
import officeForMen from "@/assets/office-for-men.jpg.asset.json";
import officeTamam from "@/assets/office-tamam-leather.jpg.asset.json";
import dunhill from "@/assets/dunhill-desire.jpg.asset.json";
import muskAlAjami from "@/assets/musk-al-ajami.jpg.asset.json";
import ajmalDubai from "@/assets/ajmal-dubai.jpg.asset.json";
import alEmarat from "@/assets/al-emarat.jpg.asset.json";
import zarrarGold from "@/assets/zarrar-gold.jpg.asset.json";
import oudAlAjami from "@/assets/oud-al-ajami.jpg.asset.json";
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
    id: "shamail-oud",
    name: "Shamail Oud",
    size: "50ml",
    price: 2499,
    image: shamailOud.url,
    note: "Now available",
  },
  {
    id: "oud-al-shami",
    name: "Oud Al Shami – Signature by Al Shami 12",
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
    id: "office-al-tamam-leather",
    name: "Office Al Tamam Leather – Signature by Al Shami 12",
    size: "30ml",
    price: 2499,
    image: officeTamam.url,
  },
  {
    id: "dunhill-desire",
    name: "Dunhill Desire",
    size: "30ml",
    price: 2499,
    image: dunhill.url,
  },
  {
    id: "musk-al-ajami",
    name: "Musk Al Ajami – Signature by Al Shami 12",
    size: "30ml",
    price: 2499,
    image: muskAlAjami.url,
  },
  {
    id: "ajmal-dubai",
    name: "Ajmal Dubai",
    size: "30ml",
    price: 2499,
    image: ajmalDubai.url,
  },
  {
    id: "al-emarat-al-amir",
    name: "Al Emarat Al Amir – 12",
    size: "30ml",
    price: 2499,
    image: alEmarat.url,
  },
  {
    id: "zarrar-gold",
    name: "Zarar Gold",
    size: "30ml",
    price: 2499,
    image: zarrarGold.url,
  },
  {
    id: "oud-al-ajami",
    name: "Oud Al Ajami – Signature by Al Shami 12",
    size: "30ml",
    price: 2499,
    image: oudAlAjami.url,
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
  "Dior Sauvage",
  "Oud Al Shami – Signature by Al Shami 12",
  "Office for Men",
  "Office Al Tamam Leather – Signature by Al Shami 12",
  "Dunhill Desire",
  "Musk Al Ajami – Signature by Al Shami 12",
  "Ajmal Dubai",
  "Al Emarat Al Amir – 12",
  "Zarar Gold",
  "Oud Al Ajami – Signature by Al Shami 12",
];

export const formatPrice = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;

export const WHATSAPP_NUMBERS = ["03067970247", "03187970247"];
