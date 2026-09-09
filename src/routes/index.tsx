import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  products,
  testerSet,
  fragranceList,
  formatPrice,
  WHATSAPP_NUMBERS,
  waLink,
  type Product,
} from "@/lib/products";
import collection from "@/assets/collection.jpg.asset.json";
import fragranceListImg from "@/assets/fragrance-list.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "By Shami Fragrances | Premium Long-Lasting Perfumes" },
      {
        name: "description",
        content:
          "Shop By Shami Fragrances: premium 30ml perfumes at Rs. 2,499, Dior Sauvage 30ml Rs. 1,800, Shamail Oud 50ml, 4 testers for Rs. 1,500 and 3 bottles for Rs. 6,000.",
      },
      { property: "og:title", content: "By Shami Fragrances | Premium Long-Lasting Perfumes" },
      {
        property: "og:description",
        content:
          "Signature oud, musk and designer-inspired perfumes. Individual 30ml bottles, tester sets and a 3-bottle offer.",
      },
    ],
  }),
  component: Home,
});

type CartLine = { product: Product; qty: number };

function Home() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const total = useMemo(
    () => cart.reduce((s, l) => s + l.product.price * l.qty, 0),
    [cart],
  );
  const count = cart.reduce((s, l) => s + l.qty, 0);

  const add = (product: Product, open = false) => {
    setCart((c) => {
      const found = c.find((l) => l.product.id === product.id);
      return found
        ? c.map((l) => (l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l))
        : [...c, { product, qty: 1 }];
    });
    if (open) {
      setCheckout(true);
      setCartOpen(true);
    } else {
      setCartOpen(true);
    }
  };

  const setQty = (id: string, qty: number) =>
    setCart((c) =>
      qty <= 0
        ? c.filter((l) => l.product.id !== id)
        : c.map((l) => (l.product.id === id ? { ...l, qty } : l)),
    );

  return (
    <div className="min-h-screen bg-background">
      <Header count={count} onCart={() => setCartOpen(true)} />
      <Hero />
      <FragranceList />
      <Products onAdd={add} />
      <AboutProducts onAdd={add} />
      <Footer />
      {cartOpen && (
        <CartDrawer
          cart={cart}
          total={total}
          checkout={checkout}
          setCheckout={setCheckout}
          setQty={setQty}
          onClose={() => {
            setCartOpen(false);
            setCheckout(false);
          }}
        />
      )}
    </div>
  );
}

function Header({ count, onCart }: { count: number; onCart: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="leading-none">
          <span className="gold-text block font-display text-xl font-semibold tracking-[0.18em]">
            BY SHAMI
          </span>
          <span className="text-[10px] tracking-[0.4em] text-muted-foreground">
            FRAGRANCES
          </span>
        </a>
        <nav className="hidden gap-7 text-xs tracking-[0.2em] text-muted-foreground sm:flex">
          <a href="#products" className="hover:text-primary">
            PRODUCTS
          </a>
          <a href="#about-products" className="hover:text-primary">
            ABOUT PRODUCTS
          </a>
          <a href="#testers" className="hover:text-primary">
            TESTERS
          </a>
        </nav>
        <button
          onClick={onCart}
          className="rounded-sm border border-primary/60 px-4 py-2 text-xs tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          CART ({count})
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img
        src={collection.url}
        alt="By Shami Fragrances 30ml perfume collection"
        width={1280}
        height={1600}
        className="h-[70vh] w-full object-cover object-top opacity-60"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-background/70 via-background/40 to-background px-6 text-center">
        <p className="text-[11px] tracking-[0.45em] text-muted-foreground">
          PREMIUM · LONG LASTING · SIGNATURE
        </p>
        <h1 className="gold-text mt-4 font-display text-5xl font-semibold tracking-wide sm:text-7xl">
          By Shami Fragrances
        </h1>
        <div className="gold-rule my-6 w-56" />
        <p className="max-w-md text-sm text-muted-foreground">
          Signature oud, musk and designer-inspired perfumes, filled fresh in 30ml
          bottles.
        </p>
        <a
          href="#products"
          className="mt-8 rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.3em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          SHOP THE COLLECTION
        </a>
      </div>
    </section>
  );
}

