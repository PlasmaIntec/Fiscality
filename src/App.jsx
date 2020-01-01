import React, { Component } from "react";
import MoneyChart from "./MoneyChart.jsx";
import Chart from "chart.js";
import getResults from "./scraper.js";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.addButtonClick = this.addButtonClick.bind(this);
        this.deleteButtonClick = this.deleteButtonClick.bind(this);
        this.addData = this.addData.bind(this);
        this.removeData = this.removeData.bind(this);
        console.log(getResults());
    }

    componentDidMount() {
        var myChart = new Chart(this.canvas, {
            type: "bar",
            data: {
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                    {
                        label: "# of Likes",
                        data: [12, 19, 3],
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)"
                        ]
                    }
                ]
            }
        });
        this.myChart = myChart;
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