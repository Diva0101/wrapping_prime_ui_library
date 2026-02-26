import { DataTable as PrimeDataTable, type DataTableProps as PrimeDataTableProps } from "primereact/datatable";

export type DataTableProps = PrimeDataTableProps;

const TABLE_RADIUS = 12;
const ROW_FONT_SIZE = 14;
const HEADER_FONT_SIZE = 13;

export function DataTable(props: DataTableProps) {
  const { className, tableStyle, pt, ...rest } = props;
  return (
    <PrimeDataTable
      {...rest}
      tableStyle={{ borderRadius: TABLE_RADIUS, fontSize: ROW_FONT_SIZE, ...tableStyle }}
      pt={{
        thead: { style: { fontSize: HEADER_FONT_SIZE } },
        ...pt,
      }}
      className={`my-ui-datatable ${className ?? ""}`.trim() || undefined}
    />
  );
}
