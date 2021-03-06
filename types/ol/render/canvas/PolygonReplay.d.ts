import { Extent } from 'ol/extent';
import CanvasReplay from 'ol/render/canvas/Replay';
export default class CanvasPolygonReplay extends CanvasReplay {
    constructor(tolerance: number, maxExtent: Extent, resolution: number, pixelRatio: number, overlaps: boolean, declutterTree: any);
}
