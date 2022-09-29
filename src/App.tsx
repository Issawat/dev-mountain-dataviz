import { MantineProvider, Paper, Stack, Title, Text, Box } from "@mantine/core";
import { IconTable, IconChartPie } from "@tabler/icons";
import { DataVisualizationView } from "./components/DataVisualizationView";
import { WorldHeatmap } from "./components/DataVisualizationView/WorldHeatmap";
import { PageHeader } from "./components/PageHeader";
import { TableView } from "./components/TableView";
import { TabView } from "./components/TabView";
import { THEME_CONFIGURATION } from "./constants/theme";
import { useData } from "./hooks/useData";

enum TabCategory {
  DATA_VISUALIZATION_VIEW = "DATA_VISUALIZATION_VIEW",
  TABLE_VIEW = "TABLE_VIEW",
}

const App = () => {
  const dataProps = useData();
  return (
    <MantineProvider theme={THEME_CONFIGURATION}>
      <PageHeader />
      <TabView
        defaultKey={TabCategory.DATA_VISUALIZATION_VIEW}
        tabs={[
          {
            key: TabCategory.DATA_VISUALIZATION_VIEW,
            title: "Visualization",
            icon: IconChartPie,
            children: <DataVisualizationView {...dataProps} />,
          },
          {
            key: TabCategory.TABLE_VIEW,
            title: "Data Table",
            icon: IconTable,
            children: <TableView {...dataProps} />,
          },
        ]}
      />
      <Paper shadow="xl" radius="md" p="md" m="md">
        <Stack align="center">
          <Title order={3} variant="gradient" weight="normal">
            Country
          </Title>
          <Text mb={-100}>Where are the employees come from</Text>
          <WorldHeatmap />
        </Stack>
      </Paper>
    </MantineProvider>
  );
};

export default App;
