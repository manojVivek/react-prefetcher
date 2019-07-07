import React, { Fragment } from 'react';

const loadedUrls = {};
export default class Prefetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
      hovered: false,
      clicked: false,
    };
  }

  _delay = this.props.delayMs || 500;

  timeoutHandles = [];

  _eventHappened = event =>
    this.timeoutHandles.push(
      setTimeout(() => this.setState({ [event + 'ed']: true }), this._delay)
    );

  componentDidMount() {
    this._eventHappened('render');
  }

  componentWillUnmount() {
    for (const handle of this.timeoutHandles) {
      clearTimeout(handle);
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.children && (
          <span
            onMouseEnter={() => this._eventHappened('hover')}
            onClick={() => this._eventHappened('click')}
            className={this.props.className}
            style={{ width: 'max-content', ...this.props.style }}
          >
            {this.props.children}
          </span>
        )}
        {this.state.rendered && this._prefetchAssets(this.props.onRenderAssets)}
        {this.state.hovered && this._prefetchAssets(this.props.onHoverAssets)}
        {this.state.clicked && this._prefetchAssets(this.props.onClickAssets)}
      </Fragment>
    );
  }

  _prefetchAssets = assets => {
    if (!assets) {
      return null;
    }
    if (assets.constructor !== Array) {
      return this._renderPrefetch(assets);
    }
    return assets.map(this._renderPrefetch).filter(Boolean);
  };

  _renderPrefetch = href => {
    if (typeof href === 'object') {
      this._processCustomFetcher(href);
      return null;
    }

    if (!href || loadedUrls[href]) {
      return;
    }
    return (
      <link
        key={href}
        rel="prefetch"
        href={href}
        onLoad={() => (loadedUrls[href] = true)}
      />
    );
  };

  _processCustomFetcher = config => {
    if (typeof config.fetcher !== 'function') {
      console.warn('Invalid config to prefetch:', config);
      return;
    }
    if (loadedUrls[config.href]) {
      return;
    }
    config.fetcher();
    loadedUrls[config.href] = true;
  };
}
