import React, { Component } from "react";

class MoneyChart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <canvas
                id="chart"
                style={{ width: 800, height: 300 }}
                ref={canvasRef => this.canvas = canvasRef}
            />
        );
    }
}

export default MoneyChart;