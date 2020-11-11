import React, { useEffect, useState, SyntheticEvent } from "react";
import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { useTranslation } from "react-i18next";
import { ResizableBox, ResizeCallbackData } from "react-resizable";

const iWindowLocations = localStorage.getItem("windowLocations")
  ? JSON.parse(localStorage.getItem("windowLocations") as string)
  : {};

const iWindowSizes = localStorage.getItem("windowSizes")
  ? JSON.parse(localStorage.getItem("windowSizes") as string)
  : {};

const iWindowDisplays = localStorage.getItem("windowDisplays")
  ? JSON.parse(localStorage.getItem("windowDisplays") as string)
  : {};

interface Size {
  w: number;
  h: number;
}

interface Location {
  x: number;
  y: number;
}

interface WindowProps {
  grid: number;
  key: string;
  component: JSX.Element;
  size: Size;
  location: Location;
  draggable?: boolean;
  resizable?: boolean;
  collapsable?: boolean;
  title?: string;
}

const Window = (props: WindowProps) => {
  const { t } = useTranslation();

  const {
    grid,
    key,
    component,
    size,
    location,
    draggable,
    resizable,
    collapsable,
    title,
  } = props;

  const [windowLocations, setWindowsLocations] = useState(iWindowLocations);
  const [windowSizes, setWindowsSizes] = useState(iWindowSizes);
  const [windowDisplays, setWindowsDisplays] = useState(iWindowDisplays);

  useEffect(() => {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);

  useEffect(() => {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);

  useEffect(() => {
    localStorage.setItem("windowDisplays", JSON.stringify(windowDisplays));
  }, [windowDisplays]);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setWindowsLocations({
      ...windowLocations,
      [key]: { x: data.x, y: data.y },
    });
  };

  const handleResize = (e: SyntheticEvent, data: ResizeCallbackData) => {
    setWindowsSizes({
      ...windowSizes,
      [key]: { w: data.size.width, h: data.size.height },
    });
  };

  const handleCollapse = () => {
    if (!collapsable) {
      return;
    }

    setWindowsDisplays({
      ...windowDisplays,
      [key]: !windowDisplays[key],
    });
  };

  const renderHandler = () => {
    const classNames = "header " + (draggable && "draggable-header");

    return (
      <div className={classNames} onDoubleClick={handleCollapse}>
        {title ? t(title) : null}
      </div>
    );
  };

  const renderBody = () => {
    const display = windowDisplays[key] === false ? "none" : "block";

    return (
      <div className="body" style={{ display }}>
        {renderBodyContents()}
      </div>
    );
  };

  const renderBodyContents = () => {
    const width = windowSizes[key] ? windowSizes[key].w : size.w;

    const height = windowSizes[key] ? windowSizes[key].h : size.h;

    return resizable ? (
      <ResizableBox
        width={width}
        height={height}
        resizeHandles={["se"]}
        draggableOpts={{ grid: [grid, grid] }}
        onResizeStop={handleResize}
      >
        {component}
      </ResizableBox>
    ) : (
      <div style={{ width, height }}>{component}</div>
    );
  };

  return (
    <Draggable
      key={key}
      defaultPosition={windowLocations[key] || location}
      grid={[grid, grid]}
      scale={1}
      handle=".draggable-header"
      bounds="parent"
      onStop={handleDrag}
    >
      <div className={`window ${key}`}>
        {renderHandler()}

        {renderBody()}
      </div>
    </Draggable>
  );
};

Window.defaultProps = {
  grid: 5,
  draggable: true,
  resizable: true,
  collapsable: true,
};

export default Window;
