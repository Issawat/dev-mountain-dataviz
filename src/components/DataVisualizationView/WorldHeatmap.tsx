import { Paper, Stack, Title, Text } from "@mantine/core";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { DataShape } from "../../hooks/useData";
import uniq from "lodash/uniq";

type Props = {
  data: DataShape[];
};

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const colorScale = scaleLinear().range(["#ffedea", "#ff5233"] as any);

function transformCountryData(data: DataShape[]) {
  const allCountryCodes = data.map((item) => item.nationalityCountryCode);
  const totalItems = allCountryCodes.length;
  const availableCountryCodes = uniq(allCountryCodes);

  const scaleByCountryCodes = availableCountryCodes.map((cc) => ({
    code: cc,
    scale: allCountryCodes.filter((code) => code === cc).length / totalItems,
  }));
  return scaleByCountryCodes;
}

export const WorldHeatmap = ({ data }: Props) => {
  const scaleByCountryCodes = transformCountryData(data);
  return (
    <Paper shadow="xl" radius="xl" m="sm" p="xl">
      <Stack align="center">
        <Title order={3} variant="gradient" weight="normal">
          Country
        </Title>
        <Text>World wide illustration of employees' country</Text>
        <ComposableMap
          width={1200}
          height={500}
          projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
          }}
        >
          <Sphere stroke="#E4E5E6" strokeWidth={0.5} id="map" fill="#FFFFFF" />
          <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const scale = scaleByCountryCodes.find(
                  (s) => s.code === geo.id
                )?.scale;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      scale
                        ? (colorScale(scale * 5) as unknown as string)
                        : "#F5F4F6"
                    }
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </Stack>
    </Paper>
  );
};
