//// [ES3For-ofTypeCheck1.ts]
for (var v of "") { }

//// [ES3For-ofTypeCheck1.js]
var __values = (this && this.__values) || function (o) {
    var i = o.__iterator__ || 0, d;
    return i ? i.call(o) : { next: function () { return { done: d = d || i >= o.length, value: d ? void 0 : o[i++] }; } };
};
var __step = (this && this.__step) || function (r) {
    return !(r.done || (r.done = (r.result = r.iterator.next()).done));
};
var __close = (this && this.__close) || function (r) {
    var m = !(r && r.done) && r.iterator["return"];
    if (m) return m.call(r.iterator);
};
try {
    for (var iterator_1 = { iterator: __values("") }; __step(iterator_1);) {
        var v = iterator_1.result.value;
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try { __close(iterator_1); } finally { if (e_1) throw e_1.error; }
}
var e_1;
