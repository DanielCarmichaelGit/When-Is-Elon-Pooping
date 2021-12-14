const lineChartData = [
  16, 27, 33, 26, 21, 21, 7, 12, 16, 9, 8, 16, 23, 22, 40, 35, 40, 31, 27, 26,
  19, 18, 26, 19,
];

const totalTweets = lineChartData.reduce((acc, tot) => {
        return acc += tot;
    });