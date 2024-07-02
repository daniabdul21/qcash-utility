import { LiquidityFileFormat, LiquidityTaskStatus, LiquidityTaskStep } from "./enum";
import { ApiResponse, QueryParams } from "../app";
import { TaskActionEnum } from "../digi-guarantee/enum";
import { TransactionWorkflow } from "../workflow";
declare namespace LiquidityTypes {
    interface CashPoolingParams extends QueryParams {
        step: keyof typeof LiquidityTaskStep;
        status: keyof typeof LiquidityTaskStatus;
        fileFormat?: keyof typeof LiquidityFileFormat;
    }
    interface Task {
        taskID: string;
        type: string;
        status: keyof typeof LiquidityTaskStatus;
        step: keyof typeof LiquidityTaskStep;
        featureID: string;
        lastApprovedByID: string;
        lastRejectedByID: string;
        lastApprovedByName: string;
        lastRejectedByName: string;
        createdByName: string;
        updatedByName: string;
        reasons: string;
        comment: string;
        companyID: string;
        holdingID: string;
        createdAt: Date;
        updatedAt: Date;
    }
    interface QueueBA {
        liquidityCode: string;
        companyID: string;
        schemeType: string;
        cashflowType: string;
        priority: number;
        description?: string;
        scheduleID?: string;
    }
    interface Queue {
        cashflowType: string;
        companyID: string;
        description: string;
        executed: boolean;
        liquidityCode: string;
        priority: number;
        scheduleID: string;
        schemeType: string;
    }
    interface DetailTransactionsHistory {
        statusMessage: string;
        sourceAlias: string;
        beneficiaryAlias: string;
        transactionId: string;
        transactionTime: string;
        sourceAccount: string;
        beneficiaryAccount: string;
        transferAmount: string;
        transactionFee: string;
        remark: string;
        status: string;
        currency: string;
    }
    interface Currency {
        code: string;
        name: string;
        currencyID: string;
    }
    interface CashFlow {
        cashflowID: string;
        cashflowType: string;
        period: string;
        periodTimes: string[];
        TBAType: string;
        TBAValue: number;
        TBARoundedBase: number;
        TBATopValue: number;
        TBABottomValue: number;
        recurring: boolean;
        recurringValue: string;
        recurringDate: string;
        recurringDays: string;
        source: CashFlowAccount[];
        beneficiary: CashFlowAccount[];
    }
    interface CashFlowSourceAccount {
        TBAValue: number;
        accountID: string;
        accountAlias: string;
        accountNumber: string;
        TBAFillDefisit: boolean;
        TBAFillToTop: boolean;
        remark: string;
    }
    interface CashFlowAccount {
        TBAValue: number;
        accountID: string;
        accountAlias: string;
        accountNumber: string;
        TBAFillDefisit: boolean;
        TBAFillToTop: boolean;
        remark: string;
        id?: string;
    }
    interface CashFlowBeneficiaryAccount {
        accountID: string;
        accountAlias: string;
        accountNumber: string;
        TBAValue: number;
        remark: string;
        TBAFillDefisit: boolean;
        TBAFillToTop: boolean;
    }
    interface CashPoolingData {
        cashflow: CashFlow[];
        code: string;
        company: {
            companyID: string;
            name: string;
            companyCode?: string;
        };
        companyGroup: {
            companyGroupID: string;
            name: string;
        };
        currency: Currency;
        description: string;
        endDate: Date;
        isActive: boolean;
        liquidityID: string;
        makerType: string;
        request: string;
        schemeType: string;
        startDate: Date;
        status: string;
        priority?: number;
    }
    interface Participant {
        approvedAt: Date | null;
        isReject: boolean;
        roleID: string;
        step: string;
        userID: string;
        username: string;
    }
    interface Role {
        Requirement: number;
        approvedCount: number;
        participants: Participant[];
        rejectedCount: number;
    }
    interface Flow {
        approver: Role;
        completedAt: Date | null;
        isRejected: boolean;
        releaser: Role;
        verifier: Role;
        workflowLogicID: string;
    }
    interface Workflow {
        nextStatus: string;
        nextStep: string;
        workflow: {
            createdAt: Date;
            createdBy: {
                userID: string;
                username: string;
            };
            currentRoleIDs: string[];
            currentStep: string;
            header: {
                companyID: string;
                companyName: string;
                currencyID: string;
                currencyName: string;
                productID: string;
                productName: string;
                transactionalNumber: string;
                workflowID: string;
            };
            isDefault: boolean;
            isTransactional: boolean;
            records: {
                bottomRange: string;
                flows: Flow[];
                lastUpdatedAt: Date;
                topRange: string;
            };
        };
    }
    interface CashPoolingTask {
        task: Task;
        data: CashPoolingData;
        workflow: TransactionWorkflow.Root;
    }
    interface TBAValue {
        id: "string";
        schemaType: "string";
        cashFlowType: "string";
        name: "string";
        mechanism: "string";
    }
    interface ValidateDate {
        availableDates: string[];
        availableDays: string[];
        availableMonth: string[];
    }
    interface UpdateTaskPayload {
        taskID: string;
        action: TaskActionEnum;
        reasons?: string;
        comment?: string;
        passCode?: string;
    }
    interface CreateTaskPayload {
        company_group_id: number;
        company_id: number;
        currency_id: number;
        scheme_type: string;
        description?: string;
        code: string;
        cash_flow: {
            cash_flow_type: string;
            period: string;
            period_times: string[];
            tba_type: string;
            tba_value: number;
            tba_top_value: number;
            tba_bottom_value: number;
            tba_rounded_base: number;
            recurring: boolean;
            recurring_value: string;
            recurring_date: number;
            recurring_days: number;
            source: {
                accountID?: number;
                accountAlias?: string;
                TBAValue?: number;
                remark?: string;
                TBAFillDefisit?: boolean;
                TBAFillToTop?: boolean;
            }[];
            beneficiary: {
                accountID?: number;
                accountAlias?: string;
                TBAValue?: number;
                remark?: string;
                TBAFillDefisit?: boolean;
                TBAFillToTop?: boolean;
            }[];
        }[];
        start_date: string;
        end_date: string;
        is_draft: boolean;
        is_active: boolean;
        pass_code?: string;
    }
    interface CreateTaskResponse extends Omit<ApiResponse, "data" | "pagination"> {
        featureID: string;
    }
    interface DetailTransactionParams extends QueryParams {
        taskID: string;
    }
    type ObjectSummary = {
        title: string;
        TBAType: boolean;
        mapItem: CashFlowSourceAccount[] | CashFlowBeneficiaryAccount[];
    };
}
export type { LiquidityTypes };
