import { GoogleMap } from "@react-google-maps/api";

const Map = (props: any) => {
  const { isLoaded } = props;

  const containerStyle = {
    width: "100%", 
    height: "100%",
  };

  const center = {
    lat: 25.396,
    lng: 68.3578,
  };
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
