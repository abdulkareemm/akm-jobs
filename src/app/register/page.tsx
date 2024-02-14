"use client"
import { Button, Form, Radio } from 'antd';
import Link from 'next/link';
import React from 'react'

const Register = () => {
  const onFinish = (values : any)=>{

  }
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
          <Form.Item label="Username" name="username">
            <input type="text" className="input" />
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
          <Link href="/login">
            <span className="mt-5">
              Do you have an account? <span>Login</span>
            </span>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Register