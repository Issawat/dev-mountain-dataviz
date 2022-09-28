import { VictoryPie } from "victory";
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
      animate={{ onLoad: { duration: 1000 } }}
      colorScale={["navy", "red"]}
      padAngle={({ datum }) => datum.y}
      data={transformedData}
      innerRadius={100}
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
