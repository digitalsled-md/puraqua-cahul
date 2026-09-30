"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Calculator } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/images";

type ServiceType = "filtered" | "sparkling" | "delivery19" | "subscription";

const PRICES = {
  filteredPerL: 2,
  sparklingPerL: 3,
  delivery19: 45,
  subscription19: 40,
  bottleDeposit: 80,
};

export default function WaterCalculator({
  defaultService = "delivery19",
}: {
  defaultService?: ServiceType;
}) {
  const t = useTranslations("calculator");
  const [service, setService] = useState<ServiceType>(defaultService);
  const [liters, setLiters] = useState(19);
  const [bottles, setBottles] = useState(2);
  const [needBottle, setNeedBottle] = useState(false);

  const price = useMemo(() => {
    let total = 0;
    if (service === "filtered") {
      total = Math.round(Math.max(1, liters) * PRICES.filteredPerL);
    } else if (service === "sparkling") {
      total = Math.round(Math.max(1, liters) * PRICES.sparklingPerL);
    } else if (service === "delivery19") {
      total = Math.max(1, bottles) * PRICES.delivery19;
      if (needBottle) total += Math.max(1, bottles) * PRICES.bottleDeposit;
    } else if (service === "subscription") {
      total = Math.max(1, bottles) * PRICES.subscription19;
      if (needBottle) total += Math.max(1, bottles) * PRICES.bottleDeposit;
    }
    return total;
  }, [service, liters, bottles, needBottle]);

  const services: { id: ServiceType; label: string }[] = [
    { id: "filtered", label: t("filteredWater") },
    { id: "sparkling", label: t("sparkling") },
    { id: "delivery19", label: t("delivery19") },
    { id: "subscription", label: t("subscription") },
  ];

  const isVolume = service === "filtered" || service === "sparkling";

  const orderHint = useMemo(() => {
    if (service === "filtered") return `Налив негазированной: ${liters} л`;
    if (service === "sparkling") return `Налив газированной: ${liters} л`;
    if (service === "delivery19")
      return `Доставка 19 л × ${bottles}${needBottle ? " + тара" : ""}`;
    return `Подписка 19 л × ${bottles}${needBottle ? " + тара" : ""}`;
  }, [service, liters, bottles, needBottle]);

  const waUrl =
    WHATSAPP_URL.split("?text=")[0] +
    "?text=" +
    encodeURIComponent(
      `Здравствуйте! Расчёт с сайта PurAqua:\n${orderHint}\nОриентир: от ${price} лей\nХочу уточнить и заказать.`
    );

  return (
    <div className="rounded-2xl border border-sky-100 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-1">
        <Calculator className="h-5 w-5 text-[var(--color-primary)]" />
        <h2 className="text-lg font-bold text-[var(--color-brand)]">{t("title")}</h2>
      </div>
      <p className="text-sm text-slate-500 mb-5">{t("subtitle")}</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            {t("service")}
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value as ServiceType)}
            className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm bg-white focus:border-[var(--color-primary)] focus:ring-2 focus:ring-sky-100 outline-none"
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {isVolume ? (
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              {t("quantity")} ({t("liters")})
            </label>
            <input
              type="number"
              min={1}
              max={200}
              value={liters}
              onChange={(e) => setLiters(Number(e.target.value) || 1)}
              className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-[var(--color-primary)] focus:ring-2 focus:ring-sky-100 outline-none"
            />
            <div className="mt-2 flex flex-wrap gap-2">
              {[5, 10, 19, 38].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setLiters(n)}
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    liters === n
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {n} л
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                {t("quantity")} ({t("bottles")})
              </label>
              <input
                type="number"
                min={1}
                max={20}
                value={bottles}
                onChange={(e) => setBottles(Number(e.target.value) || 1)}
                className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-[var(--color-primary)] focus:ring-2 focus:ring-sky-100 outline-none"
              />
              <div className="mt-2 flex flex-wrap gap-2">
                {[1, 2, 3, 4, 6].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setBottles(n)}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      bottles === n
                        ? "bg-[var(--color-primary)] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={needBottle}
                onChange={(e) => setNeedBottle(e.target.checked)}
                className="rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              />
              {t("needBottle")} (+{PRICES.bottleDeposit} {t("lei")} / шт)
            </label>
          </>
        )}

        <div className="rounded-xl bg-[var(--color-surface)] border border-sky-100 p-4">
          <div className="text-sm text-slate-500">{t("result")}</div>
          <div className="mt-1 text-2xl font-bold text-[var(--color-brand)]">
            {t("from")} {price} {t("lei")}
          </div>
          <p className="mt-2 text-xs text-slate-500 leading-relaxed">{t("note")}</p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            {t("cta")}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            {t("ctaForm")}
          </Link>
        </div>
      </div>
    </div>
  );
}
