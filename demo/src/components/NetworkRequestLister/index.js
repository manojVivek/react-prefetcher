import React from 'react';

export default class NetworkReqestLister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { requests: [] };
  }

  componentDidMount() {
    this.intervalHandle = setInterval(this._refreshList, 200);
  }

  componentWillUnmount() {
    clearInterval(this.intervalHandle);
  }

  _refreshList = () => {
    this.setState({
      requests: performance
        .getEntriesByType('resource')
        .filter(entry => entry.name.indexOf(this.props.filter) > -1),
    });
  };

  render() {
    return (
      <div className="section">
        <h3>Network Inspector:</h3>
        <table>
          <tr>
            <th>Time from Page load(ms)</th>
            <th>Resource URL</th>
            <th>Time Taken to Download(ms)</th>
          </tr>
          {this.state.requests.map(request => (
            <tr>
              <td>{Math.round(request.startTime)}</td>
              <td>{request.name}</td>
              <td>{Math.round(request.duration)}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
