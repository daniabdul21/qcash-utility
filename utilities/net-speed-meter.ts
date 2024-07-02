interface NetSpeedMeterProps {
  bps: number;
  kbps: number;
  mbps: number;
}

export const netSpeedMeter = async (imageAddr: string): Promise<NetSpeedMeterProps> => {
  return new Promise<NetSpeedMeterProps>((resolve, reject) => {
    const download = new Image();

    const startTime: number = Date.now();
    const cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    download.onload = async () => {
      const endTime: number = Date.now();

      try {
        const response = await fetch(imageAddr);
        const blob = await response.blob();
        const fileSize = blob.size;

        const duration = (endTime - startTime) / 1000;
        const bitsLoaded = fileSize * 8;
        const speedBps = (bitsLoaded / duration).toFixed(2);
        const speedKbps = (parseInt(speedBps) / 1024).toFixed(2);
        const speedMbps = (parseInt(speedKbps) / 1024).toFixed(2);

        resolve({
          bps: parseInt(speedBps),
          kbps: parseInt(speedKbps),
          mbps: parseInt(speedMbps)
        });
      } catch (error) {
        reject(error);
      }
    };

    download.onerror = (err, _omsg) => {
      reject(err);
    };
  });
};
