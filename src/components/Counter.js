import React from 'react';

class Counter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  update(delta) {
    return () => this.setState({
      count: this.state.count + delta
    });
  }

  render() {
    const { image, label } = this.props;
    const { count } = this.state;

    return <div className="counter">
      <img src={image} />
      <span>{ count }</span>
      { label && <span>{ label }</span>}
      <button onClick={this.update(1)}>+</button>
      <button onClick={this.update(-1)}>-</button>
    </div>;
  }
}

Counter.propTypes = {
  image: React.PropTypes.string.isRequired,
  label: React.PropTypes.string
};

export default Counter;
