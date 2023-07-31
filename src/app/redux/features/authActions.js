import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://iboxsmartlockers.com/";

export const userLogin = createAsyncThunk(
  async ({ email, password }, { rejectedWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
      const { data } = await axios.post(
        `${backendUrl}/api/v1/auth/jwt-auth`,
        { email, password },
        config
      );
      localStorage.setItem("token", data.token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectedWithValue(error.response.data.message);
      } else {
        return rejectedWithValue(error.message);
      }
    }
  }
);
