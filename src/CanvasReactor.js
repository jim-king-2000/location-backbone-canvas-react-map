import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export class CanvasReactor extends Component {
  componentDidUpdate() {
    if (!this.props.setFitView) return;
    const mapView = this.props.__map__.MapView;
    if (!mapView) return;
    setTimeout(() => {
      mapView.setFitView(this.props.positions);
      if (this.props.onUpdateEnd) this.props.onUpdateEnd();
    }, 100);
  }

  render() {
    if (!this.props.tracingMode) return null;

    const mapView = this.props.__map__.MapView;
    if (!mapView) return null;
    const positions = this.props.positions;
    const isMarkersInViewport = mapView.isInView(positions);
    if (!isMarkersInViewport) {
      mapView.setFitView(positions);
    }
    return null;
  }
}