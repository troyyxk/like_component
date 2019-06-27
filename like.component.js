"use strict";
exports.__esModule = true;
var Like = /** @class */ (function () {
    function Like(_count, _lighted) {
        this._count = _count;
        this._lighted = _lighted;
    }
    Like.prototype.onClick = function () {
        this._count += this._lighted ? -1 : 1;
        // this._count = this._lighted ? ++this._count : --this._count; // not sure about thisd logic on the ++ and --, ok, but cant be better, by better I mean more clears
        this._lighted = !this._lighted;
    };
    return Like;
}());
exports.Like = Like;
