import React, { FC, useEffect } from 'react';
import NAV2D from '../vendor/nav2d.js';
import ROS2D from '../vendor/ros2d.js';
import ROSLIB from 'roslib';

interface Nav2dProps {
  ros?: ROSLIB.Ros;
  id?: string;
  width?: number;
  height?: number;
  serverName?: string;
}

const Nav2d: FC<Nav2dProps> = ({ ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' }), id = 'nav2d', width = 500, height = 500, serverName = '/move_base' }) => {
  useEffect(() => {
    const viewer = new ROS2D.Viewer({
      divID: id,
      width,
      height,
    });
    NAV2D.OccupancyGridClientNav({
      ros,
      rootObject: viewer.scene,
      viewer,
      serverName,
    });
  }, [id, ros, serverName, height, width]);

  return <div id={id} />;
};

export default Nav2d;
