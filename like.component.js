"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    Object.defineProperty(Like.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "lighted", {
        get: function () {
            return this._lighted;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
