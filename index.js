const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
            {
                barThickness: 4,
                data: [50, 37, 42],
                backgroundColor: "#6672FB",
            },
            {
                barThickness: 4,
                data: [20, 8, 23],
                backgroundColor: "#F8B849",
            },
            {
                barThickness: 4,
                data: [25, 30, 33],
                backgroundColor: "#E8523F",
            },
        ],
    },
    options: {
        tooltips: {
            enabled: false,
        },
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    stacked: true,
                },
            ],
            yAxes: [
                {
                    stacked: true,
                },
            ],
        },
    },
});
