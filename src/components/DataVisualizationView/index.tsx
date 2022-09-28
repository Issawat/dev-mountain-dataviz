import { Text, Paper, SimpleGrid, Stack, Title } from "@mantine/core";
import React from "react";
import { DataComponentProps } from "../../hooks/useData";
import { GenderChart } from "./GenderChart";

type DataVizItem = {
  title: string;
  description: string;
  component: React.ReactNode;
};

const MainContainer = ({ items }: { items: DataVizItem[] }) => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1000, cols: 2, spacing: "md" },
        { maxWidth: 600, cols: 1, spacing: "sm" },
      ]}
    >
      {items.map(({ title, description, component }) => (
        <Paper shadow="xl" radius="md" p="xl">
          <Stack align="center">
            <Title order={3} variant="gradient" weight="normal">
              {title}
            </Title>
            <Text>{description}</Text>
            {component}
          </Stack>
        </Paper>
      ))}
    </SimpleGrid>
  );
};

export const DataVisualizationView = ({
  data,
  isLoading,
}: DataComponentProps) => {
  return (
    <MainContainer
      items={[
        {
          title: "Gender",
          description: "The comparison of the employee's gender status",
          component: <GenderChart data={data} />,
        },
        {
          title: "Gender",
          description: "The comparison of the employee's gender status",
          component: <GenderChart data={data} />,
        },
        {
          title: "Gender",
          description: "The comparison of the employee's gender status",
          component: <GenderChart data={data} />,
        },
        {
          title: "Gender",
          description: "The comparison of the employee's gender status",
          component: <GenderChart data={data} />,
        },
        {
          title: "Gender",
          description: "The comparison of the employee's gender status",
          component: <GenderChart data={data} />,
        },
        {
          title: "Gender",
          description: "The comparison of the employee's gender status",
          component: <GenderChart data={data} />,
        },
      ]}
    />
  );
};
