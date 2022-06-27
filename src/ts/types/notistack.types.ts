type NotistackTypes = "error" | "default" | "success" | "warning" | "info" | undefined;

export type NotistackType = {
  statusText: string;
  variant: NotistackTypes;
};
