"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import React, { ReactNode } from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

type Props = {
  children: ReactNode;
};

export default function AppProviders({ children }: Props) {
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        components: {
          Radio: {
            dotSize: 12,
            radioSize: 20,
          },
        },
      }}
    >
      <AntdRegistry>
        <StyleProvider layer>{children}</StyleProvider>
      </AntdRegistry>
    </ConfigProvider>
  );
}
