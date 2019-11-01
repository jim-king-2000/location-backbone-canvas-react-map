import React from 'react';
import { CanvasTracks } from './CanvasTracks';
import { CanvasPositionMonitor } from './CanvasPositionMonitor';

// properties
//   mapKey
//   simple
//   positions
//   selectedThing
//   selectThingId = thingId => {}
//   propertyTemplate
//   tracks

export const CanvasTrackMonitor = ({
  tracks,
  ...props
}) => (
  <CanvasPositionMonitor
    {...props}
    canvasExtra={<CanvasTracks tracks={tracks} />}
  />
);
