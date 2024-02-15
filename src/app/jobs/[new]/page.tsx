"use client";
import JobPostForm from "@/components/JobPostForm";
import PageTitle from "@/components/PageTitle";
import { Button, Form } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const NewJob = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Post New Job" />
        <Button type="primary" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <Form layout="vertical">
        <JobPostForm />
        <div className="flex justify-end items-center gap-3 my-3">
          <Button type="default" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Post Job
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewJob;
