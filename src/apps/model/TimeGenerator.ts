export interface DateTimeHolder {
  registerCreateTime(): void;
  registerUpdateTime(): void;
}

export function generateDateTime() {
  return new Date();
}