function FragranceList() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="OUR FRAGRANCES" title="Perfume List" />
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
        <ol className="space-y-3">
          {fragranceList.map((name, i) => (
            <li
              key={name}
              className="flex items-baseline gap-3 border-b border-border/60 pb-3"
            >
              <span className="font-display text-lg text-primary">{i + 1}.</span>
              <span className="text-sm text-foreground">{name}</span>
            </li>
          ))}
        </ol>
        <img
          src={fragranceListImg.url}
          alt="By Shami Fragrances signature perfume list"
          loading="lazy"
          width={1600}
          height={853}
          className="w-full rounded-sm border border-border"
        />
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-[11px] tracking-[0.4em] text-muted-foreground">{kicker}</p>
      <h2 className="gold-text mt-3 font-display text-4xl font-semibold">{title}</h2>
      <div className="gold-rule mx-auto mt-4 w-40" />
    </div>
  );
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (p: Product, buyNow?: boolean) => void;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-sm border border-border bg-card">
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={`${product.name} ${product.size} perfume bottle`}
          loading="lazy"
          width={600}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg leading-snug text-card-foreground">
          {product.name}
        </h3>
        <p className="mt-1 text-[11px] tracking-[0.25em] text-muted-foreground">
          {product.size.toUpperCase()}
        </p>
        {product.note && (
          <p className="mt-2 self-start rounded-sm border border-primary/50 px-2 py-1 text-[10px] tracking-[0.15em] text-primary">
            {product.note.toUpperCase()}
          </p>
        )}
        <p className="mt-3 font-display text-2xl text-primary">
          {formatPrice(product.price)}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <button
            onClick={() => onAdd(product)}
            className="rounded-sm border border-primary/60 py-2 text-[11px] tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            ADD TO CART
          </button>
          <button
            onClick={() => onAdd(product, true)}
            className="rounded-sm bg-primary py-2 text-[11px] tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </article>
  );
}

