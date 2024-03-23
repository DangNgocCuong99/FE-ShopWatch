import dayjs from "dayjs";
import { formattedNumber } from "/@/utils/stringUtil";

const lineChart = (current:number[] , last:number[])=> ({
  series: [
    {
      name: dayjs().year(),
      data: current,
      offsetY: 0,
    },
    {
      name: dayjs().year() - 1,
      data: last,
      offsetY: 0,
    },
  ],

  options: {
    chart: {
      width: "100%",
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: "#8c8c8c",
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: "#8c8c8c",
        },
      },
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
    },

    tooltip: {
      y: {
        formatter: function (val:number) {
          return formattedNumber(val) + " đ";;
        },
      },
    },
  },
});

export default lineChart;
