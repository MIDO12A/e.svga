declare function render(context: ContextType, bitmapsCache: BitmapsCache, dynamicElements: DynamicElements, videoEntity: Video, currentFrame: number, smooth?: boolean, notSmoothKeyArr?: Array<string>): void;

type RenderType = typeof render;

interface SubSvgaInfo {
    imageKey?: string;
    videoEntity?: Video;
    startFrame?: number;
    loop?: boolean;
    extension?: SubSvgaParams;
    bitmapsCache?: BitmapsCache;
}
interface SubSvgaParams {
    width?: number;
    height?: number;
    posX?: number;
    posY?: number;
    swapTexts?: CanvasFontParams[];
    swapImages?: CanvasImageParams[];
}
interface TextOffset {
    x: number;
    y: number;
}
interface CanvasFontPramsItem {
    text: string;
    alignFlag: number;
    font: string;
    textColor: string;
    strokeColor?: string;
    width?: number;
    offset?: TextOffset;
    ignoreWidth?: boolean;
}
interface CanvasImageParamsItem {
    url: string | HTMLImageElement;
    width?: number;
    height?: number;
    index?: number;
    count?: number;
}
interface CanvasImageParams {
    imageKey: string;
    backgroundColor?: string;
    frames: CanvasImageParamsItem[];
}
interface CanvasFontParams {
    imageKey: string;
    backgroundColor?: string;
    frames: CanvasFontPramsItem[];
    autoScroll?: TextAutoScrollInfo;
}

declare class SwrapExtension {
    private subSvgaInfo;
    currentFrame: number;
    bitmapsCache: BitmapsCache;
    scrollTextCache: ScrollTextCache;
    notSmoothKeyArr: Array<string>;
    private canvasCache;
    op: ESvgaI;
    constructor(op: ESvgaI);
    private createCanvasContext;
    private createBitmapsCache;
    preDrawSubSvgaFrame(bitmapsCache: BitmapsCache, render: RenderType, frame: number): BitmapsCache;
    destroy(): void;
    drawSubSvgaFrame(ctx: ContextType, render: RenderType, currentFrame: number): void;
    /**
     * 设置动态文本（透传原生接口）
     * @param imageKey
     * @param text
     * @param alignFlag
     * @param font
     * @param textColor
     * @param width
     * @returns
     */
    addSwapImageText(args: CanvasFontParams[], obj?: BitmapsCache): Promise<BitmapsCache>;
    processScrollText(timeDelta: number, cache: any): any;
    measureTextWidth(frames: Array<CanvasFontPramsItem>): number;
    private _getTextPos;
    _getText(ctx: ContextType, text: string, maxWidth: number): string;
    _drawStroke(ctx: ContextType, text: string, x: number, y: number, delta: number, strokeStyle: string): void;
    /**
     *
     * @param canvas
     * @returns
     */
    /**
     * 设定动态图像
     * @param imageKey
     * @param resourcePath
     * @param width
     * @param height
     * @returns
     */
    addSwapImage(imageKey: string, resourcePath: string | HTMLImageElement, width?: number, height?: number): Promise<void>;
    _resize(img: ImageBitmap, width: number, height: number, key: string): any;
    private fetchBlobData;
    grayImage(imageKey: string): Promise<any>;
    getBitmap(url: string, options?: ImageBitmapOptions): Promise<HTMLCanvasElement | HTMLImageElement | ImageBitmap | undefined>;
    clipCount(count: number | undefined): number;
    getSpaceWidth(frames: CanvasImageParamsItem[], maxWidth: number): Promise<number>;
    addSwapImageList(args: CanvasImageParams[], obj?: BitmapsCache): Promise<BitmapsCache>;
    addSwapSvga(url: string, subSvga: SubSvgaInfo): Promise<void>;
    fillColor(ctx: ContextType, color: string, width: number, height: number): void;
    private _addSwapSvga;
}

type LogTypes = 'debug' | 'info' | 'warn' | 'error';

