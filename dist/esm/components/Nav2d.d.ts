import * as React from 'react';
import ROSLIB from 'roslib';
interface Nav2dProps {
    ros?: ROSLIB.Ros;
    id?: string;
    width?: number;
    height?: number;
    serverName?: string;
}
declare const Nav2d: React.FC<Nav2dProps>;
export default Nav2d;
