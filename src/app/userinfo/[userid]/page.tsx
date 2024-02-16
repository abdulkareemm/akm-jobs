"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { message } from "antd";
import PageTitle from "@/components/PageTitle";
import EmployerInfo from "@/components/EmployerInfo";
import EmployeeInfo from "@/components/EmployeeInfo";
import { setLoading } from "@/redux/loader";

function UserInfo() {
  const [userInfo, setUserInfo] = React.useState<any>(null);
  const { userid } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchUserInfo = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get(`/api/users/${userid}`);
      setUserInfo(response.data.data);
    } catch (error: any) {
      message.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  React.useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    userInfo && (
      <div>
        <PageTitle
          title={`${
            userInfo.userType === "employer" ? "Employer" : "Employee"
          } Info`}
        />

        {userInfo.userType === "employer" ? (
          <EmployerInfo employerInfo={userInfo} />
        ) : (
          <EmployeeInfo employeeInfo={userInfo} />
        )}
      </div>
    )
  );
}

export default UserInfo;
