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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var UserService = function (baseURL, token) {
    //**********************
    // User
    //**********************
    var getUsers = function () {
        return custom_axios_1.default
            .get("user")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUsersData = function (idType, dir) {
        if (dir === void 0) { dir = "DESC"; }
        return custom_axios_1.default
            .get("user/data?user.idType=".concat(idType, "&dir=").concat(dir))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getTaskFromUser = function (TaskID) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    response = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/task?task.type=User&task.featureID=".concat(TaskID))];
                case 2:
                    response = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, error_1];
                case 4: return [2 /*return*/, response];
            }
        });
    }); };
    var getUserTasks = function (params) {
        return custom_axios_1.default
            .get("user/task", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserTask = function (taskID) {
        return custom_axios_1.default
            .get("user/task/".concat(taskID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserTaskMeCreatedBy = function () {
        return custom_axios_1.default
            .get("user/task/me/created-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserTaskMeApprovedBy = function () {
        return custom_axios_1.default
            .get("user/task/me/approved-by")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getUserRole = function () {
        return custom_axios_1.default
            .get("user-role")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var postUserTask = function (params, isDraft) {
        return custom_axios_1.default
            .post("user/v2/task", { isDraft: isDraft, data: params })
            .then(function (response) {
            var _a, _b;
            if (response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.error) {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response);
        });
    };
    var putTaskUser = function (taskId, action, reasons, comment) {
        if (reasons === void 0) { reasons = null; }
        if (comment === void 0) { comment = null; }
        return custom_axios_1.default
            .post("/task/".concat(taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.log("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var putUserTask = function (taskID, params, isDraft) {
        return custom_axios_1.default
            .post("user/task/".concat(taskID), { isDraft: isDraft, data: params })
            .then(function (response) {
            var _a, _b;
            if (response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.error) {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response);
        });
    };
    var deleteUserTask = function (taskID) {
        return custom_axios_1.default
            .post("user/task/delete/".concat(taskID), {
            TaskID: taskID,
        })
            .then(function (response) {
            var _a, _b;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.error) {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    // GET USER DETAIL BY COMPANY ID & USERNAME
    var getUserDetailV2 = function (companyID, username) {
        return custom_axios_1.default
            .post("user/v2/detail-user", { companyID: companyID, username: username })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            if (!response.data.data) {
                throw new Error(response.data.responseMessage);
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error.response.data);
        });
    };
    //**********************
    // External
    //**********************
    var getUsersAuthority = function (body) {
        return custom_axios_1.default
            .post("role/authority/user", body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/User", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getUserTasksV2 = function (params) {
        return custom_axios_1.default
            .get("user/task/hold", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserTasksV3 = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        return custom_axios_1.default
            .get("user/v3/task/hold?".concat(filter), {
            params: {
                page: page,
                limit: limit,
                query: query,
                sort: sort,
                dir: dir,
            },
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserTasksHistory = function (params) {
        return custom_axios_1.default
            .get("user/task/history", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserTasksHistoryV3 = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        return custom_axios_1.default
            .get("user/v3/task/history?".concat(filter), {
            params: {
                page: page,
                limit: limit,
                query: query,
                sort: sort,
                dir: dir,
            },
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserByTaskID = function (taskID) {
        return custom_axios_1.default
            .get("user/v2/task/".concat(taskID))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserPendingTask = function (params) {
        return custom_axios_1.default
            .get("/task/normal", { params: params })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            response.data.data = response.data.data.map(function (item) {
                if (item.task && item.task.createdByName === "") {
                    item.task.createdByName = "-";
                }
                if (item.task && item.task.lastApprovedByName === "") {
                    item.task.lastApprovedByName = "-";
                }
                if (item.task && item.task.lastRejectedByName === "") {
                    item.task.lastRejectedByName = "-";
                }
                if (item.task && item.task.updatedByName === "") {
                    item.task.updatedByName = "-";
                }
                return item;
            });
            return {
                data: response.data.data,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserTaskMeCreatedUpdatedBy = function (params) {
        return custom_axios_1.default
            .get("user/v2/task/me/created-or-updated-by", { params: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUserTaskMeCreatedApproved = function (currentTable) {
        return custom_axios_1.default
            .get("/user/v2/approved-created?currentTable=".concat(currentTable))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getRoleUserType = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .get("role/user-type")
                        .then(function (response) {
                        var _a;
                        if (response.status !== 200) {
                            throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        return response.data.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.error("error from server: " + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getCompanyUsersLimit = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .get("user/v2/limit/me")
                        .then(function (response) {
                        var _a;
                        if (response.status !== 200) {
                            throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        return response.data.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.error("error from server: " + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var putTaskUserV2 = function (taskId, action, reasons, comment) {
        return custom_axios_1.default
            .post("/user/v2/task/action/".concat(taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            var _a;
            if (!response || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var putUserTaskV2 = function (taskID, data) {
        return custom_axios_1.default
            .post("user/v2/task/".concat(taskID), data)
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var changeStatusUser = function (username, props) {
        return custom_axios_1.default
            .post("user/v2/status/".concat(username), props)
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var resetPassword = function (props) {
        return custom_axios_1.default
            .post("user/v2/reset-password", props)
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var deleteUserTaskV2 = function (taskID) {
        return custom_axios_1.default
            .post("/user/v2/task/action/".concat(taskID), {
            action: "delete",
            reasons: "",
            comment: "",
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var downloadTableUser = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/user/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("User", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var downloadTableUserApproved = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/user/v2/task/approved/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("User", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var downloadTableUserV3 = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/user/v3/task/hold/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("User", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var downloadTableUserApprovedV3 = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/user/v3/task/history/file/".concat(format).concat(filter).concat(sort).concat(dir), {
            responseType: "blob",
        })
            .then(function (response) {
            var _a;
            if (response.data.error || response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("User", ".").concat(format), content);
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getActivityLogsV2 = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/userv2", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })
                            .catch(function (error) {
                            var _a;
                            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    //**********************
    // BRICAMS SVC (BULBASAUR)
    //**********************
    var getUsersBricamsDetail = function (username) {
        return custom_axios_1.default
            .post("user/bricams-svc/detail", { username: username })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            if (!response.data.data) {
                throw new Error(response.data.responseMessage);
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var getUsersBricamsDetailv2 = function (username) {
        return custom_axios_1.default
            .post("user/bricams-svc/detailv2", { username: username })
            .then(function (response) {
            if (response.status !== 200) {
                throw new Error("Error");
            }
            if (!response.data.data) {
                throw new Error(response.data.responseMessage);
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    var validateUserNik = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, custom_axios_1.default
                        .post("/user/validate-nik", {
                        accountNikNumber: params,
                    })
                        .then(function (response) {
                        var _a, _b;
                        if (response.status !== 200) {
                            throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
                        }
                        if (response.data.error) {
                            throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
                        }
                        return response.data;
                    })
                        .catch(function (error) {
                        var _a;
                        console.log("there is error on" + error);
                        return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Server Error" });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getRoleData = function (userTypeID, idCompany) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, custom_axios_1.default
                    .get("role/data?role.userTypeID=".concat(userTypeID, "&role.companyID=").concat(idCompany, "&dir=DESC&page=1&limit=-1"))
                    .then(function (response) {
                    if (response.status !== 200) {
                        return;
                    }
                    return response.data.data;
                })
                    .catch(function (error) {
                    var _a;
                    return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
                })];
        });
    }); };
    var postUserTaskV2 = function (data) {
        return custom_axios_1.default
            .post("user/v2/task", data)
            .then(function (response) {
            var _a, _b;
            if (response.status !== 200) {
                throw new Error(((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            if (response.data.error) {
                throw new Error(((_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    //For data filter Table
    var getUserTasksFilter = function (params) {
        return custom_axios_1.default
            .get("user/task/hold", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            var data = response.data.data.map(function (item) { return (__assign(__assign(__assign({}, item.task), item.user.user), { status: item.task.status, userStatus: item.user.user.status })); });
            return data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    //for Data Filter Table
    var getUserTasksHistoryFilter = function (params) {
        return custom_axios_1.default
            .get("user/task/history", {
            params: params,
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            var data = response.data.data.map(function (item) { return (__assign(__assign(__assign({}, item.task), item.user.user), { status: item.task.status, userStatus: item.user.user.status })); });
            return data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject(((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data) || { message: "Internal Server Error" });
        });
    };
    return {
        getActivityLogs: getActivityLogs,
        getActivityLogsV2: getActivityLogsV2,
        getCompanyUsersLimit: getCompanyUsersLimit,
        getRoleData: getRoleData,
        getRoleUserType: getRoleUserType,
        getTaskFromUser: getTaskFromUser,
        getUserByTaskID: getUserByTaskID,
        getUserDetailV2: getUserDetailV2,
        getUserPendingTask: getUserPendingTask,
        getUserRole: getUserRole,
        getUserTask: getUserTask,
        getUserTaskMeApprovedBy: getUserTaskMeApprovedBy,
        getUserTaskMeCreatedApproved: getUserTaskMeCreatedApproved,
        getUserTaskMeCreatedUpdatedBy: getUserTaskMeCreatedUpdatedBy,
        getUserTaskMeCreatedBy: getUserTaskMeCreatedBy,
        getUserTasks: getUserTasks,
        getUserTasksFilter: getUserTasksFilter,
        getUserTasksHistory: getUserTasksHistory,
        getUserTasksHistoryV3: getUserTasksHistoryV3,
        getUserTasksHistoryFilter: getUserTasksHistoryFilter,
        getUserTasksV2: getUserTasksV2,
        getUserTasksV3: getUserTasksV3,
        getUsers: getUsers,
        getUsersBricamsDetail: getUsersBricamsDetail,
        getUsersBricamsDetailv2: getUsersBricamsDetailv2,
        getUsersData: getUsersData,
        postUserTask: postUserTask,
        postUserTaskV2: postUserTaskV2,
        putTaskUser: putTaskUser,
        putTaskUserV2: putTaskUserV2,
        putUserTask: putUserTask,
        putUserTaskV2: putUserTaskV2,
        resetPassword: resetPassword,
        deleteUserTask: deleteUserTask,
        deleteUserTaskV2: deleteUserTaskV2,
        downloadTableUser: downloadTableUser,
        downloadTableUserV3: downloadTableUserV3,
        downloadTableUserApproved: downloadTableUserApproved,
        downloadTableUserApprovedV3: downloadTableUserApprovedV3,
        changeStatusUser: changeStatusUser,
        validateUserNik: validateUserNik,
        getUsersAuthority: getUsersAuthority,
    };
};
exports.default = UserService;
//# sourceMappingURL=user.js.map