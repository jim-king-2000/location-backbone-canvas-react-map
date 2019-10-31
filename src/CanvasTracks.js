import React from 'react';
import { Polyline } from 'location-backbone-react-map';
import { ColorPool } from 'location-backbone-canvas';

export const CanvasTracks = ({ tracks, __map__ }) => (
  <>
    {tracks && tracks.map(track => {
      let path = track.splittedTrack || [];
      if (!Array.isArray(path) || !Array.isArray(path[0])) {
        path = [path];
      }
      return path.map((pathItem, i) => <Polyline
        __map__={__map__}
        key={`${track.thingId}-${i}`}
        path={pathItem}
        strokeColor={ColorPool.getColor(track.colorIndex)}
        strokeWeight={2}
      />);
    })}
  </>
);