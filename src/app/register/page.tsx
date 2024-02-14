"use client";
import { setLoading } from "@/redux/loader";
import { Button, Form, Radio, message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("/api/users/register", values);
      message.success(response.data.message);
      router.push("/login");
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-5 w-450">
        <h1 className="text-xl ">A K M JOPS Register</h1>
        <hr />
        <Form
          layout="vertical"
          className="flex flex-col gap-3"
          onFinish={onFinish}
        >
          <Form.Item label="Register as " name="userType">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name" name="name">
            <input type="text" className="input" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" className="input" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" className="input" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Register
          </Button>
          <Link href="/login">
            <span className="mt-5">
              Do you have an account? <span>Login</span>
            </span>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
