"use client";
import React, { useState } from "react";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";

function LayoutProvider ({ children }: { children: React.ReactNode }) {
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
  const pathname = usePathname();
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);

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
                    <div className="flex flex-col">User name</div>
                  )}

                  <i className="ri-logout-box-r-line"></i>
                </div>
              </div>
              <div className="body">{children}</div>
            </div>
          )}
        </ConfigProvider>
      </body>
    </html>
  );
};

export default LayoutProvider;
