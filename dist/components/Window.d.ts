/// <reference types="react" />
import { Size, Grids, Bounds } from "./index.d";
export interface Props {
    id: string;
    children: JSX.Element;
    grids: Grids;
    title?: JSX.Element;
    bounds?: Bounds;
    minSize?: Size;
    maxSize?: Size;
    draggable?: boolean;
    resizable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
    startMinimized?: boolean;
}
declare const Window: {
    (props: Props): JSX.Element;
    defaultProps: Partial<Props>;
};
export default Window;
//# sourceMappingURL=Window.d.ts.map