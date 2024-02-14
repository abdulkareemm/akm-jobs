"use client";
import { Button, message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      const response = await axios.get("/api/users/currentuser");
      setUser(response.data.data);
    } catch (error: any) {
      message.error(error.response.data.message || error.message);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <main>
      <Button type="primary"> Pr</Button>
    </main>
  );
}