function Products({ onAdd }: { onAdd: (p: Product, buyNow?: boolean) => void }) {
  return (
    <section id="products" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle kicker="INDIVIDUAL BOTTLES" title="Products" />
      <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground">
        Every bottle is sold individually. Regular 30ml bottles are Rs. 2,499 each.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}

function AboutProducts({ onAdd }: { onAdd: (p: Product, buyNow?: boolean) => void }) {
  return (
    <section id="about-products" className="border-y border-border bg-card/40 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="QUALITY & VALUE" title="About Products" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          By Shami Fragrances are long-lasting, high-concentration perfumes filled in
          premium glass bottles. Each fragrance is prepared with imported oils and
          sealed fresh before delivery across Pakistan.
        </p>

        <div className="mt-12 rounded-sm border border-primary/50 bg-background p-8 text-center">
          <p className="text-[11px] tracking-[0.4em] text-muted-foreground">
            SPECIAL OFFER
          </p>
          <h3 className="gold-text mt-3 font-display text-3xl font-semibold">
            Buy Any 3 Bottles
          </h3>
          <p className="mt-2 text-sm text-foreground">
            Get 3 bottles for only <span className="text-primary">Rs. 6,000</span>
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            Offer applies when you order any 3 bottles together. Individual bottle
            prices stay the same.
          </p>
          <a
            href={waLink("I want the 3 bottles for Rs. 6,000 offer")}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-sm bg-primary px-8 py-3 text-[11px] tracking-[0.25em] text-primary-foreground"
          >
            ORDER THE 3-BOTTLE OFFER
          </a>
        </div>

        <div id="testers" className="mt-16">
          <SectionTitle kicker="SEPARATE SET" title="Perfume Testers" />
          <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
            <img
              src={testerSet.image}
              alt="Set of 4 perfume testers, 12ml each"
              loading="lazy"
              width={1600}
              height={1600}
              className="w-full rounded-sm border border-border"
            />
            <div>
              <p className="rounded-sm border border-primary/50 px-3 py-2 text-center text-[11px] tracking-[0.2em] text-primary">
                TESTER SET — NOT AN INDIVIDUAL 30ML BOTTLE
              </p>
              <h3 className="mt-5 font-display text-3xl text-foreground">
                4 Testers – 12ml each
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Try four different fragrances before choosing your full 30ml bottle.
                Sold only as a complete tester set.
              </p>
              <p className="mt-4 font-display text-3xl text-primary">
                {formatPrice(testerSet.price)}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => onAdd(testerSet)}
                  className="rounded-sm border border-primary/60 px-6 py-3 text-[11px] tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => onAdd(testerSet, true)}
                  className="rounded-sm bg-primary px-6 py-3 text-[11px] tracking-[0.2em] text-primary-foreground"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CartDrawer({
  cart,
  total,
  checkout,
  setCheckout,
  setQty,
  onClose,
}: {
  cart: CartLine[];
  total: number;
  checkout: boolean;
  setCheckout: (v: boolean) => void;
  setQty: (id: string, qty: number) => void;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");

  const orderText = (
    `Order from By Shami Fragrances\n\n${cart
      .map((l) => `${l.qty} x ${l.product.name} (${l.product.size}) - ${formatPrice(l.product.price * l.qty)}`)
      .join("\n")}\n\nTotal: ${formatPrice(total)}\nPayment: ${payment}\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70">
      <button aria-label="Close cart" className="flex-1" onClick={onClose} />
      <aside className="flex h-full w-full max-w-md flex-col border-l border-border bg-card">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="font-display text-2xl text-card-foreground">
            {checkout ? "Checkout" : "Your Cart"}
          </h2>
          <button onClick={onClose} className="text-sm text-muted-foreground">
            Close
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {cart.length === 0 && (
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
          )}
          {cart.map((l) => (
            <div key={l.product.id} className="flex gap-3 border-b border-border/60 pb-4">
              <img
                src={l.product.image}
                alt={l.product.name}
                loading="lazy"
                width={64}
                height={80}
                className="h-20 w-16 rounded-sm object-cover"
              />
              <div className="flex-1">
                <p className="text-sm text-card-foreground">{l.product.name}</p>
                <p className="text-[11px] tracking-[0.2em] text-muted-foreground">
                  {l.product.size.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-primary">
                  {formatPrice(l.product.price * l.qty)}
                </p>
                <div className="mt-2 flex items-center gap-3 text-sm">
                  <button
                    onClick={() => setQty(l.product.id, l.qty - 1)}
                    className="h-7 w-7 rounded-sm border border-border text-muted-foreground"
                  >
                    -
                  </button>
                  <span>{l.qty}</span>
                  <button
                    onClick={() => setQty(l.product.id, l.qty + 1)}
                    className="h-7 w-7 rounded-sm border border-border text-muted-foreground"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {checkout && cart.length > 0 && (
            <div className="space-y-3 pt-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm"
              />
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Delivery address"
                rows={3}
                className="w-full rounded-sm border border-border bg-background px-3 py-2 text-sm"
              />
              <div>
                <p className="mb-2 text-[11px] tracking-[0.2em] text-muted-foreground">
                  PAYMENT METHOD
                </p>
                {["Cash on Delivery", "Meezan Bank Transfer", "JazzCash"].map((m) => (
                  <label
                    key={m}
                    className="mb-2 flex items-center gap-3 rounded-sm border border-border px-3 py-2 text-sm"
                  >
                    <input
                      type="radio"
                      name="payment"
                      checked={payment === m}
                      onChange={() => setPayment(m)}
                      className="accent-[var(--gold)]"
                    />
                    {m}
                  </label>
                ))}
                <p className="text-xs text-muted-foreground">
                  Account details for bank transfer or JazzCash are shared on WhatsApp
                  once your order is confirmed.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-border p-4">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="font-display text-2xl text-primary">
              {formatPrice(total)}
            </span>
          </div>
          {!checkout ? (
            <button
              disabled={cart.length === 0}
              onClick={() => setCheckout(true)}
              className="w-full rounded-sm bg-primary py-3 text-[11px] tracking-[0.25em] text-primary-foreground disabled:opacity-40"
            >
              PROCEED TO CHECKOUT
            </button>
          ) : (
            <a
              href={waLink(orderText)}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-sm bg-primary py-3 text-center text-[11px] tracking-[0.25em] text-primary-foreground"
            >
              PLACE ORDER ON WHATSAPP
            </a>
          )}
        </div>
      </aside>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-4 py-14 text-center">
      <p className="gold-text font-display text-2xl tracking-[0.15em]">BY SHAMI</p>
      <p className="text-[10px] tracking-[0.4em] text-muted-foreground">FRAGRANCES</p>
      <div className="gold-rule mx-auto my-6 w-40" />
      <p className="text-sm text-muted-foreground">WhatsApp orders</p>
      <div className="mt-2 flex flex-wrap justify-center gap-4">
        {WHATSAPP_NUMBERS.map((n) => (
          <a
            key={n}
            href={`https://wa.me/92${n.slice(1)}`}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            {n}
          </a>
        ))}
      </div>
      <p className="mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} By Shami Fragrances. All rights reserved.
      </p>
    </footer>
  );
}
