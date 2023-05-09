import { Component } from "react";
import {
  Map,
  Marker,
  GoogleApiWrapper,
  mapEventHandler,
  markerEventHandler,
} from "google-maps-react";

const mapStyle = {
  width: "920px",
  height: "500px",
};

export class MapContainer extends Component<{ google: any }> {
  onMapClicked: mapEventHandler | undefined;
  onMarkerClick: markerEventHandler | undefined;
  onInfoWindowClose: any;

  render() {
    return (
      <>
        {/* <Map
          google={"google"}
          zoom={16}
          draggable
          initialCenter={{
            lat: 0.0,
            lng: 0.0,
          }}
          style={mapStyle}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick} />
        </Map> */}
      </>
    );
  }
}

const Maps = GoogleApiWrapper({
  apiKey: "xxx",
})(MapContainer);

export default Maps;
