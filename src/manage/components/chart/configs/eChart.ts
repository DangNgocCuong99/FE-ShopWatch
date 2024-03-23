import { ApexOptions } from "apexcharts";
import { formattedNumber } from "/@/utils/stringUtil";

const eChart= (dataCurrent:number[])=>( {
  series: [
    {
      name: "Doanh thu",
      data: dataCurrent,
      color: "#fff",
    },
  ],

  options: {
    chart: {
      type: "bar",
      width: "100%",
      height: "auto",

      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#ccc",
      strokeDashArray: 2,
    },
    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ],
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        align: "right",
        minWidth: 0,
        maxWidth: 160,
        style: {
          colors: "#fff",
        },
      },
    },

    tooltip: {
      y: {
        formatter: function (val:number) {
          return formattedNumber(val) + " đ";
        },
      },
    },
  },
});

export default eChart;
