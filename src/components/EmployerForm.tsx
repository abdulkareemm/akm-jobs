"use client";
import { Col, Form, Row } from "antd";
import React from "react";

function EmployerForm() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item label="Name" name="name">
            <input type="text" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Email" name="email">
            <input type="email" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Phone" name="phone">
            <input type="text" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Est Year" name="establishmentYear">
            <input type="number" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Website" name="website">
            <input type="text" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="No Of Employees" name="companySize">
            <input type="number" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="About" name="about">
            <textarea />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Address" name="address">
            <textarea />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default EmployerForm;
