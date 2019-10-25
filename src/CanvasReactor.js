import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export class CanvasReactor extends Component {
  componentDidUpdate() {
    if (!this.props.setFitView) return;
    const mapView = this.props.__map__.MapView;
    setTimeout(() =>mapView.setFitView(this.props.positions), 100);
    if (this.props.onUpdateEnd) this.props.onUpdateEnd();
  }

  render() {
    if (!this.props.tracingMode) return null;

    const mapView = this.props.__map__.MapView;
    const positions = this.props.positions;
    const isMarkersInViewport = mapView.isInView(positions);
    if (!isMarkersInViewport) {
      mapView.setFitView(positions);
    }
    return null;
  }
}