"use client";

import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL, PHONE_PRIMARY } from "@/lib/images";

export default function MobileFab() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2 md:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE_PRIMARY}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg hover:bg-[var(--color-primary-dark)]"
        aria-label="Позвонить"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
