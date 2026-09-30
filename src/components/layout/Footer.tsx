"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "@/components/layout/Logo";
import { PHONE_PRIMARY } from "@/lib/images";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact.info");
  const tServices = useTranslations("services");
  const serviceItems = tServices.raw("items") as { id: string; title: string }[];

  const navLinks = [
    { href: "/", label: tNav("home") },
    { href: "/services", label: tNav("services") },
    { href: "/portfolio", label: tNav("portfolio") },
    { href: "/about", label: tNav("about") },
    { href: "/contact", label: tNav("contact") },
    { href: "/privacy", label: "Политика конфиденциальности" },
  ];

  return (
    <footer className="bg-[var(--color-brand)] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo variant="footer" />
            <p className="mt-3 text-sm text-slate-400">{t("tagline")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("navTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("servicesTitle")}
            </h3>
            <ul className="space-y-2 text-sm">
              {serviceItems.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services/${s.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {tContact("title")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="h-4 w-4 shrink-0 mt-0.5 text-sky-300" />
                <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-white">
                  {tContact("phoneValue")}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="h-4 w-4 shrink-0 mt-0.5 text-sky-300" />
                <a href={`mailto:${tContact("emailValue")}`} className="hover:text-white">
                  {tContact("emailValue")}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-sky-300" />
                <span>{tContact("addressValue")}</span>
              </li>
              <li className="flex gap-2">
                <Clock className="h-4 w-4 shrink-0 mt-0.5 text-sky-300" />
                <span>{tContact("hoursValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-slate-500">
          <p>{t("rights")}</p>
          <p>
            {t("madeBy")}{" "}
            <a
              href="https://www.instagram.com/digitalsled.md/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-300 hover:text-white"
            >
              Digital Sled
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
