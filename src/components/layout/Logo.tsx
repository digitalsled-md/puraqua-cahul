import { Link } from "@/i18n/routing";

type Props = {
  variant?: "header" | "footer";
  className?: string;
};

export default function Logo({ variant = "header", className = "" }: Props) {
  const isFooter = variant === "footer";

  return (
    <Link href="/" className={`flex items-center gap-2.5 shrink-0 group ${className}`}>
      <span
        className={`relative flex items-center justify-center rounded-full bg-[var(--color-brand)] text-white overflow-hidden shrink-0 ${
          isFooter ? "h-10 w-10" : "h-9 w-9 sm:h-10 sm:w-10"
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 64 64" className="h-full w-full p-1.5" aria-hidden>
          {/* water drop */}
          <path
            d="M32 10 C32 10 18 28 18 38 C18 46 24 52 32 52 C40 52 46 46 46 38 C46 28 32 10 32 10 Z"
            fill="#fff"
            opacity="0.95"
          />
          <path
            d="M28 36 C28 36 30 42 36 40"
            stroke="var(--color-brand)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>

      <span className="flex flex-col leading-tight min-w-0">
        <span
          className={`font-bold tracking-tight ${
            isFooter ? "text-white text-base" : "text-[var(--color-brand)] text-base sm:text-lg"
          }`}
        >
          PurAqua
        </span>
        <span
          className={`text-[10px] sm:text-xs font-medium tracking-wide ${
            isFooter ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Кагул · чистая вода
        </span>
      </span>
    </Link>
  );
}
