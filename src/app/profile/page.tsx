"use client"
import EmployeeForm from '@/components/EmployeeForm';
import EmployerForm from '@/components/EmployerForm';
import PageTitle from '@/components/PageTitle';
import { Form } from 'antd';
import React from 'react'
import {useSelector} from "react-redux"

const Profile = () => {
  const {currentUser} = useSelector((state: any) => state.users);
  const onFinish = () => {}
  return (
    <div>
      <PageTitle title="Profile"/>
      <Form layout='vertical'>
        {currentUser?.userType ==="employer" ? (
          <EmployerForm/>
        ) : (
          <EmployeeForm/>
        )}
      </Form>
    </div>
  )
}

export default Profile