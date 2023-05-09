// import NavigationHeader from "../Header";
import React from "react";
import SideBar from "./SideBar";

export default function Main(props: any) {
  return (
    <>
      <div className="bg-[#25262B]">
        <div className="max-w-screen-2xl">
          <SideBar>
            <div className="min-h-screen mx-auto">{props.children}</div>
          </SideBar>
        </div>
      </div>
    </>
  );
}
