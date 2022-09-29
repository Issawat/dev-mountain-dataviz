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
      x: "Male",
      y: totalMale,
    },
    {
      x: "Female",
      y: totalFemale,
    },
  ];
}

export const GenderChart = ({ data }: Props) => {
  const transformedData = transformGenderData(data);
  return (
    <VictoryPie
      colorScale={["navy", "red"]}
      theme={VictoryTheme.material}
      padAngle={({ datum }) => datum.y}
      data={transformedData}
      innerRadius={80}
      style={{
        labels: {
          fill: "black",
          fontSize: 18,
          fontWeight: "semibold",
        },
      }}
    />
  );
};
