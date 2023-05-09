import { useState } from "react";
import { Loader } from "@mantine/core";
import Main from "../Layouts/Main";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "../Maps/MapConfig";
import Map from "../Maps/Map";

export default function HomeVariantA(props: any) {
  const [data, setData] = useState<any>(2);

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  return (
    <div className="">
      <Main>
        <div className="">
          {data === 0 ? (
            <div className="mt-20 flex justify-center items-center h-full w-full">
              <Loader size="lg" />
            </div>
          ) : (
            <div className=" text-white">
              <div className="lg:flex flex-wrap w-full">
                <div className="p-4 flex justify-center w-full md:w-[750px]">
                  <div className="">
                    <h2 className="text-center ">Here is Maps</h2>
                    <div className="border-2 mt-4 h-96 rounded-lg">
                      <Map isLoaded={isLoaded} />
                    </div>
                    <div className="mt-4">
                      <h2>Lorem ipsum dolor sit amet.</h2>
                      <h2>Lorem ipsum dolor sit amet. Lorem ipsum dolor</h2>
                      <div className="p-2 border-2 mt-4 h-60 rounded-lg">
                        <h4 className=" text-sm">
                          Lorem ipsum dolor sit amet.
                        </h4>
                        <h2 className="mt-2">
                          Lorem ipsum dolor sit amet. Lorem ipsum dolor
                        </h2>
                        <p className="mt-2 text-sm">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis officia architecto dolor impedit
                          nesciunt eum nam repudiandae. Unde tenetur dignissimos
                          quo quisquam?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[400px] p-4 md:m-4 text-center">
                  <h2>Here is the Camera Screens</h2>
                  <div className=" mt-4">
                    <div className="flex">
                      <div className="">
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                      </div>
                      <div className="w-full">
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                        <div className="border rounded m-2 h-fit">
                          <iframe
                            title="1"
                            width="160"
                            height="100"
                            src="https://www.youtube.com/embed/Way9Dexny3w?autoplay=1&mute=1"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Main>
    </div>
  );
}
