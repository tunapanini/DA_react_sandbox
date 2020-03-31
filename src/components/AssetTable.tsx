import * as React from "react";

export interface Asset {
  id: string;
  collateral: number;
  loan: number;
  invest: number;
  available: number;
  icon: string;
}

interface AssetTableProps {
  assets: Asset[];
}

class AssetTable extends React.Component<AssetTableProps> {
  getTotalOfAsset(asset: Asset) {
    return asset.collateral + asset.loan + asset.invest + asset.available;
  }
  render() {
    return (
      <div
        className="AssetTable box-container"
        style={{
          flexDirection: "column",
          alignItems: "stretch",
          alignContent: "stretch"
        }}
      >
        <div className="box">
          <table className="table" style={{ height: "100%", width: "100%" }}>
            <thead className="text-primary">
              <tr>
                <td> </td>
                <td>COLLATERAL</td>
                <td>LOAN</td>
                <td>INVEST</td>
                <td>AVAILABLE</td>
              </tr>
            </thead>
            <tbody>
              {this.props.assets.map(asset => (
                <tr>
                  <td>{asset.id}</td>
                  <td>
                    <strong className={`color-${asset.id.toLowerCase()}`}>
                      {asset.icon}
                    </strong>{" "}
                    {asset.collateral}
                  </td>
                  <td>
                    <strong className={`color-${asset.id.toLowerCase()}`}>
                      {asset.icon}
                    </strong>{" "}
                    {asset.loan}
                  </td>
                  <td>
                    <strong className={`color-${asset.id.toLowerCase()}`}>
                      {asset.icon}
                    </strong>{" "}
                    {asset.invest}
                  </td>
                  <td>
                    <strong className={`color-${asset.id.toLowerCase()}`}>
                      {asset.icon}
                    </strong>{" "}
                    {asset.available}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div className="box" style={{ display: "flex" }}>
          <strong className="text-center" style={{ flex: 1 }}>
            Total
          </strong>
          {this.props.assets.map(asset => (
            <span className="text-center" style={{ flex: 2 }}>
              <strong className={`color-${asset.id.toLowerCase()}`}>
                {asset.icon}
              </strong>{" "}
              {this.getTotalOfAsset(asset)}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default AssetTable;
