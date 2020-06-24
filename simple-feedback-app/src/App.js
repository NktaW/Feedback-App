import React from 'react';
  
  //Creating feedback buttons
const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
};
      //Counting the stats
const Statistics = props => {
  const {tila, good, neutral, bad} = props
  if (tila.good === 0 && tila.neutral === 0 && tila.bad === 0) {
    return (
      <tbody><tr><td>No feedback is given yet</td></tr></tbody>
    )
  }
  else {
    
    let count = (tila.good + tila.neutral + tila.bad)
    let goodprocentage = (100*tila.good/count)
    let average = ((tila.good - tila.bad)/count )
    return(
      <tbody>
        <Statistic label='Good:' value={tila.good} />
        <Statistic label='Neutral:' value={tila.neutral} />
        <Statistic label='Bad:' value={tila.bad} />
        <Statistic label='Procentage of goods:' value={goodprocentage} />
        <Statistic label='Average:' value={average} />
      </tbody>
    )
  }
};

const Statistic = props => {
  const {label, value} = props
  return (
    <tr><td>{label}</td><td>{value}</td></tr>
  )
};
    //Parent Element
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad:0
    }
  };    
  
  addGood = () => () => {this.setState({good: this.state.good + 1})}
  addNeutral = () => () => {this.setState({neutral: this.state.neutral + 1})}
  addBad = () => () => {this.setState({bad: this.state.bad + 1})}
  
  render() {
  return (
    <div className="App">
    <div className="buttons">
      <h1>Feedback App</h1>
      <Button onClick={this.addGood()} text='Good' />
      <Button onClick={this.addNeutral()} text='Neutral' />
      <Button onClick={this.addBad()} text='Bad' />
    </div>
    <div className="Stats">
      <table>
        <Statistics tila={this.state} />
      </table>
    </div>  
    </div>
  );
}
}

export default App;
