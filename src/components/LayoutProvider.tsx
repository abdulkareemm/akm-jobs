"use client";
import React, { useEffect, useState } from "react";
import { ConfigProvider, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/loader";
import axios from "axios";
import { setCurrentUser } from "@/redux/userSlice";
import Loader from "./Loader";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState([
    {
      name: "Home",
      path: "/",
      icon: "ri-home-7-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-shield-user-line",
    },
    {
      name: "Applications",
      path: "/applications",
      icon: "ri-file-list-2-line",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "ri-settings-2-line",
    },
    {
      name: "Saved",
      path: "/saved",
      icon: "ri-save-line",
    },
  ]);
  const { currentUser } = useSelector((state: any) => state.users);
  const { loading } = useSelector((state: any) => state.loader);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);
  const getCurrentUser = async () => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get("/api/users/currentuser");
      const isEmployer = response.data.data.userType === "employer";

      if (isEmployer) {
        const tempMenuItems: any = menuItems;
        tempMenuItems[2].name = "Posted Jobs";
        tempMenuItems[2].path = "/jobs";
        setMenuItems(tempMenuItems);
      }

      dispatch(setCurrentUser(response.data.data));
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
      message.error("Please clear your cookies and try again");
    } finally {
      dispatch(setLoading(false));
    }
  };
  const onLogout = async () => {
    try {
      dispatch(setLoading(true));
      await axios.post("/api/users/logout");
      message.success("Logged out successfully");
      dispatch(setCurrentUser(null));
      router.push("/login");
    } catch (error: any) {
      message.error(error.response.data.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };
  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/register" && !currentUser) {
      getCurrentUser();
    }
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#213555",
            },
          }}
        >
          {loading && <Loader />}
          {pathname === "/login" || pathname === "/register" ? (
            <div>{children}</div>
          ) : (
            <div className="layout-parent">
              <div className="sidebar ">
                <div className="logo">
                  {isSidebarExpanded && <h1>AKMJOBS</h1>}

                  {!isSidebarExpanded && (
                    <i
                      className="ri-menu-2-line"
                      onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                    ></i>
                  )}
                  {isSidebarExpanded && (
                    <i
                      className="ri-close-line"
                      onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
                    ></i>
                  )}
                </div>
                <div className="menu-items">
                  {menuItems.map((item, index) => {
                    const isActive = pathname === item.path;
                    return (
                      <div
                        key={index}
                        className={`menu-item ${
                          isActive ? "active-menu-item" : ""
                        }`}
                        style={{
                          justifyContent: isSidebarExpanded
                            ? "flex-start"
                            : "center",
                        }}
                      >
                        <i className={item.icon}></i>
                        <span>{isSidebarExpanded && item.name}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="user-info flex justify-between items-center">
                  {isSidebarExpanded && (
                    <div className="flex flex-col">
                      <span >{currentUser?.name}</span>
                    </div>
                  )}

                  <i className="ri-logout-box-r-line" onClick={onLogout}></i>
                </div>
              </div>
              <div className="body">{children}</div>
            </div>
          )}
        </ConfigProvider>
      </body>
    </html>
  );
}

export default LayoutProvider;
