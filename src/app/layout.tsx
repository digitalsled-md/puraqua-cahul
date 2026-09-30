import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://puraqua-cahul.vercel.app"),
  title: "PurAqua — Чистая вода в Кагуле",
  description:
    "PurAqua — центр чистой фильтрованной воды в Кагуле. Налив, газированная вода, доставка 19 л.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-mark.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
