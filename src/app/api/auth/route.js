import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_APIURL;
    const username = process.env.NEXT_PUBLIC_USERNAME;
    const password = process.env.NEXT_PUBLIC_PASSWORD;
    const apiKeyPrivate = process.env.NEXT_PUBLIC_APIKEYPRIVATE;

    const response = await axios.post(`${apiUrl}api/v1/auth/jwt-auth`, {
      username,
      password,
      apikey_private: apiKeyPrivate
    });

    const { data } = response;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in POST /api/authService:", error.message);
    return NextResponse.error(error.message, { statusCode: 500 });
  }
}