declare enum SHAPE_TYPE {
    SHAPE = "shape",
    RECT = "rect",
    ELLIPSE = "ellipse"
}
declare enum WINDOW_VISIBLE_STATE {
    NONE = "none",
    SHOW = "show",
    HIDE = "hide"
}

interface ImagesBase64 {
    [key: string]: string;
}
interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface Transform {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
}
type RGBA<R extends number, G extends number, B extends number, A extends number> = `rgba(${R}, ${G}, ${B}, ${A})`;
interface VideoStyles {
    fill: RGBA<number, number, number, number> | null;
    stroke: RGBA<number, number, number, number> | null;
    strokeWidth: number | null;
    lineCap: CanvasLineCap | null;
    lineJoin: CanvasLineJoin | null;
    miterLimit: number | null;
    lineDash: number[] | null;
}
interface ShapePath {
    d: string;
    d2: Array<Path>;
}
interface RectPath {
    x: number;
    y: number;
    width: number;
    height: number;
    cornerRadius: number;
}
interface EllipsePath {
    x: number;
    y: number;
    radiusX: number;
    radiusY: number;
}
interface VideoShapeShape {
    type: SHAPE_TYPE.SHAPE;
    path: ShapePath;
    styles: VideoStyles;
    transform: Transform;
}
interface VideoShapeRect {
    type: SHAPE_TYPE.RECT;
    path: RectPath;
    styles: VideoStyles;
    transform: Transform;
}
interface VideoShapeEllipse {
    type: SHAPE_TYPE.ELLIPSE;
    path: EllipsePath;
    styles: VideoStyles;
    transform: Transform;
}
type VideoFrameShape = VideoShapeShape | VideoShapeRect | VideoShapeEllipse;
type VideoFrameShapes = VideoFrameShape[];
interface Path {
    key: string;
    value: string[];
}
interface VideoFrame {
    alpha: number;
    transform: Transform | null;
    nx: number;
    ny: number;
    layout: Rect;
    clipPath: string;
    maskPath: any;
    shapes: VideoFrameShapes;
}
interface VideoSprite {
    imageKey: string;
    frames: VideoFrame[];
}
type ContextType = CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
type BitmapItem = ImageBitmap | HTMLImageElement | HTMLCanvasElement;
interface BitmapsCache {
    [key: string]: BitmapItem;
}
declare enum ScrollType {
    Marquee = 1
}
interface TextAutoScrollInfo {
    duration: number;
    width: number;
    scrollType: ScrollType;
    bitmap: BitmapItem;
}
interface ScrollTextCache {
    [key: string]: TextAutoScrollInfo;
}
type DynamicElement = HTMLCanvasElement | OffscreenCanvas;
interface DynamicElements {
    [key: string]: DynamicElement;
}
interface Video {
    version: string;
    size: {
        width: number;
        height: number;
    };
    fps: number;
    frames: number;
    images: ImagesBase64;
    dynamicElements: DynamicElements;
    sprites: VideoSprite[];
}
/**
 * 播放模式
 */
