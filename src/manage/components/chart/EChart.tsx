
import ReactApexChart from "react-apexcharts";
import { Row, Col, Typography } from "antd";
import eChart from "./configs/eChart";
import { formatCurrency, formattedNumber } from "/@/utils/stringUtil";

function EChart({dataCurrent,viewYear ,amountYear,totalQuantity,totalUser}:{dataCurrent:number[],viewYear:number,amountYear:number,totalQuantity:number,totalUser:number}) {
  const { Title, Paragraph } = Typography;

  const {options,series} = eChart(dataCurrent)

  const items =()=> [
    {
      Title: totalUser,
      user: "Users",
    },
    {
      Title: viewYear,
      user: "Clicks",
    },
    {
      Title: formatCurrency(amountYear),
      user: "Sales",
    },
    {
      Title: totalQuantity,
      user: "Items",
    },
  ];

  return (
    <>
      <div id="chart">
        <ReactApexChart
          className="bar-chart"
          options={options}
          series={series}
          type="bar"
          height={220}
        />
      </div>
      <div className="chart-vistior">
        <Title level={5}>Doanh thu năm nay:{formattedNumber(amountYear)}đ</Title>
        <Paragraph className="lastweek">
        nhiều hơn năm ngoái <span className="bnb2">+30%</span>
        </Paragraph>
        <Paragraph className="lastweek">
          Thống kê năm nay:
        </Paragraph>
        <Row gutter>
          {items().map((v, index) => (
            <Col xs={6} xl={6} sm={6} md={6} key={index}>
              <div className="chart-visitor-count">
                <Title level={4}>{v.Title}</Title>
                <span>{v.user}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default EChart;
