export function formatSizeUnits(bytes: number) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let unitIndex = 0;
  let sizeInUnit = bytes;

  // Loop until the size is small enough to be in a unit before TB or if it is the last unit already
  while (sizeInUnit >= 1024 && unitIndex < units.length - 1) {
    sizeInUnit /= 1024;
    unitIndex++;
  }

  // Format the size to two decimal places if not in Bytes
  const formattedSize = unitIndex === 0 ? sizeInUnit : sizeInUnit.toFixed(2);

  return [formattedSize, units[unitIndex]];
}