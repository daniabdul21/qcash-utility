export declare enum LiquidityTaskStep {
    AllStep = "AllStep",
    Maker = "Maker",
    Checker = "Checker",
    Signer = "Signer",
    Releaser = "Releaser"
}
export declare enum LiquidityTaskStatus {
    AllStatus = "AllStatus",
    Approved = "Approved",
    DeleteRequest = "DeleteRequest",
    Draft = "Draft",
    Pending = "Pending",
    Rejected = "Rejected",
    Returned = "Returned"
}
export declare enum LiquidityFileFormat {
    null = "null",
    pdf = "pdf",
    xls = "xls",
    csv = "csv"
}
export declare enum SchemeType {
    OneTime = "One-Time",
    Sweepback = "Sweepback",
    RollingBased = "rolling-based"
}
export declare enum CashflowType {
    Funding = "Funding",
    Topping = "Topping",
    RollingBased = "Rolling Based"
}
export declare enum CashflowPeriod {
    Daily = "Daily",
    EveryFewDays = "Every Few Days",
    Weekly = "Weekly",
    Monthly = "Monthly"
}
export declare enum SchemeStatus {
    Active = "Active",
    Cancelled = "Cancelled",
    Complete = "Complete",
    Suspended = "Suspended",
    NotScheduled = "NotScheduled"
}
export declare enum SchemesStatusID {
    AllStatus = "0",
    Pending = "1",
    Draft = "2",
    Returned = "3",
    Active = "4",
    Complete = "5",
    Cancelled = "6",
    Suspended = "7",
    NotScheduled = "8",
    Rejected = "9"
}
export declare enum TBAType {
    FixAmount = "Fix Amount",
    ZeroBalance = "Zero Balance",
    FixedBalance = "Fixed Balance",
    Percentage = "Percentage",
    RangedValue = "Ranged Value",
    TargetValue = "Target Value",
    ToppingValue = "Topping Value",
    RoundedBased = "Rounded Based"
}
export declare enum TBATypeTopping {
    FixedBalance = "Fixed Balance",
    ZeroBalance = "Zero Balance"
}
export declare const TBA_UPPPER: Record<string, string>;
export declare const TaskStatusLM: Record<string, string>;
export declare enum TaskStausLMView {
    Success = "1",
    Failed = "2",
    Pending = "0",
    Hold = "5"
}
export declare enum DaysEnum {
    Monday = "monday",
    Tuesday = "tuesday",
    Wednesday = "wednesday",
    Thursday = "thursday",
    Friday = "friday",
    Saturday = "saturday",
    Sunday = "sunday"
}
export declare enum LiquidityStatus {
    AllStatus = 0,
    Pending = 1,
    Draft = 2,
    Returned = 3,
    Active = 4,
    Complete = 5,
    Cancelled = 6,
    Suspended = 7,
    NotScheduled = 8,
    Rejected = 9
}
export declare enum KeyPayload {
    CompanyGroupID = "company_group_id",
    CompanyID = "company_id",
    CurrencyID = "currency_id",
    SchemeType = "scheme_type",
    Description = "description",
    Code = "code",
    CashFlow = "cashflow",
    CashFlowType = "cashflow_type",
    Period = "period",
    PeriodTimes = "period_times",
    TBAType = "tba_type",
    TBAValue = "tba_value",
    TBATopValue = "tba_top_value",
    TBABottomValue = "tba_bottom_value",
    TBARoundedBase = "tba_rounded_base",
    Recurring = "recurring",
    RecurringValue = "recurring_value",
    RecurringDate = "recurring_date",
    RecurringDays = "recurring_days",
    Source = "source",
    AccountID = "account_id",
    AccountAlias = "account_alias",
    Remark = "remark",
    TBAFillDefisit = "tba_fill_defisit",
    TBAFIllToTop = "tba_fill_to_top",
    Beneficiary = "beneficiary",
    StartDate = "start_date",
    EndDate = "end_date",
    IsDraft = "is_draft",
    IsActive = "is_active",
    PassCode = "pass_code"
}
