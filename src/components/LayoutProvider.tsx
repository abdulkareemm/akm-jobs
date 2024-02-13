"use client";
import React from "react";
import { ConfigProvider } from "antd";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
};

export default LayoutProvider;
