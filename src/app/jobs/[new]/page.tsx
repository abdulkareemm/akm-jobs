"use client"
import PageTitle from '@/components/PageTitle';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

const NewJob = () => {
    const router = useRouter()
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title="Post New Job" />
        <Button type="primary" onClick={() => router.back()}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default NewJob