import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_APIURL;
    const { username, password, tokenAuth } = await req.json();

    const response = await axios.post(
      `${apiUrl}api/v1/auth/service-user-jwt-auth`,
      {
        username,
        password
      },
      {
        headers: {
          Authorization: `Bearer ${tokenAuth}`
        }
      }
    );

    const { data } = response;
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in POST /api/authService:", error.message);
    return NextResponse.error(error.message, { statusCode: 500 });
  }
}
