import React from 'react';
import Prefetcher from 'react-prefetcher';

export default class OnRenderPrefetchApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.imageUrl =
      'https://assets.imgix.net/examples/kingfisher.jpg?w=200&rand=' +
      this.props.rand;
  }

  render() {
    return (
      <div class="section">
        <Prefetcher onRenderAssets={[this.imageUrl]}>
          <div
            class="cta-button"
            onClick={() => this.setState({ clicked: true })}
          >
            Click to show image
          </div>
        </Prefetcher>
        {this.state.clicked ? <img src={this.imageUrl} alt="" /> : null}
      </div>
    );
  }
}
