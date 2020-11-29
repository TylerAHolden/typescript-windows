"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windows = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var windows = [{
  key: "window1",
  title: /*#__PURE__*/_react.default.createElement("div", null, "Window 1"),
  content: /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Draggable, resizable, minimizable and maximizable."),
  grids: {
    x: 0,
    y: 0,
    w: 4,
    h: 4
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true
}, {
  key: "window2",
  title: /*#__PURE__*/_react.default.createElement("div", null, "Window 2"),
  content: /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Bounded to the top of the screen."),
  grids: {
    x: 4,
    y: 0,
    w: 4,
    h: 4
  },
  bounds: {
    left: 0,
    top: 0,
    right: 12,
    bottom: 6
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true
}, {
  key: "window3",
  title: /*#__PURE__*/_react.default.createElement("div", null, "Window 3"),
  content: /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Only draggable."),
  grids: {
    x: 8,
    y: 0,
    w: 4,
    h: 4
  },
  draggable: true,
  resizable: false,
  minimizable: false,
  maximizable: false,
  startMinimized: false
}, {
  key: "window4",
  title: /*#__PURE__*/_react.default.createElement("div", null, "Window 4"),
  content: /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "With minimum and maximum window size."),
  grids: {
    x: 0,
    y: 4,
    w: 4,
    h: 4
  },
  minSize: {
    w: 200,
    h: 100
  },
  maxSize: {
    w: 500,
    h: 300
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true,
  startMinimized: false
}, {
  key: "window5",
  title: /*#__PURE__*/_react.default.createElement("div", null, "Window 5"),
  content: /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Starting minimized."),
  grids: {
    x: 4,
    y: 4,
    w: 4,
    h: 4
  },
  draggable: true,
  resizable: true,
  minimizable: true,
  maximizable: true,
  startMinimized: true
}];
exports.windows = windows;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aW5kb3dzLnRzeCJdLCJuYW1lcyI6WyJ3aW5kb3dzIiwia2V5IiwidGl0bGUiLCJjb250ZW50IiwicGFkZGluZyIsImdyaWRzIiwieCIsInkiLCJ3IiwiaCIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJib3VuZHMiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJzdGFydE1pbmltaXplZCIsIm1pblNpemUiLCJtYXhTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFJTyxJQUFNQSxPQUFpQixHQUFHLENBQy9CO0FBQ0VDLEVBQUFBLEdBQUcsRUFBRSxTQURQO0FBRUVDLEVBQUFBLEtBQUssZUFBRSxxREFGVDtBQUdFQyxFQUFBQSxPQUFPLGVBQ0w7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLDBEQUpKO0FBUUVDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFDLEVBQUUsQ0FBWDtBQUFjQyxJQUFBQSxDQUFDLEVBQUUsQ0FBakI7QUFBb0JDLElBQUFBLENBQUMsRUFBRTtBQUF2QixHQVJUO0FBU0VDLEVBQUFBLFNBQVMsRUFBRSxJQVRiO0FBVUVDLEVBQUFBLFNBQVMsRUFBRSxJQVZiO0FBV0VDLEVBQUFBLFdBQVcsRUFBRSxJQVhmO0FBWUVDLEVBQUFBLFdBQVcsRUFBRTtBQVpmLENBRCtCLEVBZS9CO0FBQ0VaLEVBQUFBLEdBQUcsRUFBRSxTQURQO0FBRUVDLEVBQUFBLEtBQUssZUFBRSxxREFGVDtBQUdFQyxFQUFBQSxPQUFPLGVBQ0w7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUFaLHlDQUpKO0FBTUVDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQSxDQUFDLEVBQUUsQ0FBTDtBQUFRQyxJQUFBQSxDQUFD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cm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFdpbmRvdyB9IGZyb20gXCIuL2NvbXBvbmVudHMvV2luZG93c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHdpbmRvd3M6IFdpbmRvd1tdID0gW1xyXG4gIHtcclxuICAgIGtleTogXCJ3aW5kb3cxXCIsXHJcbiAgICB0aXRsZTogPGRpdj5XaW5kb3cgMTwvZGl2PixcclxuICAgIGNvbnRlbnQ6IChcclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICBEcmFnZ2FibGUsIHJlc2l6YWJsZSwgbWluaW1pemFibGUgYW5kIG1heGltaXphYmxlLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgICBncmlkczogeyB4OiAwLCB5OiAwLCB3OiA0LCBoOiA0IH0sXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICBtaW5pbWl6YWJsZTogdHJ1ZSxcclxuICAgIG1heGltaXphYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIndpbmRvdzJcIixcclxuICAgIHRpdGxlOiA8ZGl2PldpbmRvdyAyPC9kaXY+LFxyXG4gICAgY29udGVudDogKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PkJvdW5kZWQgdG8gdGhlIHRvcCBvZiB0aGUgc2NyZWVuLjwvZGl2PlxyXG4gICAgKSxcclxuICAgIGdyaWRzOiB7IHg6IDQsIHk6IDAsIHc6IDQsIGg6IDQgfSxcclxuICAgIGJvdW5kczogeyBsZWZ0OiAwLCB0b3A6IDAsIHJpZ2h0OiAxMiwgYm90dG9tOiA2IH0sXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByZXNpemFibGU6IHRydWUsXHJcbiAgICBtaW5pbWl6YWJsZTogdHJ1ZSxcclxuICAgIG1heGltaXphYmxlOiB0cnVlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIndpbmRvdzNcIixcclxuICAgIHRpdGxlOiA8ZGl2PldpbmRvdyAzPC9kaXY+LFxyXG4gICAgY29udGVudDogPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5Pbmx5IGRyYWdnYWJsZS48L2Rpdj4sXHJcbiAgICBncmlkczogeyB4OiA4LCB5OiAwLCB3OiA0LCBoOiA0IH0sXHJcbiAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICByZXNpemFibGU6IGZhbHNlLFxyXG4gICAgbWluaW1pemFibGU6IGZhbHNlLFxyXG4gICAgbWF4aW1pemFibGU6IGZhbHNlLFxyXG4gICAgc3RhcnRNaW5pbWl6ZWQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiBcIndpbmRvdzRcIixcclxuICAgIHRpdGxlOiA8ZGl2PldpbmRvdyA0PC9kaXY+LFxyXG4gICAgY29udGVudDogKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgIFdpdGggbWluaW11bSBhbmQgbWF4aW11bSB3aW5kb3cgc2l6ZS5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gICAgZ3JpZHM6IHsgeDogMCwgeTogNCwgdzogNCwgaDogNCB9LFxyXG4gICAgbWluU2l6ZTogeyB3OiAyMDAsIGg6IDEwMCB9LFxyXG4gICAgbWF4U2l6ZTogeyB3OiA1MDAsIGg6IDMwMCB9LFxyXG4gICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgcmVzaXphYmxlOiB0cnVlLFxyXG4gICAgbWluaW1pemFibGU6IHRydWUsXHJcbiAgICBtYXhpbWl6YWJsZTogdHJ1ZSxcclxuICAgIHN0YXJ0TWluaW1pemVkOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogXCJ3aW5kb3c1XCIsXHJcbiAgICB0aXRsZTogPGRpdj5XaW5kb3cgNTwvZGl2PixcclxuICAgIGNvbnRlbnQ6IDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+U3RhcnRpbmcgbWluaW1pemVkLjwvZGl2PixcclxuICAgIGdyaWRzOiB7IHg6IDQsIHk6IDQsIHc6IDQsIGg6IDQgfSxcclxuICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgIHJlc2l6YWJsZTogdHJ1ZSxcclxuICAgIG1pbmltaXphYmxlOiB0cnVlLFxyXG4gICAgbWF4aW1pemFibGU6IHRydWUsXHJcbiAgICBzdGFydE1pbmltaXplZDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG4iXX0=