type PLAYER_PLAY_MODE = 'forwards' | 'fallbacks';
type PLAYER_FILL_MODE = 'forwards' | 'backwards';
type ResizeCanvasType = 'percent' | 'percentW' | 'percentH' | 'size';
interface ESvgaParamsI {
    /**
     * svga 地址
     * http or base64
     */
    url: string;
    /**
     * 需要填充的自定义text信息
     */
    swapTexts?: CanvasFontParams[];
    /**
     * 需要填充的自定义图片信息
     */
    swapImages?: CanvasImageParams[];
    /**
     * url 类型
     * @default http
     */
    urlType?: 'http' | 'base64';
    /**
     * div html 容器
     */
    container: HTMLElement;
    /**
     * 循环播放次数
     */
    loop?: number | boolean;
    /**
     * 填充模式
     */
    fillMode?: PLAYER_FILL_MODE;
    /**
     * 播放模式
     */
    playMode?: PLAYER_PLAY_MODE;
    /**
     * 开始播放帧
     */
    startFrame?: number;
    /**
     * 结束播放帧
     */
    endFrame?: number;
    /**
     * 启用帧缓存 默认启动
     */
    useFrameCache?: boolean;
    /**
     * 监听容器是否处于浏览器视窗内 会根据实际环境自动判断
     */
    useIntersectionObserver?: boolean;
    /**
     * 启用多进程 会根据实际环境自动判断
     */
    useWebworker?: boolean;
    /**
     * 保存svga 数据
     */
    useDBCache?: boolean;
    /**
     * 启用bitmap代替base64 worker模式下必须true 会根据实际环境自动判断
     */
    useBitmap?: boolean;
    /**
     * 启用离屏 worker模式下必须true 会根据实际环境自动判断
     */
    useOffscreenCanvas?: boolean;
    /**
     * 日志打印级别
     */
    logLevel?: LogTypes;
    /**
     * fetch请求额外选项，参考：RequestInit
     */
    fetchOption?: any;
    /**
     * 播放超时开关
     */
    checkTimeout?: boolean;
    /**
     * 播放结束后 是否删除画面
     * @default true
     */
    clearAfterStop?: boolean;
    /**
     * 是否显示播放状态
     * @default true
     */
    showPlayerInfo?: boolean;
    smooth?: boolean;
    /**
     * 获取配置内容
     * onGetConfig
     */
    onGetConfig?: (op: any, options: ESvgaParamsI) => void;
    /**
     * resizeCanvas
     * 设置 canvas大小
     * @options percent 为 width 100% height 100%
     * @options percentW 为 width 100%
     * @options percentH 为 height 100%
     * @options size 为 原尺寸
     * @default percent
     */
    resizeCanvas?: ResizeCanvasType;
    delayDestroyGap?: number;
}
type Override<What, With> = Omit<What, keyof With> & With;
type ESvgaI = Override<Required<ESvgaParamsI>, {
    logLevel?: LogTypes;
    onGetConfig?: (op: ESvgaI & PlayerClassEventsI, options: ESvgaParamsI) => void;
}>;
type EventCallback = undefined | ((...args: any) => void);
interface PlayerClassEventsI {
    onStart?: EventCallback;
    onResume?: EventCallback;
    onPause?: EventCallback;
    onStop?: EventCallback;
    onProcess?: EventCallback;
    onLoopCount?: EventCallback;
    onEnd?: EventCallback;
    onBeforeEnd?: EventCallback;
    onError?: EventCallback;
}
interface PlayerClassI extends PlayerClassEventsI {
    beforeStart: EventCallback;
    setup(): Promise<void>;
    start: () => void;
    resume: () => void;
    pause: () => void;
    stop: () => void;
    clear: () => void;
    destroy: () => void;
    stepToFrame: (frame: number, andPlay: boolean) => void;
    setWindowState: (state: WINDOW_VISIBLE_STATE) => void;
    getBitmapsCache(): Promise<BitmapsCache>;
    addSwapImageText: GetClassFn<SwrapExtension>['addSwapImageText'];
    addSwapImage: GetClassFn<SwrapExtension>['addSwapImage'];
    addSwapImageList: GetClassFn<SwrapExtension>['addSwapImageList'];
    addSwapSvga: GetClassFn<SwrapExtension>['addSwapSvga'];
    grayImage: GetClassFn<SwrapExtension>['grayImage'];
}
type GetClassFn<T> = {
    [P in keyof T]: T[P];
};

declare function svgaPlayer(options: ESvgaParamsI & PlayerClassEventsI): Promise<PlayerClassI>;
declare const version: string;
declare const mode: string;

type SvgaPlayerType = PlayerClassI;
type SvgaPlayerOptionsType = ESvgaParamsI & PlayerClassEventsI;

export { type SvgaPlayerOptionsType, type SvgaPlayerType, svgaPlayer as default, mode, svgaPlayer, version };
