(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];

(lib.AnMovieClip = function(){
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function(positionOrLabel){
        cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
    }
    this.play = function(){
        cjs.MovieClip.prototype.play.call(this);
    }
    this.gotoAndStop = function(positionOrLabel){
        cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
    }
    this.stop = function(){
        cjs.MovieClip.prototype.stop.call(this);
    }
}).prototype = p = new cjs.MovieClip();
// symbols:

(lib.blackpapertexture = function() {
    this.initialize(img.blackpapertexture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3888,2592);

(lib.bluesq = function() {
    this.initialize(img.bluesq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,136);

(lib.chin = function() {
    this.initialize(img.chin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,532,951);

(lib.goldlong = function() {
    this.initialize(img.goldlong);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,1447);

(lib.goldmed = function() {
    this.initialize(img.goldmed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,824,185);

(lib.goldsm = function() {
    this.initialize(img.goldsm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,586,169);

(lib.hairdark = function() {
    this.initialize(img.hairdark);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,539,1129);

(lib.hairlight = function() {
    this.initialize(img.hairlight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,1003);

(lib.hand = function() {
    this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,594,1162);

(lib.momeyel = function() {
    this.initialize(img.momeyel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,1286);

(lib.momeyer = function() {
    this.initialize(img.momeyer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,656,1275);

(lib.mouth = function() {
    this.initialize(img.mouth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1224,665);

(lib.nose = function() {
    this.initialize(img.nose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,729,540);

(lib.skin1 = function() {
    this.initialize(img.skin1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,192);

(lib.skin2 = function() {
    this.initialize(img.skin2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,193);// helper functions:

function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
    }

(lib.skin2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.skin1();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skin2_1, new cjs.Rectangle(0,0,26.8,27.3), null);

(lib.skin1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.skin2();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skin1_1, new cjs.Rectangle(0,0,26.2,27.5), null);

(lib.nose_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.nose();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose_1, new cjs.Rectangle(0,0,103.8,76.9), null);

(lib.mouth_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.mouth();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth_1, new cjs.Rectangle(0,0,174.2,94.7), null);

(lib.hand_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.hand();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand_1, new cjs.Rectangle(0,0,84.6,165.4), null);

(lib.hairlight_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.hairlight();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hairlight_1, new cjs.Rectangle(0,0,81.7,142.8), null);

(lib.hairdark_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.hairdark();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hairdark_1, new cjs.Rectangle(0,0,76.7,160.7), null);

(lib.goldsmall = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.goldsm();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goldsmall, new cjs.Rectangle(0,0,83.4,24.1), null);

(lib.goldmed_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.goldmed();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goldmed_1, new cjs.Rectangle(0,0,117.3,26.4), null);

(lib.goldlong_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.goldlong();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.goldlong_1, new cjs.Rectangle(0,0,26.4,205.9), null);

(lib.eyer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.momeyer();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyer, new cjs.Rectangle(0,0,93.4,181.5), null);

(lib.eyel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.momeyel();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyel, new cjs.Rectangle(0,0,60.4,183), null);

(lib.chin_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.chin();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chin_1, new cjs.Rectangle(0,0,75.7,135.4), null);

(lib.bluetile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    // Layer_1
    this.instance = new lib.bluesq();
    this.instance.setTransform(0,0,1.0165,1.0165);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bluetile, new cjs.Rectangle(0,0,20.9,19.4), null);

// stage content:
(lib.momface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { loop = false; }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this,[props]);

    this.actionFrames = [0];
    this.isSingleFrame = false;
    // timeline functions:
    this.frame_0 = function() {
        if (this.isSingleFrame) {
            return;
        }
        if (this.totalFrames == 1) {
            this.isSingleFrame = true;
        }
        var _this = this;

        // Combined drag + double-tap/double-click rotation handler.
        // Uses pressup + movement distance to detect a "tap" (works reliably
        // on both mouse and touch, unlike the native dblclick/click events).
        function enableDragAndDoubleTap(target) {
            var lastTapTime = 0;
            var startX = 0, startY = 0;
            var moved = false;
            var TAP_MOVE_THRESHOLD = 6; // pixels
            var DOUBLE_TAP_WINDOW = 350; // ms

            target.on('mousedown', function(evt) {
                var offsetX = target.x - evt.stageX;
                var offsetY = target.y - evt.stageY;
                startX = evt.stageX;
                startY = evt.stageY;
                moved = false;

                target.on('pressmove', function(evt) {
                    var dx = evt.stageX - startX;
                    var dy = evt.stageY - startY;
                    if (Math.abs(dx) > TAP_MOVE_THRESHOLD || Math.abs(dy) > TAP_MOVE_THRESHOLD) {
                        moved = true;
                    }
                    target.x = evt.stageX + offsetX;
                    target.y = evt.stageY + offsetY;
                    _this.stage.update();
                });

                target.on('pressup', function(evt) {
                    target.off('pressmove');
                    _this.stage.update();

                    if (!moved) {
                        var currentTime = new Date().getTime();
                        var tapLength = currentTime - lastTapTime;
                        if (tapLength < DOUBLE_TAP_WINDOW && tapLength > 0) {
                            target.rotation += 90;
                            _this.stage.update();
                            lastTapTime = 0;
                        } else {
                            lastTapTime = currentTime;
                        }
                    }
                });
            });
        }

        // Apply to all pieces
        enableDragAndDoubleTap(_this.hairdark);
        enableDragAndDoubleTap(_this.bluesq);
        enableDragAndDoubleTap(_this.eyer);
        enableDragAndDoubleTap(_this.eyel);
        enableDragAndDoubleTap(_this.nose);
        enableDragAndDoubleTap(_this.chin);
        enableDragAndDoubleTap(_this.hairlight);
        enableDragAndDoubleTap(_this.goldlong);
        enableDragAndDoubleTap(_this.goldmed);
        enableDragAndDoubleTap(_this.goldsm);
        enableDragAndDoubleTap(_this.skin1);
        enableDragAndDoubleTap(_this.skin2);
        enableDragAndDoubleTap(_this.hand);
        enableDragAndDoubleTap(_this.mouth);
    }

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

    // Layer_1
    this.eyer = new lib.eyer();
    this.eyer.name = "eyer";
    this.eyer.setTransform(374.3,143.15,1,1,0,0,0,46.6,90.7);

    this.chin = new lib.chin_1();
    this.chin.name = "chin";
    this.chin.setTransform(453.1,341.35,1,1,0,0,0,37.9,67.7);

    this.goldmed = new lib.goldmed_1();
    this.goldmed.name = "goldmed";
    this.goldmed.setTransform(432.25,260.5,1,1,0,0,0,58.6,13.2);

    this.mouth = new lib.mouth_1();
    this.mouth.name = "mouth";
    this.mouth.setTransform(328.1,356.4,1,1,0,0,0,87.1,47.3);

    this.nose = new lib.nose_1();
    this.nose.name = "nose";
    this.nose.setTransform(319.65,272.3,1,1,0,0,0,51.9,38.4);

    this.goldsm = new lib.goldsmall();
    this.goldsm.name = "goldsm";
    this.goldsm.setTransform(199.3,226.35,1,1,0,0,0,41.7,12);

    this.skin2 = new lib.skin2_1();
    this.skin2.name = "skin2";
    this.skin2.setTransform(254.3,295.5,1,1,0,0,0,13.3,13.7);

    this.skin1 = new lib.skin1_1();
    this.skin1.name = "skin1";
    this.skin1.setTransform(254.1,268.05,1,1,0,0,0,13.1,13.7);

    this.bluesq = new lib.bluetile();
    this.bluesq.name = "bluesq";
    this.bluesq.setTransform(384.15,299.45,1,1,0,0,0,10.5,9.7);

    this.goldlong = new lib.goldlong_1();
    this.goldlong.name = "goldlong";
    this.goldlong.setTransform(314.55,131,1,1,0,0,0,13.2,103);

    this.hairdark = new lib.hairdark_1();
    this.hairdark.name = "hairdark";
    this.hairdark.setTransform(453.6,166.95,1,1,0,0,0,38.4,80.3);
    new cjs.ButtonHelper(this.hairdark, 0, 1, 1);

    this.hairlight = new lib.hairlight_1();
    this.hairlight.name = "hairlight";
    this.hairlight.setTransform(200.2,143,1,1,0,0,0,40.9,71.4);

    this.eyel = new lib.eyel();
    this.eyel.name = "eyel";
    this.eyel.setTransform(271.2,142.4,1,1,0,0,0,30.2,91.5);

    this.hand = new lib.hand_1();
    this.hand.name = "hand";
    this.hand.setTransform(198.65,321.1,1,1,0,0,0,42.2,82.7);

    this.instance = new lib.blackpapertexture();
    this.instance.setTransform(-63,-9,0.9923,0.9923);

    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.hand},{t:this.eyel},{t:this.hairlight},{t:this.hairdark},{t:this.goldlong},{t:this.bluesq},{t:this.skin1},{t:this.skin2},{t:this.goldsm},{t:this.nose},{t:this.mouth},{t:this.goldmed},{t:this.chin},{t:this.eyer}]}).wait(1));

    this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(257,241,451.6,264.4);

// library properties:
lib.properties = {
    id: '060A16C0A3BB4DD6B433BF9BB0BEF053',
    width: 640,
    height: 500,
    fps: 24,
    color: "#333333",
    opacity: 1.00,
    manifest: [
        {src:"blackpapertexture.jpg", id:"blackpapertexture"},
        {src:"bluesq.png", id:"bluesq"},
        {src:"chin.png", id:"chin"},
        {src:"goldlong.png", id:"goldlong"},
        {src:"goldmed.png", id:"goldmed"},
        {src:"goldsm.png", id:"goldsm"},
        {src:"hairdark.png", id:"hairdark"},
        {src:"hairlight.png", id:"hairlight"},
        {src:"hand.png", id:"hand"},
        {src:"momeyel.png", id:"momeyel"},
        {src:"momeyer.png", id:"momeyer"},
        {src:"mouth.png", id:"mouth"},
        {src:"nose.png", id:"nose"},
        {src:"skin1.png", id:"skin1"},
        {src:"skin2.png", id:"skin2"}
    ],
    preloads: []
};

// bootstrap callback support:

(lib.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
}

an.bootstrapCallback = function(fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
        for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
            fnCallback(an.bootcompsLoaded[i]);
        }
    }
};

an.compositions = an.compositions || {};
an.compositions['060A16C0A3BB4DD6B433BF9BB0BEF053'] = {
    getStage: function() { return exportRoot.stage; },
    getLibrary: function() { return lib; },
    getSpriteSheet: function() { return ss; },
    getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
        an.bootstrapListeners[j](id);
    }
}

an.getComposition = function(id) {
    return an.compositions[id];
}

an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {        
    var lastW, lastH, lastS=1;        
    window.addEventListener('resize', resizeCanvas);        
    resizeCanvas();        
    function resizeCanvas() {            
        var w = lib.properties.width, h = lib.properties.height;            
        var iw = window.innerWidth, ih=window.innerHeight;            
        var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;            
        if(isResp) {                
            if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                sRatio = lastS;                
            }                
            else if(!isScale) {                    
                if(iw<w || ih<h)                        
                    sRatio = Math.min(xRatio, yRatio);                
            }                
            else if(scaleType==1) {                    
                sRatio = Math.min(xRatio, yRatio);                
            }                
            else if(scaleType==2) {                    
                sRatio = Math.max(xRatio, yRatio);                
            }            
        }
        domContainers[0].width = w * pRatio * sRatio;            
        domContainers[0].height = h * pRatio * sRatio;
        domContainers.forEach(function(container) {                
            container.style.width = w * sRatio + 'px';                
            container.style.height = h * sRatio + 'px';            
        });
        stage.scaleX = pRatio * sRatio;            
        stage.scaleY = pRatio * sRatio;
        lastW = iw; lastH = ih; lastS = sRatio;            
        stage.tickOnUpdate = false;            
        stage.update();            
        stage.tickOnUpdate = true;        
    }
}

an.handleSoundStreamOnTick = function(event) {
    if (!event.paused) {
        var stageChild = stage.getChildAt(0);
        if (!stageChild.paused || stageChild.ignorePause) {
            stageChild.syncStreamSounds();
        }
    }
}

an.handleFilterCache = function(event) {
    if (!event.paused) {
        var target = event.target;
        if (target) {
            if (target.filterCacheList) {
                for (var index = 0; index < target.filterCacheList.length; index++) {
                    var cacheInst = target.filterCacheList[index];
                    if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
                        cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                    }
                }
            }
        }
    }
}

})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
// JavaScript Document
