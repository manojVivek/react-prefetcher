import React, { Fragment } from "react";

export default class Prefetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
      hovered: false,
      clicked: false
    };
  }

  _delay = this.props.delayMs || 500;

  _eventHappened = event =>
    setTimeout(() => this.setState({ [event + "ed"]: true }), this._delay);

  componentDidMount() {
    this._eventHappened("render");
  }

  render() {
    return (
      <Fragment>
        <div
          style={{ width: "max-content" }}
          onMouseEnter={() => this._eventHappened("hover")}
          onClick={() => this._eventHappened("click")}
        >
          {this.props.children}
        </div>
        {this.state.rendered && this._renderLink(this.props.renderLink)}
        {this.state.hovered && this._renderLink(this.props.hoverLink)}
        {this.state.clicked && this._renderLink(this.props.clickLink)}
      </Fragment>
    );
  }

  _renderLink = href => href && <link rel="prefetch" href={href} />;
}
