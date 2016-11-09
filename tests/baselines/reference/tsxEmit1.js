//// [file.tsx]
declare module JSX {
	interface Element { }
	interface IntrinsicElements {
		[s: string]: any;
	}
}

var p;
var selfClosed1 = <div />;
var selfClosed2 = <div x="1" />;
var selfClosed3 = <div x='1' />;
var selfClosed4 = <div x="1" y='0' />;
var selfClosed5 = <div x={0} y='0' />;
var selfClosed6 = <div x={"1"} y='0' />;
var selfClosed7 = <div x={p} y='p' />;

var openClosed1 = <div></div>;
var openClosed2 = <div n='m'>foo</div>;
var openClosed3 = <div n='m'>{p}</div>;
var openClosed4 = <div n='m'>{p < p}</div>;
var openClosed5 = <div n='m'>{p > p}</div>;

class SomeClass {
	f() {
		var rewrites1 = <div>{() => this}</div>;
		var rewrites2 = <div>{[p, ...p, p]}</div>;
		var rewrites3 = <div>{{p}}</div>;

		var rewrites4 = <div a={() => this}></div>;
		var rewrites5 = <div a={[p, ...p, p]}></div>;
		var rewrites6 = <div a={{p}}></div>;
	}
}

var whitespace1 = <div>      </div>;
var whitespace2 = <div>  {p}    </div>;
var whitespace3 = <div>  
      {p}    
      </div>;


//// [file.jsx]
var __read = (this && this.__read) || function (o, n) {
    if (!(m = o.__iterator__)) return o;
    var m, i = m.call(o), ar = [], r, e;
    try { while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value); }
    catch (error) { e = { error: error }; }
    finally { try { if (m = !(r && r.done) && i["return"]) m.call(i); } finally { if (e) throw e.error; } }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var p;
var selfClosed1 = <div />;
var selfClosed2 = <div x="1"/>;
var selfClosed3 = <div x='1'/>;
var selfClosed4 = <div x="1" y='0'/>;
var selfClosed5 = <div x={0} y='0'/>;
var selfClosed6 = <div x={"1"} y='0'/>;
var selfClosed7 = <div x={p} y='p'/>;
var openClosed1 = <div></div>;
var openClosed2 = <div n='m'>foo</div>;
var openClosed3 = <div n='m'>{p}</div>;
var openClosed4 = <div n='m'>{p < p}</div>;
var openClosed5 = <div n='m'>{p > p}</div>;
var SomeClass = (function () {
    function SomeClass() {
    }
    SomeClass.prototype.f = function () {
        var _this = this;
        var rewrites1 = <div>{function () { return _this; }}</div>;
        var rewrites2 = <div>{__spread([p], p, [p])}</div>;
        var rewrites3 = <div>{{ p: p }}</div>;
        var rewrites4 = <div a={function () { return _this; }}></div>;
        var rewrites5 = <div a={__spread([p], p, [p])}></div>;
        var rewrites6 = <div a={{ p: p }}></div>;
    };
    return SomeClass;
}());
var whitespace1 = <div>      </div>;
var whitespace2 = <div>  {p}    </div>;
var whitespace3 = <div>  
      {p}    
      </div>;
