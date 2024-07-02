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
exports.TaskAction = void 0;
var utilities_1 = require("@/utilities");
var custom_axios_1 = __importDefault(require("./custom-axios"));
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var TaskAction;
(function (TaskAction) {
    TaskAction["Approve"] = "approve";
    TaskAction["Reject"] = "reject";
    TaskAction["Rework"] = "rework";
    TaskAction["Cancel"] = "cancel";
    TaskAction["Delete"] = "delete";
    TaskAction["DeleteRequest"] = "delete";
    TaskAction["Submit"] = "submit";
    TaskAction["All"] = "All";
})(TaskAction || (exports.TaskAction = TaskAction = {}));
var AnnouncementService = function (baseURL, token) {
    var headersProductID = function (productID) {
        return {
            "Grpc-Metadata-Product-Id": productID,
        };
    };
    var getAnnouncements = function (params, pagination, isActiveOnly) { return __awaiter(void 0, void 0, void 0, function () {
        var paramsAnnouncement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    paramsAnnouncement = {};
                    if (params) {
                        paramsAnnouncement = (0, utilities_1.prefixObj)(params, "announcement.");
                    }
                    return [4 /*yield*/, custom_axios_1.default.get("/announcement/data", {
                            params: __assign(__assign(__assign({}, paramsAnnouncement), pagination), { isActiveOnly: isActiveOnly }),
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getDownload = function (url, params, pagination, isActiveOnly) {
        var paramsAnnouncement = {};
        if (params) {
            paramsAnnouncement = (0, utilities_1.prefixObj)(params, "announcement.");
        }
        return custom_axios_1.default
            .get("/announcement/task/file/".concat(url), {
            params: __assign(__assign(__assign({}, paramsAnnouncement), pagination), { isActiveOnly: isActiveOnly }),
        })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            var anchor = document.createElement("a");
            var maxSizeForBase64 = 1048576; //1024 * 1024
            var windowUrl = window.URL || window.webkitURL;
            if (response.data.length < maxSizeForBase64 && typeof windowUrl.createObjectURL === "function") {
                var blob = new Blob([response.data], { type: "text/bin" });
                var link = windowUrl.createObjectURL(blob);
                anchor.setAttribute("href", link);
                anchor.setAttribute("download", "announcements.".concat(url));
                anchor.click();
                windowUrl.revokeObjectURL(link);
            }
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getTaskFromAnnouncement = function (announcementID) { return __awaiter(void 0, void 0, void 0, function () {
        var response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    response = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, custom_axios_1.default.get("/task?task.type=Announcement&task.featureID=".concat(announcementID))];
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
    var getAnnouncementTask = function (params) {
        return custom_axios_1.default
            .get("/announcement/task", {
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
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getAnnouncementGraph = function (params) {
        return custom_axios_1.default
            .get("/announcement/graph", {
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
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getAnnouncementEvents = function () {
        return custom_axios_1.default
            .get("announcement/events")
            .then(function (response) {
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getAnnouncement = function (taskID) {
        return custom_axios_1.default
            .get("announcement/task/".concat(taskID))
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getAnnouncementData = function (params) {
        return custom_axios_1.default
            .get("/announcement/data", { params: params })
            .then(function (response) {
            if (response.status !== 200) {
                return;
            }
            return response.data.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var storeAnnouncement = function (params, isDraft) {
        return custom_axios_1.default
            .post("announcement/task", { isDraft: isDraft, data: params })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var postAnnouncement = function (payload) {
        return custom_axios_1.default
            .post("announcement/task", payload)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var changeStatusAnnouncement = function (taskID) {
        return custom_axios_1.default
            .post("announcement/status/".concat(taskID), {
            taskID: taskID,
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var updateAnnouncement = function (TaskID, params, isDraft) {
        return custom_axios_1.default
            .post("announcement/task/edit/".concat(TaskID), { isDraft: isDraft, data: params })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                return Promise.reject(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response.data;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var putAnnouncement = function (taskID, payload) {
        return custom_axios_1.default
            .post("announcement/task/edit/".concat(taskID), payload)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var putTaskAnnouncement = function (taskId, action, reasons, comment) {
        return custom_axios_1.default
            .post("/task/".concat(taskId, "/ev"), {
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
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var deleteTaskAnnouncement = function (taskID) {
        return custom_axios_1.default
            .post("/announcement/task/delete/".concat(taskID), {
            taskID: taskID,
        })
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            var _a;
            console.error("error from server: " + error);
            return Promise.reject((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.data);
        });
    };
    var getAnnouncementTaskV2 = function (params) {
        var page = params.page, limit = params.limit, query = params.query, filter = params.filter, sort = params.sort, dir = params.dir;
        return custom_axios_1.default
            .get("announcement/v2/task?".concat(filter), {
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
    var downloadTableAnnouncement = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get("/announcement/v2/task/file/".concat(format).concat(filter).concat(sort).concat(dir), {
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
    var getActivityLogs = function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, search, filter, split;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = params.page, limit = params.limit, search = params.search, filter = params.filter;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/announcement", {
                            page: page,
                            limit: limit,
                            search: search,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            return response.data;
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
    var bulkUpdateTaskAnnouncement = function (payload) {
        return custom_axios_1.default
            .post("task/v2/workflow/ev", payload, {
            headers: headersProductID(payload === null || payload === void 0 ? void 0 : payload.productID),
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200 || response.data.error) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                error: false,
                message: "",
                data: response.data.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var getAnnouncementTaskMeCreatedApproved = function () {
        return custom_axios_1.default
            .get("/announcement/v2/created-approved")
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
    return {
        getAnnouncements: getAnnouncements,
        getAnnouncementTask: getAnnouncementTask,
        getAnnouncementGraph: getAnnouncementGraph,
        getAnnouncementTaskMeCreatedApproved: getAnnouncementTaskMeCreatedApproved,
        postAnnouncement: postAnnouncement,
        putAnnouncement: putAnnouncement,
        putTaskAnnouncement: putTaskAnnouncement,
        deleteTaskAnnouncement: deleteTaskAnnouncement,
        storeAnnouncement: storeAnnouncement,
        updateAnnouncement: updateAnnouncement,
        getAnnouncement: getAnnouncement,
        getAnnouncementEvents: getAnnouncementEvents,
        getDownload: getDownload,
        getTaskFromAnnouncement: getTaskFromAnnouncement,
        getAnnouncementData: getAnnouncementData,
        getAnnouncementTaskV2: getAnnouncementTaskV2,
        downloadTableAnnouncement: downloadTableAnnouncement,
        getActivityLogs: getActivityLogs,
        changeStatusAnnouncement: changeStatusAnnouncement,
        bulkUpdateTaskAnnouncement: bulkUpdateTaskAnnouncement,
    };
};
exports.default = AnnouncementService;
//# sourceMappingURL=announcement.js.map