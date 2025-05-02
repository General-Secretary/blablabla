import { NextResponse } from "next/server";

export async function POST(req) {
    const { token, role, rememberMe  } = await req.json();

    if (!token || !role) {
        return NextResponse.json({ message: "Token and role required" }, { status: 400 });
    }

    const response = NextResponse.json({ message: "Token and role set successfully" });

    response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        path: "/",
        maxAge: rememberMe ? 60 * 60 * 24 * 30 : undefined,
    });

    response.cookies.set("role", role, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Strict",
        path: "/",
        maxAge: rememberMe ? 60 * 60 * 24 * 30 : undefined,
        });

    return response;
}
