"use strict";
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
var types_1 = require("@/types");
var downloadjs_1 = __importDefault(require("downloadjs"));
var moment_1 = __importDefault(require("moment"));
var custom_axios_1 = __importDefault(require("./custom-axios"));
var BulkTransferService = function (token, baseURL) {
    var postBulkTransfer = function (body) {
        return custom_axios_1.default
            .post("/bulk-transfer/task", body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var putBulkTransfer = function (taskID, body) {
        return custom_axios_1.default
            .post("/bulk-transfer/task/".concat(taskID), body)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //! GET BULK TRANSFER BY ID
    var getBulkTransfer = function (taskID, params) {
        return custom_axios_1.default
            .get("/bulk-transfer/task/".concat(taskID), {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //! GET ALL TASK BULK TRANSFER
    var getListBulkTransfer = function (params) {
        return custom_axios_1.default
            .get("/bulk-transfer/task", {
            params: params,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
                response: response,
                pagination: response.data.pagination,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    var validateOtp = function (params) {
        return custom_axios_1.default
            .post("/transaction/hard-token-validation", params)
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //! UPDATE ACTION RECENT TASK BULK TRANSFER
    var updateBulkTransferStatus = function (taskId, action, reasons, comment) {
        return custom_axios_1.default
            .post("/bulk-transfer/task/set/".concat(taskId), {
            action: action,
            reasons: reasons,
            comment: comment,
        })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data,
                response: response,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //! GET BULK TRANSFER TOTAL PENDING TASK
    var getBulkTransferPendingTask = function (params) {
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
            console.error("error from server: " + error);
            return Promise.reject(error);
        });
    };
    //! GET ALL ACTIVITY LOGS
    var getActivityLogs = function (type) { return function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, query, _a, filter, split;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    page = params.page, limit = params.limit, query = params.query, _a = params.filter, filter = _a === void 0 ? "," : _a;
                    split = filter.split(",");
                    return [4 /*yield*/, custom_axios_1.default
                            .post("/task/activity-logs/".concat(type), {
                            page: page,
                            limit: limit,
                            search: query,
                            dateFrom: "".concat(split[0]),
                            dateTo: "".concat(split[1]),
                        })
                            .then(function (response) {
                            if (response.status !== 200) {
                                return;
                            }
                            return response.data;
                        })];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    }); }; };
    var submitBulk = function (taskId, isDraft) {
        if (isDraft === void 0) { isDraft = false; }
        return custom_axios_1.default
            .post("/bulk-transfer/task", { taskID: taskId, isDraft: isDraft })
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //! UPDATE TASK BULK TRANSFER
    var updateTask = function (id, payload) {
        if (payload.action === types_1.TransactionFunctionEnum.Create) {
            return submitBulk(id);
        }
        else {
            return updateBulkTransferStatus(id, payload.action, payload.reasons, payload.comment);
        }
    };
    //! DOWNLOAD FILE DATA TABEL
    var downloadDataTable = function (props) {
        var format = props.format, getFilter = props.getFilter, getSort = props.getSort, getDir = props.getDir;
        var filter = "?filter=".concat(getFilter);
        var sort = getSort && getSort !== "" ? "&sort=".concat(getSort) : "";
        var dir = getDir && getDir !== "" ? "&dir=".concat(getDir) : "";
        return custom_axios_1.default
            .get(encodeURI("/bulk-transfer/task/template/".concat(format).concat(filter).concat(sort).concat(dir)), {
            responseType: "blob",
        })
            .then(function (response) {
            var content = response.headers["content-type"];
            (0, downloadjs_1.default)(response.data, "".concat((0, moment_1.default)().format("DD-MM-YYYY"), "_").concat("Bulk", ".").concat(format), content);
        });
    };
    var checkCutOffHoilday = function (time, moduleId) {
        return custom_axios_1.default
            .get("/cut-off/available-time?modulID=".concat(moduleId, "&time=").concat(time))
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return {
                data: response.data,
            };
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //! VALIDASI LIMIT FILE YANG DI UPLOAD
    var getLimitFile = function () {
        return custom_axios_1.default
            .get("/system/key/maximum-upload-size")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    //! GET FORMAT FILE XLS, CLV, XLSX
    var getFileFormat = function () {
        return custom_axios_1.default
            .get("/bulk-transfer/file-upload")
            .then(function (response) {
            var _a;
            if (response.status !== 200) {
                throw new Error(((_a = response.data) === null || _a === void 0 ? void 0 : _a.message) || "Server Error");
            }
            return response;
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return {
        getFileFormat: getFileFormat,
        postBulkTransfer: postBulkTransfer,
        putBulkTransfer: putBulkTransfer,
        updateBulkTransferStatus: updateBulkTransferStatus,
        getActivityLogs: getActivityLogs,
        getBulkTransferPendingTask: getBulkTransferPendingTask,
        getBulkTransfer: getBulkTransfer,
        getListBulkTransfer: getListBulkTransfer,
        submitBulk: submitBulk,
        updateTask: updateTask,
        downloadDataTable: downloadDataTable,
        checkCutOffHoilday: checkCutOffHoilday,
        validateOtp: validateOtp,
        getLimitFile: getLimitFile,
    };
};
exports.default = BulkTransferService;
//# sourceMappingURL=bulk-transfer.js.map