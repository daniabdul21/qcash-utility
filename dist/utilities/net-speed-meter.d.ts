interface NetSpeedMeterProps {
    bps: number;
    kbps: number;
    mbps: number;
}
export declare const netSpeedMeter: (imageAddr: string) => Promise<NetSpeedMeterProps>;
export {};
