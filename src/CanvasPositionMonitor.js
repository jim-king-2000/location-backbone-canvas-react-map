import React, { Component } from 'react';
import { CanvasContainer } from './CanvasContainer';
import { CanvasPositions } from './CanvasPositions';
import { CanvasReactor } from './CanvasReactor';
import { CanvasInformation } from './CanvasInformation';
import { CanvasPluginZoom } from './CanvasPluginZoom';
import { CanvasInformationTable } from 'location-backbone-canvas';

// properties
// mapKey
// positions
// selectedThing
// selectThingId = thingId => {}
// propertyTemplate
// canvasExtra

export class CanvasPositionMonitor extends Component {
  state = {
    tracingMode: false
  }

  render() {
    const { selectThingId, propertyTemplate, simple, mapKey,
      setFitView, onUpdateEnd, selectedThing, ...others } = this.props;
    const positions = this.props.positions.filter(
      p => p && p.latitude && p.longitude);
    return (
      <CanvasContainer mapKey={mapKey} {...others}>
        {this.props.canvasExtra}
        <CanvasPositions
          positions={positions}
          events={{
            click: e => selectThingId(e.target.getExtData().thingId)
          }}
        />
        <CanvasInformation
          onClose={() => selectThingId(undefined) }
          data={selectedThing}
          template={propertyTemplate}
        />
        {!simple && <CanvasInformationTable
          height='small'
          overflow='auto'
          positions={positions}
          template={propertyTemplate}
          style={{
            position: 'absolute',
            top: 0
          }}
        />}
        <CanvasPluginZoom
          direction='row'
          positions={positions}
          tracingMode={this.state.tracingMode}
          onChange={e => this.setState({ tracingMode: e.target.checked })}
          style={{
            position: 'absolute',
            bottom: '30px',
            right: 0
          }}
        />
        <CanvasReactor
          setFitView={setFitView}
          onUpdateEnd={onUpdateEnd}
          positions={positions}
          tracingMode={this.state.tracingMode} />
      </CanvasContainer>
    );
  }
}