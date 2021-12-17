const xValues = [
  "12:00 a.m.",
  "1:00 a.m.",
  "2:00 a.m.",
  "3:00 a.m.",
  "4:00 a.m.",
  "5:00 a.m.",
  "6:00 a.m.",
  "7:00 a.m.",
  "8:00 a.m.",
  "9:00 a.m.",
  "10:00 a.m.",
  "11:00 a.m.",
  "12:00 p.m.",
  "1:00 p.m.",
  "2:00 p.m.",
  "3:00 p.m.",
  "4:00 p.m.",
  "5:00 p.m.",
  "6:00 p.m.",
  "7:00 p.m.",
  "8:00 p.m.",
  "9:00 p.m.",
  "10:00 p.m.",
  "11:00 p.m.",
];
const yValues = lineChartData;
//var yValues = [20, 25, 13, 19, 19, 19, 15, 21, 24, 24, 25, 22, 33, 32, 21, 23, 23, 12, 15, 21, 34, 31, 17];
new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        pointRadius: 8,
        fill: false,
        lineTension: 0.4,
        backgroundColor: "rgba(255,255,255,1.0)",
        borderColor: "rgba(0,0,0,1)",
        data: yValues,
        pointHoverRadius: 15,
        pointHoverBackgroundColor: "black",
        pointHoverBorderColor: "white",
        pointHoverBorderWidth: 2,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 0, max: 45 } }],
    },
    tooltips: {
      enabled: true,
      callbacks: {
        label: function (tooltipItems, data) {
          return tooltipItems.yLabel + " Tweets";
        },
      },
    },
  },
});
