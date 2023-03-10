/**
 * @Description	：index.tsx
 * @Author     	: sagit_zhx
 * @Date       	: 2023-01-21 星期六 20:11:31
 * @FilePath	: jira/src/components/index.tsx
 */
import styled from "@emotion/styled";
import { Button, Spin, Typography } from "antd";
import { DevTools } from "jira-dev-tool";
import React from "react";

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${({ between }) => (between ? "space-between" : undefined)};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}rem`};

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${({ gap }) =>
      gap
        ? Object.is(typeof gap, "number")
          ? `${gap}rem`
          : "2rem"
        : undefined};
  }
`;

const FullPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoading = () => {
  return (
    <FullPage>
      <Spin size={"large"}></Spin>
    </FullPage>
  );
};

export const FullPageErrorFallBack = ({ error }: { error?: Error | null }) => {
  return (
    <FullPage>
      <DevTools></DevTools>
      <ErrorBox error={error}></ErrorBox>
    </FullPage>
  );
};

export const ButtonNoPadding = styled(Button)`
  padding: 0;
`;

/**
 * ts 类型守卫
 * @param error
 * @constructor
 */
const isError = (val: any): val is Error => val?.message;

export const ErrorBox = ({ error }: { error: unknown }) => {
  return isError(error) ? (
    <Typography.Text type={"danger"}>{error?.message}</Typography.Text>
  ) : null;
};
