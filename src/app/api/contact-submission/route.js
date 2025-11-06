import { NextResponse } from "next/server";

async function verifyRecaptchaV2(token, ip) {
  if (!token) {
    return { ok: false, reason: "missing-token" };
  }

  const params = new URLSearchParams();
  params.append("secret", process.env.RECAPTCHA_SECRET_KEY || "");
  params.append("response", token);
  if (ip) params.append("remoteip", ip);

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const data = await res.json().catch(() => ({}));
  return { ok: !!data.success, details: data };
}

export async function POST(request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      undefined;

    const { firstName, lastName, email, message, token } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const captcha = await verifyRecaptchaV2(token, ip);
    if (!captcha.ok) {
      return NextResponse.json(
        { message: "Captcha verification failed", details: captcha.details },
        { status: 400 }
      );
    }

    // TODO: persist to DB / send email here

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
