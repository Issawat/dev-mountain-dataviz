import {
  Text,
  Paper,
  SimpleGrid,
  Stack,
  Title,
  Center,
  Loader,
} from "@mantine/core";
import React from "react";
import { DataComponentProps } from "../../hooks/useData";
import { AgeChart } from "./AgeChart";
import { GenderChart } from "./GenderChart";
import { HiringChart } from "./HiringChart";
import { WorldHeatmap } from "./WorldHeatmap";

type DataVizItem = {
  title: string;
  description: string;
  component: React.ReactNode;
};

const MainContainer = ({ items }: { items: DataVizItem[] }) => {
  return (
    <SimpleGrid
      cols={3}
      spacing="lg"
      mb="lg"
      breakpoints={[{ maxWidth: 800, cols: 1, spacing: "sm" }]}
    >
      {items.map(({ title, description, component }) => (
        <Paper shadow="sm" radius="xl" p="xl">
          <Stack align="center">
            <Title order={3} variant="gradient" weight="normal">
              {title}
            </Title>
            <Text align="center">{description}</Text>
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
  if (isLoading)
    return (
      <Center>
        <Loader mt={10} size="xl" />;
      </Center>
    );
  return (
    <>
      <MainContainer
        items={[
          {
            title: "Gender",
            description: "The comparison of the employee's gender status",
            component: <GenderChart data={data} />,
          },
          {
            title: "Hiring",
            description: "The hiring rate for every 10 years",
            component: <HiringChart data={data} />,
          },
          {
            title: "Age",
            description: "How old they are?",
            component: <AgeChart data={data} />,
          },
        ]}
      />
      <WorldHeatmap data={data} />
    </>
  );
};
