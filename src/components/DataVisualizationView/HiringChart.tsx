import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { DataShape } from "../../hooks/useData";

type Props = {
  data: DataShape[];
};

function transformHiringData(data: DataShape[]) {
  const hiringYears = data.map((item) => Number(item.hiredDate.split("-")[0]));
  const hiringData = [
    {
      x: "2000's",
      y: hiringYears.filter((year) => year >= 2000 && year < 2010).length,
    },
    {
      x: "2010's",
      y: hiringYears.filter((year) => year >= 2010 && year < 2020).length,
    },
    { x: "2020's", y: hiringYears.filter((year) => year >= 2020).length },
  ];
  return hiringData;
}

export const HiringChart = ({ data }: Props) => {
  const hiringData = transformHiringData(data);
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" },
        }}
        data={hiringData}
      />
    </VictoryChart>
  );
};
