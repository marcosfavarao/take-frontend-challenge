import { TableColumn } from 'react-data-table-component'

type RowType = string | number | boolean | Date | JSX.Element | Array

export interface DataRowType {
  rowInfo: RowType
  rowRef: RowType
  rowPlate: RowType
  rowDate: RowType
}

export interface DataTableType {
  tableColumns: TableColumn<DataRowType>[]
  tableRows: Array<DataRowType>
}
