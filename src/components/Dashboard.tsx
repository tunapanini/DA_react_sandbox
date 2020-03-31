import * as React from "react";
import TotalAssetGraph from "./TotalAssetGraph";
import AssetTable from "./AssetTable";

interface CardProps {
  header?: string;
  child: JSX.Element;
}

const Card = ({ header, child }: CardProps) => (
  <div className="card">
    {header ? <div className="card-header">{header}</div> : null}
    <div className="card-body">{child}</div>
  </div>
);

const TotalCollateralStatus = () => {
  return (
    <div className="TotalCollateral">
      <p>TotalCollateral~</p>
    </div>
  );
};

const UnRealizedProfit = () => {
  return (
    <div className="UnRealizedProfit">
      <p>UnRealizedProfit~</p>
    </div>
  );
};

const UnpaidInterest = () => {
  return (
    <div className="UnpaidInterest">
      <p>UnpaidInterest~</p>
    </div>
  );
};

const LoanInProgress = () => {
  return (
    <div className="LoanInProgress">
      <p>LoanInProgress~</p>
    </div>
  );
};

const InvestInProgress = () => {
  return (
    <div className="InvestInProgress">
      <p>InvestInProgress~</p>
    </div>
  );
};

const TotalAccumlativeGraph = () => {
  return (
    <div className="TotalAccumlativeGraph">
      <p>TotalAccumlativeGraph~</p>
    </div>
  );
};

class Dashboard extends React.Component {
  state = {
    assets: [
      {
        id: "BTC",
        available: 4,
        loan: 2,
        collateral: 1,
        invest: 3,
        icon: "₿"
      },
      {
        id: "USDT",
        available: 8,
        loan: 6,
        collateral: 5,
        invest: 7,
        icon: "₮"
      }
    ]
  };

  getTotalSumOfAssets() {
    return this.getTotalAvailable() + this.getTotalLockup();
  }

  getTotalAvailable() {
    return this.state.assets.reduce(
      (previousValue, asset) => previousValue + asset.available,
      0
    );
  }

  getTotalLoan() {
    return this.state.assets.reduce(
      (previousValue, asset) => previousValue + asset.loan,
      0
    );
  }

  getTotalUnused() {
    return this.getTotalAvailable() - this.getTotalLoan();
  }

  getTotalLockup() {
    return this.getTotalCollateral() + this.getTotalInvest();
  }

  getTotalCollateral() {
    return this.state.assets.reduce(
      (previousValue, asset) => previousValue + asset.collateral,
      0
    );
  }

  getTotalInvest() {
    return this.state.assets.reduce(
      (previousValue, asset) => previousValue + asset.invest,
      0
    );
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="box-container row">
          <div className="box column">
            <Card
              header="Total Asset Graph"
              child={
                <TotalAssetGraph
                  total={this.getTotalSumOfAssets()}
                  available={this.getTotalAvailable()}
                  loan={this.getTotalLoan()}
                  unused={this.getTotalUnused()}
                  lockup={this.getTotalLockup()}
                  collateral={this.getTotalCollateral()}
                  invest={this.getTotalInvest()}
                />
              }
            />
          </div>
          <div className="box column">
            <Card
              header="Asset Table"
              child={<AssetTable assets={this.state.assets} />}
            />
          </div>
        </div>
        <div className="box-container row">
          <div className="box column">
            <Card child={<TotalCollateralStatus />} />
          </div>
        </div>
        <div className="box-container row">
          <div className="box column">
            <Card child={<UnRealizedProfit />} />
          </div>
          <div className="box column">
            <Card child={<UnpaidInterest />} />
          </div>
          <div className="box column">
            <Card child={<LoanInProgress />} />
          </div>
          <div className="box column">
            <Card child={<InvestInProgress />} />
          </div>
        </div>

        <div className="box">
          <Card
            header="Total Accumlative Graph"
            child={<TotalAccumlativeGraph />}
          />
        </div>
      </div>
    );
  }
}
export default Dashboard;
