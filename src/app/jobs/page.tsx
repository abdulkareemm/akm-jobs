"use client"
import PageTitle from '@/components/PageTitle'
import React from 'react'
import {useRouter} from "next/navigation"
import { Button } from 'antd'

const Jobs = () => {
    const router = useRouter()
  return (
    <div>
        <div className='flex justify-between'>
            <PageTitle title="Jobs"/>
            <Button type="primary" onClick={()=>router.push("/jobs/new")}>
              New Job
            </Button>

        </div>
    </div>
  )
}

export default Jobs