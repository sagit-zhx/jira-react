/**
 * @Description	：index.tsx
 * @Author     	: sagit_zhx
 * @Date       	: 2023-01-21 星期六 20:50:01
 * @FilePath	: jira/src/screens/project-list/index.tsx
 */
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState } from "react";
import { useDebounce, useProjects, useUsers } from "hook";
import styled from "@emotion/styled";
import { Typography } from "antd";

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const { isLoading, error, data: list } = useProjects(useDebounce(param, 500));
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>

      <SearchPanel
        users={users || []}
        param={param}
        setParam={setParam}
      ></SearchPanel>

      {error && (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      )}

      <List
        loading={isLoading}
        dataSource={list || []}
        users={users || []}
      ></List>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 3.2rem;
`;
