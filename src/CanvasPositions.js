import React from 'react';
import { Marker } from 'location-backbone-react-map';
import { observer } from 'mobx-react';
import { CarTopView, colorPool } from 'location-backbone-canvas';

export const CanvasPositions = observer(
  ({ __map__, positions, events, ...props }) => (
    <>
      {Array.isArray(positions) && positions
      .filter(p => p && p.latitude && p.longitude)
      .map(p => (
        <Marker
          __map__={__map__}
          key={p.thingId}
          render={() => (<CarTopView
            fontSize={30}
            fill={colorPool[p.colorIndex % colorPool.length]}
          />)}
          title={p.isOnline ? '在线' : '离线'}
          offset={[-15, -15]}
          zIndex={150}
          position={{
            latitude: p.latitude,
            longitude: p.longitude
          }}
          angle={p.heading}
          extData={p}
          events={{
            ...events
          }}
          {...props}
        />
      ))}
    </>
  )
);