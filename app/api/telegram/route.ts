import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram не налаштований" },
      { status: 500 }
    );
  }

  const customer = body.customer;
  const items = body.items ?? [];
  const total = body.total ?? 0;

  const products = items
    .map(
      (item: any) => `
🍰 <b>${item.title}</b>
⚖️ ${item.weight} кг
📦 Кількість: ${item.quantity}
💰 ${item.price * item.quantity} грн`
    )
    .join("\n\n");

  const text = `
🎂 <b>НОВЕ ЗАМОВЛЕННЯ</b>

👤 <b>Клієнт:</b>
${customer.name}

📞 <b>Телефон:</b>
${customer.phone}

📅 <b>Дата:</b>
${customer.date}

🚚 <b>Отримання:</b>
${customer.delivery}

${
  customer.delivery === "Доставка"
    ? `📍 <b>Адреса:</b>\n${customer.address}\n`
    : ""
}

━━━━━━━━━━━━━━

<b>🛒 Замовлення</b>

${products}

━━━━━━━━━━━━━━

💵 <b>Разом:</b>
${total} грн

💬 <b>Побажання:</b>
${customer.comment || "Без коментаря"}
`;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Помилка Telegram" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
  });
}