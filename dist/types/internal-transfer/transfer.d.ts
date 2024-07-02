export interface CalculatePayload {
    senderCurrency: string;
    receiverCurrency: string;
    amount: number;
    dealCode: string;
    currencyType: string;
}
