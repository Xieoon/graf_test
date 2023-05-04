import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {CategoryScale,LineController,LineElement,PointElement,LinearScale,Title} from 'chart.js';
import { Line } from "react-chartjs-2";
import { data } from "./data";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function App() {
const info={
  xInfo:[],
  yInfo:[]
}
data.data.result[0].values.forEach(element => {
  info.xInfo.push(element[0])
  info.yInfo.push(element[1])
});
console.log(info);
  return (
   
      <Line
        datasetIdKey="id"
        data={{
          labels: info.xInfo,
          datasets: [
            {
              id: 1,
              label: "22",
              data: info.yInfo,
            },
            {
              id: 2,
              label: "12",
              data: [3, 2, 1],
            },
          ],
        }}
      />
  );
}

export default App;
