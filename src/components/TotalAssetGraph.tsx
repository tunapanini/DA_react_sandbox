import * as React from "react";
import "../styles.css";
import Doughnut from "react-chartjs-2";

const textIndent = {
  paddingLeft: "12px"
};

interface TotalAssetGraphProps {
  total: number;
  available: number;
  loan: number;
  unused: number;
  lockup: number;
  collateral: number;
  invest: number;
}

class TotalAssetGraph extends React.Component<TotalAssetGraphProps> {
  state = {
    chartData: {
      labels: ["Available", "Lock-up"],
      datasets: [
        {
          data: [this.props.available, this.props.lockup],
          backgroundColor: ["#ffffff", "#1b3b98"],
          borderWidth: 0,
          hoverBorderWidth: 0,
          weight: 10
        }
      ]
    }
  };

  render() {
    return (
      <div className="TotalAssetGraph box-container">
        <div
          className="box"
          style={{
            flex: 5
          }}
        >
          <div className="canvas-container">
            <Doughnut
              data={this.state.chartData}
              options={{
                title: {
                  display: false
                },
                legend: {
                  display: false
                },
                cutoutPercentage: 88,
                responsive: true,
                maintainAspectRatio: true
              }}
            />
          </div>
        </div>
        <br />

        <div className="asset" style={{ flexDirection: "column", flex: 7 }}>
          <h3 className="text-left" style={{ color: "#fff", fontWeight: 500 }}>
            $ {this.props.total}
          </h3>
          <div className="box-container">
            <span className="white dot" />
            <div style={{ flex: 1 }}>
              <div className="box-container">
                <strong className="text-left" style={{ flex: 1 }}>
                  Available
                </strong>
                <strong className="text-right" style={{ flex: 1 }}>
                  ${this.props.available}
                </strong>
              </div>
              <div className="box-container">
                <span className="text-left" style={{ flex: 1, ...textIndent }}>
                  Loan
                </span>
                <span className="text-right" style={{ flex: 1 }}>
                  ${this.props.loan}
                </span>
              </div>
              <div className="box-container">
                <span className="text-left" style={{ flex: 1, ...textIndent }}>
                  Unused
                </span>
                <span className="text-right" style={{ flex: 1 }}>
                  ${this.props.unused}
                </span>
              </div>
            </div>
          </div>
          <br />
          <div className="box-container">
            <span className="blue dot" />
            <div style={{ flex: 1 }}>
              <div className="box-container">
                <strong className="text-left" style={{ flex: 1 }}>
                  Lock-Up
                </strong>
                <strong className="text-right" style={{ flex: 1 }}>
                  ${this.props.lockup}
                </strong>
              </div>
              <div className="box-container">
                <span className="text-left" style={{ flex: 1, ...textIndent }}>
                  Collateral
                </span>
                <span className="text-right" style={{ flex: 1 }}>
                  ${this.props.collateral}
                </span>
              </div>
              <div className="box-container">
                <span className="text-left" style={{ flex: 1, ...textIndent }}>
                  Invest
                </span>
                <span className="text-right" style={{ flex: 1 }}>
                  ${this.props.invest}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalAssetGraph;
