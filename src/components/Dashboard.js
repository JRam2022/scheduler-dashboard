import React, { Component } from "react";

import classnames from "classnames";
import Loading from "./Loading";
import Panel from "./Panel";


const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];


class Dashboard extends Component {
  state = {loading: true};

  render() {
    const dashboardClasses = classnames("dashboard");

    if (this.state.loading) {
      return <Loading />;
    }

    const panel = data.map((p) => (
        <Panel 
          key={p.id}
          id={p.id}
          label={p.label}
          value={p.value}
        />
      ));

    return (
      <main className={dashboardClasses}>
        {panel}
      </main>
      )
    }
}

export default Dashboard;
