new Chart("scatterChart", {
  type: "scatter",
  data: {
    datasets: [
      {
        pointRadius: 3,
        pointBackgroundColor: "rgb(0,0,255)",
        data: scatterPlot,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      xAxes: [{ ticks: { min: 0, max: 347 } }],
      yAxes: [{ ticks: { min: 0, max: 24 } }],
    },
    tooltips: {
      enabled: true,
      //mode: "single",
      callbacks: {
        label: function (tooltipItems, data) {
          tooltipItems.yLabel = tooltipItems.value;
          console.log(tooltipItems.yLabel);
          return (
            "Day " +
            tooltipItems.xLabel +
            " at " +
            (tooltipItems.yLabel < 12
              ? (tooltipItems.yLabel ? tooltipItems.yLabel : 12) +
                "AM"
              : (tooltipItems.yLabel - 12
                  ? tooltipItems.yLabel - 12
                  : 12) + "PM")
          );
        },
      },
    },
  },
});