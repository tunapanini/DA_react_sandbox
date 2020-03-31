import * as React from "react";

class GNB extends React.Component<{ name: string }> {
  render() {
    return (
      <nav style={{ display: "flex", flexDirection: "row" }}>
        <button>왼버튼</button>
        <h1 className="gnb-title" style={{ flexGrow: 1 }}>
          {this.props.name}
        </h1>
        <button>오른버튼</button>
      </nav>
    );
  }
}

export default GNB;
