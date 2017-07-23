import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

const titleCase = str =>
  str.split(/\s+/).map(w => w[0].toUpperCase() + w.slice(1)).join(' ');

const ClickableLabel = ({ title, onChange }) =>
  <label onClick={() => onChange(title)}>
    {titleCase(title)}
  </label>;

const ConcealedRadio = ({ value, selected }) =>
  <input type="radio" name="switch" checked={selected === value} />;

class ToggleSwitch extends Component {
  state = { selected: this.props.selected };

  handleChange = val => {
    this.setState({ selected: val });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className="switch-field">
        {this.props.values.map(val => {
          return (
            <span>
              <ConcealedRadio value={val} selected={selected} />
              <ClickableLabel title={val} onChange={this.handleChange} />
            </span>
          );
        })}
      </div>
    );
  }
}

render(
  <ToggleSwitch values={['days', 'weeks', 'months']} selected="weeks" />,
  document.getElementById('root'),
);
