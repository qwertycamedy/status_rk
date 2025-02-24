import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    const TELEGRAM_BOT_TOKEN = "ВАШ_ТОКЕН";
    const TELEGRAM_CHAT_ID = "ВАШ_CHAT_ID";

    const message = `
    📝 Новая заявка:
    👤 Имя: ${name}
    📧 E-mail: ${email}
    📞 Телефон: ${phone}
    `;

    const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message }),
    });

    if (!response.ok) throw new Error("Ошибка отправки в Telegram");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
