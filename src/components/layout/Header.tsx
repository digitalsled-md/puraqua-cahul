"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/layout/Logo";
import { PHONE_PRIMARY } from "@/lib/images";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const nav = [
    { href: "/", label: t("home") },
    { href: "/services", label: t("services") },
    { href: "/portfolio", label: t("portfolio") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-white/95 backdrop-blur-md border-b border-slate-200 supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-[var(--color-primary)] bg-sky-50"
                    : "text-slate-600 hover:text-[var(--color-brand)] hover:bg-slate-50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-brand)] hover:text-[var(--color-primary)]"
            >
              <Phone className="h-4 w-4" />
              {t("phone")}
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              {t("getQuote")}
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Закрыть меню" : "Открыть меню"}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-100 py-3 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2.5 text-base font-medium rounded-lg",
                  pathname === item.href
                    ? "text-[var(--color-primary)] bg-sky-50"
                    : "text-slate-700 hover:bg-slate-50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="flex items-center gap-2 px-3 py-2.5 text-base font-semibold text-[var(--color-brand)]"
            >
              <Phone className="h-5 w-5" />
              {t("phone")}
            </a>
            <Link
              href="/contact"
              className="block mx-3 mt-2 text-center rounded-full bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white"
            >
              {t("getQuote")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
