"use client"
import PageTitle from '@/components/PageTitle'
import React, { useEffect, useState } from 'react'
import {useRouter} from "next/navigation"
import { Button, message ,Table,Tooltip } from 'antd'
import { useDispatch } from 'react-redux'
import { setLoading } from '@/redux/loader'
import axios from 'axios'
import moment from 'moment'

const Jobs = () => {
  const [jobs,setJobs] = useState([])
  console.log(jobs)
  const dispatch = useDispatch()
  const fetchJobs = async()=>{
    try {
      dispatch(setLoading(true));
      const response = await axios.get("/api/jobs")
      setJobs(response.data.data)

      
    } catch (error:any) {
        message.error(error.message)
    }finally{
      dispatch(setLoading(false))
    }
  }
  useEffect(()=>{
    fetchJobs()
  },[])
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Posted On",
      dataIndex: "createdAt",
      render: (text: any) => moment(text).format("DD-MM-YYYY HH:mm:ss"),
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
    },
    {
      title: "Work Mode",
      dataIndex: "workMode",
    },
    {
      title: "Experience",
      dataIndex: "experience",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text: any, record: any) => (
        <div className="flex gap-3">
          <Tooltip title="Delete">
            <i
              className="ri-delete-bin-line"
              // onClick={() => deleteJob(record._id)}
            ></i>
          </Tooltip>
          <Tooltip title="Edit">
            <i
              className="ri-pencil-line"
              onClick={() => router.push(`/jobs/edit/${record._id}`)}
            ></i>
          </Tooltip>
          <Tooltip title="Applications">
            <i
              className="ri-file-list-3-line"
              onClick={() => {
                // setSelectedJob(record);
                // setShowApplications(true);
              }}
            ></i>
          </Tooltip>
        </div>
      ),
    },
  ];
    const router = useRouter()
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Jobs" />
        <Button type="primary" onClick={() => router.push("/jobs/new")}>
          New Job
        </Button>
      </div>
      <div className="my-2">
        <Table columns={columns} dataSource={jobs} />
      </div>
    </div>
  );
}

export default Jobs