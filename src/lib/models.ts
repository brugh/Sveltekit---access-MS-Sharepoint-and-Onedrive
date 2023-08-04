export interface Data {
  detail: {
    response: {
      value: any;
    }
    error: unknown;
  };
}

export interface EventData {
  target: {
    value: any;
    response: {
      value: any;
    }
  };
}
