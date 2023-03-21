"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var nav2d_js_1 = tslib_1.__importDefault(require("../vendor/nav2d.js"));
var ros2d_js_1 = tslib_1.__importDefault(require("../vendor/ros2d.js"));
var Nav2d = function (_a) {
    var ros = _a.ros, _b = _a.id, id = _b === void 0 ? 'nav2d' : _b, _c = _a.width, width = _c === void 0 ? 500 : _c, _d = _a.height, height = _d === void 0 ? 500 : _d, _e = _a.serverName, serverName = _e === void 0 ? '/move_base' : _e;
    (0, react_1.useEffect)(function () {
        var viewer = new ros2d_js_1["default"].Viewer({
            divID: id,
            width: width,
            height: height
        });
        nav2d_js_1["default"].OccupancyGridClientNav({
            ros: ros,
            rootObject: viewer.scene,
            viewer: viewer,
            serverName: serverName
        });
    }, [id, ros, serverName, height, width]);
    return react_1["default"].createElement("div", { id: id });
};
exports["default"] = Nav2d;
//# sourceMappingURL=Nav2d.js.map