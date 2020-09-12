"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = {
    getUser: function (parent, arg, _a) {
        var models = _a.models, res = _a.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var id, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = arg.id;
                        return [4, models.User.findByPk(id)];
                    case 1: return [2, _b.sent()];
                    case 2:
                        error_1 = _b.sent();
                        throw new Error(error_1);
                    case 3: return [2];
                }
            });
        });
    },
    listUsers: function (parent, arg, _a) {
        var models = _a.models, res = _a.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var limit, offset, error_2;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        limit = arg.limit, offset = arg.offset;
                        _b = {};
                        return [4, models.User.findAll({ order: [['createdAt', 'DESC']], offset: offset, limit: limit })];
                    case 1: return [2, (_b.items = _c.sent(), _b)];
                    case 2:
                        error_2 = _c.sent();
                        throw new Error(error_2);
                    case 3: return [2];
                }
            });
        });
    },
    posts: function (user, _, _a) {
        var models = _a.models, res = _a.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var error_3;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = {};
                        return [4, models.Post.findAll({ where: { userId: user.id }, order: [['createdAt', 'DESC']] })];
                    case 1: return [2, (_b.items = _c.sent(), _b)];
                    case 2:
                        error_3 = _c.sent();
                        throw new Error(error_3);
                    case 3: return [2];
                }
            });
        });
    },
    comments: function (user, _, _a) {
        var models = _a.models, res = _a.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var error_4;
            var _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = {};
                        return [4, models.Comment.findAll({ where: { userId: user.id } })];
                    case 1: return [2, (_b.items = _c.sent(), _b)];
                    case 2:
                        error_4 = _c.sent();
                        throw new Error(error_4);
                    case 3: return [2];
                }
            });
        });
    },
    createUser: function (parent, arg, _a) {
        var models = _a.models, res = _a.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var input, error_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        input = arg.input;
                        return [4, models.User.create(__assign({}, input))];
                    case 1: return [2, _b.sent()];
                    case 2:
                        error_5 = _b.sent();
                        throw new Error(error_5);
                    case 3: return [2];
                }
            });
        });
    },
    updateUser: function (parent, arg, _a) {
        var models = _a.models, res = _a.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var _b, id, input$, error_6;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = arg.input, id = _b.id, input$ = __rest(_b, ["id"]);
                        return [4, models.User.update(__assign({}, input$), { where: { id: id }, returning: true })];
                    case 1: return [2, _c.sent()];
                    case 2:
                        error_6 = _c.sent();
                        throw new Error(error_6);
                    case 3: return [2];
                }
            });
        });
    },
    deleteUser: function (parent, arg, _a) {
        var models = _a.models, res = _a.res;
        return __awaiter(void 0, void 0, void 0, function () {
            var id, error_7;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = arg.input.id;
                        return [4, models.User.destroy({ where: { id: id } })];
                    case 1: return [2, _b.sent()];
                    case 2:
                        error_7 = _b.sent();
                        throw new Error(error_7);
                    case 3: return [2];
                }
            });
        });
    },
};
exports.default = UserService;
