export interface InitialCutoffHolidayProps {
    time?: string;
    modulID: string;
    currency?: string;
    api?: string;
}
export interface CutoffHolidayProps {
    endTime: string;
    fastestAvailableTime: string;
    isCutOff: boolean;
    isHoliday: boolean;
    isValid: boolean;
}
