"use client";
import { Button, Form, Radio } from "antd";
import Link from "next/link";
import React from "react";

const Login = () => {

  const onFinish = (values: any) => {};
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-5 w-450">
        <h1 className="text-xl ">A K M JOPS Login</h1>
        <hr />
        <Form
          layout="vertical"
          className="flex flex-col gap-3"
          onFinish={onFinish}
        >
          <Form.Item label="Login as " name="userType">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Email" name="email">
            <input type="email" className="input" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <input type="password" className="input" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
          <Link href="/register">
            <span className="mt-5">
              Don't have an account? <span>Register</span>
            </span>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Login;
