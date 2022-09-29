import { Paper, Stack, Title, Text } from "@mantine/core";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

export const WorldHeatmap = () => {
  return (
    <Paper shadow="xl" radius="xl" m="sm" p="xl">
      <Stack align="center">
        <Title order={3} variant="gradient" weight="normal">
          Country
        </Title>
        <Text>World wide illustration of employees' country</Text>
        <ComposableMap width={1200} height={500}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </Stack>
    </Paper>
  );
};
