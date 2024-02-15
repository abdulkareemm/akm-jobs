"use client";
import JobPostForm from "@/components/JobPostForm";
import PageTitle from "@/components/PageTitle";
import { setLoading } from "@/redux/loader";
import { Button, Form, message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const NewJob = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.post("/api/jobs",values)
        message.success(response.data.message);
        router.push("/jobs")
    } catch (error:any) {
        message.error(error.message)
    } finally {
        dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Post New Job" />
        <Button type="primary" onClick={() => router.back()}>
          Back
        </Button>
      </div>
      <Form layout="vertical" onFinish={onFinish}>
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
