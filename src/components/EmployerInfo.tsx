import { Col, Row } from "antd";
import React from "react";
import Divider from "./Divider";

function EmployerInfo({ emploerInfo }: { emploerInfo: any }) {
  return (
    <Row>
      <Col span={12}>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span>Company Name</span>
            <span>{emploerInfo.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Establishment Year</span>
            <span>{emploerInfo.establishmentYear}</span>
          </div>
          <div className="flex justify-between">
            <span>Company Size</span>
            <span>{emploerInfo.companySize}</span>
          </div>
          <div className="flex justify-between">
            <span>Email</span>
            <span>{emploerInfo.email}</span>
          </div>

          <div className="flex justify-between">
            <span>Phone</span>
            <span>{emploerInfo.phone}</span>
          </div>

          <div className="flex justify-between">
            <span>Website</span>
            <span>{emploerInfo.website}</span>
          </div>

          <div className="flex justify-between">
            <span>Address</span>
            <span>{emploerInfo.address}</span>
          </div>
        </div>
      </Col>

      <Col span={24} className="my-3">
        <Divider />
        <h1 className="text-md">
          <b>About</b>
        </h1>

        <span>{emploerInfo.about}</span>
      </Col>
    </Row>
  );
}

export default EmployerInfo;
