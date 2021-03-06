import React, { Component } from "react";
import ChartComponent from "../components/ChartComponent";
import PieChartExpensesComponent from "../components/PieChartExpensesComponent";
import PieChartIncomeComponent from "../components/PieChartIncomeComponent";
import BarGoalComponent from "../components/BarGoalComponent";
import RadarChartComponent from "../components/RadarChartComponent";
import {
  Button,
  Col,
  Container,
  Row,
  Jumbotron,
  Card,
  CardDeck,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { ArrowsFullscreen, X } from "react-bootstrap-icons";
import Backdrop from "@material-ui/core/Backdrop";

const style = {
  zIndex: 2,
  color: "#fff",
  display: "flex",
};

export default class ChartCardComponent extends Component {
  state = {
    labels: ["Income", "Net Income"],
    data: [0, 0],
    Component: "default",
    openBar: false,
    openBarGoal: false,
    openPieInc: false,
    openPieExp: false,
    openRadar: false,
    color: false,
  };

  handleToggleBar = () => {
    this.setState({
      openBar: !this.state.openBar,
    });
  };

  handleToggleBarGoal = () => {
    this.setState({
      openBarGoal: !this.state.openBarGoal,
    });
  };

  handleTogglePieInc = () => {
    this.setState({
      openPieInc: !this.state.openPieInc,
    });
  };

  handleTogglePieExp = () => {
    this.setState({
      openPieExp: !this.state.openPieExp,
    });
  };

  handleToggleRadar = () => {
    this.setState({
      openRadar: !this.state.openRadar,
    });
  };

  static getDerivedStateFromProps(props, state) {
    return {
      labels: props.labels,
      data: props.data,
      goal: props.goal,
      Component: props.Component,
      color: props.color,
    };
  }

  render() {
    if (this.state.Component == "BarChart") {
      return (
        <Card>
          <Backdrop
            style={style}
            open={this.state.openBar}
            onClick={this.handleToggleBar}
          >
            <Container>
              <h2>Bar Graph</h2>
              <Card>
                <ChartComponent
                  labels={this.state.labels}
                  data={this.state.data}
                />
              </Card>
            </Container>
          </Backdrop>
          <Card.Header>
            <h3 id="bar-chart-h3">Bar Chart</h3>
          </Card.Header>
          <Card.Body>
            <ChartComponent labels={this.state.labels} data={this.state.data} />
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.handleToggleBar}
            >
              <ArrowsFullscreen size={25} />
            </Button>
            <Button
              id="delete-bar-chart"
              variant="danger"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.props.handleBar}
            >
              <X size={25} />
            </Button>
          </Card.Footer>
        </Card>
      );
    } else if (this.state.Component == "BarGoal") {
      return (
        <Card>
          <Backdrop
            style={style}
            open={this.state.openBarGoal}
            onClick={this.handleToggleBarGoal}
          >
            <Container>
              <h2>Net Income Vs. Goal</h2>
              <Card>
                <BarGoalComponent
                  labels={this.state.labels}
                  data={this.state.data}
                  goal={this.state.goal}
                />
              </Card>
            </Container>
          </Backdrop>
          <Card.Header>
            <h3 id="bar-goal-h3">Net Income Vs. Goal</h3>
          </Card.Header>
          <Card.Body>
            <BarGoalComponent
              labels={this.state.labels}
              data={this.state.data}
              goal={this.state.goal}
            />
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.handleToggleBarGoal}
            >
              <ArrowsFullscreen size={25} />
            </Button>
            <Button
              id="delete-bar-goal"
              variant="danger"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.props.handleBarGoals}
            >
              <X size={25} />
            </Button>
          </Card.Footer>
        </Card>
      );
    } else if (this.state.Component == "ExpensePie") {
      return (
        <Card style={true ? {} : { display: "none" }}>
          <Backdrop
            style={style}
            open={this.state.openPieExp}
            onClick={this.handleTogglePieExp}
          >
            <Container>
              <h2>Pie Chart of Expense</h2>
              <Card>
                <PieChartExpensesComponent
                  labels={this.state.labels}
                  data={this.state.data}
                  color={this.state.color}
                />
              </Card>
            </Container>
          </Backdrop>
          <Card.Header>
            <h3 id="pie-expense-chart-h3">Pie Chart of Expenses</h3>
          </Card.Header>
          <Card.Body>
            <PieChartExpensesComponent
              labels={this.state.labels}
              data={this.state.data}
              color={this.state.color}
            />
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.handleTogglePieExp}
            >
              <ArrowsFullscreen size={25} />
            </Button>
            <Button
              id="delete-pie-expenses-chart"
              variant="danger"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.props.handlePieExpense}
            >
              <X size={25} />
            </Button>
          </Card.Footer>
        </Card>
      );
    } else if (this.state.Component == "IncomePie") {
      return (
        <Card style={true ? {} : { display: "none" }}>
          <Backdrop
            style={style}
            open={this.state.openPieInc}
            onClick={this.handleTogglePieInc}
          >
            <Container>
              <h2>Pie Chart of Income</h2>
              <Card>
                <PieChartIncomeComponent
                  labels={this.state.labels}
                  data={this.state.data}
                  color={this.state.color}
                />
              </Card>
            </Container>
          </Backdrop>
          <Card.Header>
            <h3 id="pie-chart-h3">Pie Income Chart</h3>
          </Card.Header>
          <Card.Body>
            <PieChartIncomeComponent
              labels={this.state.labels}
              data={this.state.data}
              color={this.state.color}
            />
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.handleTogglePieInc}
            >
              <ArrowsFullscreen size={25} />
            </Button>
            <Button
              id="delete-pie-income-chart"
              variant="danger"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.props.handlePieIncome}
            >
              <X size={25} />
            </Button>
          </Card.Footer>
        </Card>
      );
    } else if (this.state.Component == "RadarPie") {
      return (
        <Card style={true ? {} : { display: "none" }}>
          <Backdrop
            style={style}
            open={this.state.openRadar}
            onClick={this.handleToggleRadar}
          >
            <Container>
              <h2>Expense Variance Chart</h2>
              <Card>
                <RadarChartComponent
                  labels={this.state.labels}
                  data={this.state.data}
                />
              </Card>
            </Container>
          </Backdrop>
          <Card.Header>
            <h3 id="radar-chart-h3">Expense Variance Chart</h3>
          </Card.Header>
          <Card.Body>
            <RadarChartComponent
              labels={this.state.labels}
              data={this.state.data}
            />
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.handleToggleRadar}
            >
              <ArrowsFullscreen size={25} />
            </Button>
            <Button
              id="delete-radar-chart"
              variant="danger"
              style={{
                height: 50,
                width: 50,
                margin: 5,
                borderRadius: 25,
                align: "center",
              }}
              onClick={this.props.handleRadar}
            >
              <X size={25} />
            </Button>
          </Card.Footer>
        </Card>
      );
    }
  }
}
