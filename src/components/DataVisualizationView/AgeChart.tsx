import { VictoryChart, VictoryHistogram } from "victory";
import { DataShape } from "../../hooks/useData";
type Props = {
  data: DataShape[];
};

export const AgeChart = ({ data }: Props) => {
  return (
    <VictoryChart domainPadding={10}>
      <VictoryHistogram
        style={{ data: { fill: "#c43a31" } }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 },
        ]}
      />
    </VictoryChart>
  );
};
