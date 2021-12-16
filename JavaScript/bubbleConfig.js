const data = {
    datasets: [{
      label: 'Tweet',
      data: bubbleChartData,
      backgroundColor: 'rgb(255, 99, 132, 0.7)',
      borderWidth: 1,
      hoverRadius: 5,
      hoverBorderWidth: 3,
      hoverBackgroundColor: 'brown',
      hoverBorderColor: 'brown',
    },
]
};

var ctx = document.getElementById("bubble-chart");

new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: data,
    options: {
        legend: {
            display: false,
        }
    }
});