import { VictoryPie } from "victory";
import { DataShape } from "../../hooks/useData";
type Props = {
  data: DataShape[];
};

function transformGenderData(data: DataShape[]) {
  const totalLength = data?.length ?? 0;
  const totalMale = data?.filter((item) => item.gender === "M")?.length;
  const totalFemale = totalLength ? totalLength - totalMale : 0;
  const percentFemale = Math.round((totalFemale / totalLength) * 100);
  return [
    {
      x: `Male (${100 - percentFemale}%)`,
      y: totalMale,
    },
    {
      x: `Female (${percentFemale}%)`,
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
