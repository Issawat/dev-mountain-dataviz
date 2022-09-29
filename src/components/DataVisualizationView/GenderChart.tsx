import { VictoryPie, VictoryTheme } from "victory";
import { DataShape } from "../../hooks/useData";
type Props = {
  data: DataShape[];
};

function transformGenderData(data: DataShape[]) {
  const totalLength = data?.length ?? 0;
  const totalMale = data?.filter((item) => item.gender === "M")?.length;
  const totalFemale = totalLength ? totalLength - totalMale : 0;
  return [
    {
      x: `Male (${Math.round(totalMale / totalLength) * 100}%)`,
      y: totalMale,
    },
    {
      x: `Female (${Math.round((totalFemale / totalLength) * 100)}%)`,
      y: totalFemale,
    },
  ];
}

export const GenderChart = ({ data }: Props) => {
  const transformedData = transformGenderData(data);
  return (
    <VictoryPie
      colorScale={["navy", "orange"]}
      padAngle={({ datum }) => datum.y}
      data={transformedData}
      innerRadius={10}
      style={{
        labels: {
          fill: "black",
          fontSize: 13,
          fontWeight: "semibold",
        },
      }}
    />
  );
};
