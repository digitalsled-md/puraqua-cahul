# PurAqua — Website

Сайт центра чистой воды **PurAqua** (Кагул, Молдова).

Продажа фильтрованной воды + доставка 19 л.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- next-intl (RU)
- Lucide, React Hook Form + Zod
- Калькулятор стоимости заказа

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000 — редирект на `/ru`.

## Деплой

Готово для Vercel:

```bash
npx vercel
```

## Структура

- `/[locale]` — главная
- `/[locale]/services` — услуги + калькулятор
- `/[locale]/portfolio` — как мы работаем
- `/[locale]/about` — о компании
- `/[locale]/contact` — контакты и заявка

Адаптировано с шаблона A&V Poligraf (Digital Sled).
