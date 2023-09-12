document.addEventListener("DOMContentLoaded", () => {
    const activityChart = document.getElementById("activityChart").getContext("2d");
    // Initialize an empty data object
    const data = {
        labels: ["Reading", "Coding", "Browsing", "Social Media"],
        datasets: [{
            data: [30, 40, 15, 15], // Update with your data
            backgroundColor: ["#FF5733", "#33FF57", "#339CFF", "#FF33E8"],
        }],
    };
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };
    // Create the initial chart
    const myPieChart = new Chart(activityChart, {
        type: "pie",
        data: data,
        options: chartOptions,
    });
});
