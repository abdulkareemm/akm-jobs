"use client";
import { Col, Form, Row } from "antd";
import React from "react";

const EmployeeForm = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Required" }]}
          >
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Required" }]}
          >
            <input type="email" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Required" }]}
          >
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Carrier Objective"
            name="carrierobjective"
            rules={[{ required: true, message: "Required" }]}
          >
            <textarea/>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

export default EmployeeForm;
