import React, { Component } from "react";
import ReactDOM from "react-dom";
import Chart from "chart.js";

class Layout extends Component {
    constructor(props) {
        super(props);
    }
  
    componentDidMount() {
        var el = ReactDOM.findDOMNode(this);

        var myChart = new Chart(el, {
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
    }

    render() {
        return (
            <canvas
                id="chart"
                style={{ width: 800, height: 300 }}
            />
        );
    }
}

export default Layout;