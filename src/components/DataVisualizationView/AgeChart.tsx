import { VictoryChart, VictoryHistogram } from "victory";
import { DataShape } from "../../hooks/useData";
type Props = {
  data: DataShape[];
};

function transformAgeData(data: DataShape[]) {
  const currentYear = new Date().getFullYear();
  return data.map((item) => ({
    x: currentYear - Number(item.birthDate.split("-")[0]),
  }));
}

export const AgeChart = ({ data }: Props) => {
  const ageData = transformAgeData(data);
  return (
    <VictoryChart domainPadding={10} height={430}>
      <VictoryHistogram
        style={{ data: { fill: "#c43a31" } }}
        data={ageData}
      />
    </VictoryChart>
  );
};
