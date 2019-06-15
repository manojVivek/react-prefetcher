import React from 'react';

export default class NoPrefetchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    return (
      <div class="section">
        <div
          class="cta-button"
          onClick={() => this.setState({ clicked: true })}
        >
          Click to show image
        </div>
        {this.state.clicked ? (
          <img
            src={
              'https://assets.imgix.net/examples/kingfisher.jpg?w=200&rand=' +
              this.props.rand
            }
            alt=""
          />
        ) : null}
      </div>
    );
  }
}
