import React, { Component } from "react";
import MoneyChart from "./MoneyChart.jsx";
import Chart from "chart.js";
import moment from "moment";
import getResults from "./scraper.js";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.addButtonClick = this.addButtonClick.bind(this);
        this.deleteButtonClick = this.deleteButtonClick.bind(this);
        this.addData = this.addData.bind(this);
        this.removeData = this.removeData.bind(this);
        this.updateData = this.updateData.bind(this);
        window.moment = moment; // REMOVE
    }

    componentDidMount() {
        var myChart = new Chart(this.canvas, {
            type: "line",
            data: {
                labels: [moment("2019-12-1"), moment("2019-12-2"), moment("2019-12-3")],
                datasets: [
                    {
                        lineTension: 0,
                        label: "Account Balance",
                        data: [12, 19, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)"
                        ]
                    }
                ]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: "time",
                        time: {
                            displayFormats: {
                                "millisecond": "MMM DD",
                                "second": "MMM DD",
                                "minute": "MMM DD",
                                "hour": "MMM DD",
                                "day": "MMM DD",
                                "week": "MMM DD",
                                "month": "MMM DD",
                                "quarter": "MMM DD",
                                "year": "MMM DD",
                            }
                        }
                    }],
                },
            }
        });
        this.myChart = myChart; // REMOVE

        getResults()
            .then(rawData => {
                var data = rawData.map(record => [moment(record[0]), parseFloat(record[7].match(/\$(.*)/)[1].replace(/,/g, ''))]); // time and balance
                console.log(data) // REMOVE
                this.updateData(this.myChart, data);
            });
    }

    addButtonClick() {
        this.addData(this.myChart, "label", this.inputField.value);
    }

    deleteButtonClick() {
        this.removeData(this.myChart);
    }

    addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
    }

    removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    updateData(chart, data) {
        chart.data.labels = data.map(e => e[0]);
        chart.data.datasets[0].data = data.map(e => e[1]);
        chart.update();
    }

    render() {
        return (
            <div className="App">
                <h1> Hello, Book! </h1>
                <input type="text" name="fname" ref={(c) => this.inputField = c} ></input>
                <button onClick={this.addButtonClick}>Add</button>
                <button onClick={this.deleteButtonClick}>Delete</button>
                <MoneyChart ref={canvasRef => this.canvas = canvasRef} />
            </div>
        );
    }
}

export default App;