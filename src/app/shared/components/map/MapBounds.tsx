import { useEffect } from "react";
import { useMap } from "react-leaflet";

import { changeMapViewport } from "../../config/redux/reducers/QUOTES.reducer";
import { useAppDispatch } from "../../config/redux/store/store.config";

const MapBounds = () => {
  const map = useMap();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // For the first render
    dispatch(
      changeMapViewport({
        bounds: map.getBounds(),
        center: map.getCenter(),
        zoom: map.getZoom(),
      })
    );
    const onMove = () => {
      map.getBounds();
      map.getCenter();
      map.getZoom();
      dispatch(
        changeMapViewport({
          bounds: map.getBounds(),
          center: map.getCenter(),
          zoom: map.getZoom(),
        })
      );
    };

    map.on("moveend", onMove);
    return () => {
      map.off("moveend", onMove);
    };
  }, [map, dispatch]);

  return null;
};

export default MapBounds;
