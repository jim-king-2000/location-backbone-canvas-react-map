import React from 'react';
import { DynamicMarker } from 'location-backbone-react-map';
import { observer } from 'mobx-react';
import { CarTopViewObject, ColorPool } from 'location-backbone-canvas';

export const CanvasPositions = observer(
  ({ positions, ...props }) => (
    <>
      {Array.isArray(positions) && positions
      .filter(p => p && p.latitude && p.longitude)
      .map(p => (
        <DynamicMarker
          key={p.thingId}
          svgIcon={CarTopViewObject}
          fillColor={ColorPool.getColor(p.colorIndex)}
          title={p.isOnline ? '在线' : '离线'}
          zIndex={150}
          position={{
            latitude: p.latitude,
            longitude: p.longitude
          }}
          angle={p.heading}
          extData={p}
          {...props}
        />
      ))}
    </>
  )
);