import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";
import { formattedNumber } from "/@/utils/stringUtil";


function LineChart({amountYear,dataCurrent,dataLast,growthAmountYear}:{amountYear:number,dataCurrent:number[],dataLast:number[],growthAmountYear:number}) {
  const { Title, Paragraph } = Typography;
  const {options, series} = lineChart(dataCurrent,dataLast)

  return (
    <>
      <div className="linechart">
        <div>
          <Title level={5}>Doanh thu năm nay:{formattedNumber(amountYear)}đ</Title>
          <Paragraph className="lastweek">
            nhiều hơn năm ngoái{" "}
            <span className="bnb2">
              {(growthAmountYear < 0 ? growthAmountYear : "+" + growthAmountYear) + "%"}
            </span>
          </Paragraph>
        </div>
        <div className="sales">
          <ul>
            <li>{<MinusOutlined />} Năm ngoái</li>
            <li>{<MinusOutlined />} Năm nay</li>
          </ul>
        </div>
      </div>

      <ReactApexChart
        className="full-width"
        options={options}
        series={series}
        type="area"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
