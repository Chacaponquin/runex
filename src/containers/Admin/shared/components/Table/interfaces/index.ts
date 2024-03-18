export type TableData = {
  columns: Array<string>;
  body: Array<Array<TableElement>>;
};

export type TableElement = React.ReactNode;
