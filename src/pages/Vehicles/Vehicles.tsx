import React from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable, { TableColumn } from 'react-data-table-component'

import { VehicleType } from '../../@types/vehicles'
import { DataTableType, DataRowType } from '../../@types/datatable'

import iconMagnifier from '../../common/assets/svgs/icon-magnifier.svg'
import iconTune from '../../common/assets/svgs/icon-tune.svg'
import iconPlus from '../../common/assets/svgs/icon-plus.svg'

import {
  VehiclesContainer,
  VehiclesHeader,
  Searchbar,
  FilterButton,
  AddButton,
  VehiclesTable,
  CustomTableRow,
  CustomTableRowInfo,
  DataFallback,
} from './Vehicles.styles'

const CUSTOM_DATATABLE_STYLES = {
  rows: {
    style: {
      minHeight: '5.5rem',
    },
  },
}

const CUSTOM_DATATABLE_PAGINATION = {
  rowsPerPageText: 'Registros por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos',
}

type CustomTableRowInfo = Pick<
  VehicleType,
  | 'model_name'
  | 'name'
  | 'manufacturing_year'
  | 'model_year'
  | 'fuel_type'
  | 'mileage'
  | 'ad_selling_price'
  | 'image'
>

export function Vehicles() {
  const navigate = useNavigate()

  const [apiData, setApiData] = React.useState<VehicleType[]>([])
  const [tableData, setTableData] = React.useState<VehicleType[]>(apiData)
  const [tableInfo, setTableInfo] = React.useState<DataTableType>(
    {} as DataTableType,
  )

  function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
    const filteredData = apiData.filter((car) => {
      return car.model_name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    })

    setTableData(filteredData)
  }

  function handleClickRowElement(
    row: DataRowType,
    event: React.MouseEvent<Element, MouseEvent>,
  ) {
    navigate('/vehicles-settings')
    console.log(row.rowInfo?.props)
  }

  function RenderCustomTableRowInfo({
    image,
    model_name: modelName,
    name,
    manufacturing_year: manufacturingYear,
    model_year: modelYear,
    fuel_type: fuelType,
    mileage,
    ad_selling_price: sellingPrice,
  }: CustomTableRowInfo): JSX.Element {
    const price = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(sellingPrice)

    const miles = mileage.toLocaleString('pt-BR', {
      style: 'unit',
      unit: 'kilometer',
      unitDisplay: 'short',
    })

    return (
      <>
        <CustomTableRow>
          <img src={image} alt="" />

          <CustomTableRowInfo>
            <h3>{modelName}</h3>
            <p>{name}</p>
            <p>
              {manufacturingYear}/{modelYear} <small>●</small> {fuelType}
            </p>
            <p>
              {miles} <small>●</small> <span>{price}</span>
            </p>
          </CustomTableRowInfo>
        </CustomTableRow>
      </>
    )
  }

  function RenderDataFallback(): JSX.Element {
    return (
      <>
        <DataFallback>
          <p>Carregando informações...</p>
        </DataFallback>
      </>
    )
  }

  React.useEffect(() => {
    fetch('http://www.mocky.io/v2/5eb553df31000060006994a8')
      .then((response) => {
        if (response.ok) return response.json()
        throw response
      })
      .then((data: VehicleType[]) => {
        const sortData = data.sort((vehicleA, vehicleB) => {
          if (vehicleA.model_name > vehicleB.model_name) return 1
          if (vehicleA.model_name < vehicleB.model_name) return -1
          return 0
        })

        setApiData(sortData)
        setTableData(sortData)
      })
      .catch((error: unknown) => console.error('Error fetching data', error))
  }, [])

  React.useEffect(() => {
    const vehiclesApiData = tableData
    console.log(tableData)
    if (!vehiclesApiData.length) return

    const tableColumns: TableColumn<DataRowType>[] = [
      {
        name: 'Dados do veículo',
        selector: (info: DataRowType) => info.rowInfo,
        sortable: false,
        grow: 2,
      },
      {
        name: 'REF',
        selector: (info: DataRowType) => info.rowRef,
        sortable: false,
        grow: 1,
      },
      {
        name: 'Placa',
        selector: (info: DataRowType) => info.rowPlate,
        sortable: false,
        grow: 1,
      },
      {
        name: 'Data',
        selector: (info: DataRowType) => info.rowDate,
        sortable: false,
        grow: 1,
      },
    ]

    const tableRows: DataRowType[] = vehiclesApiData.map((model) => {
      const info = (
        <RenderCustomTableRowInfo
          model_name={model.model_name}
          name={model.name}
          manufacturing_year={model.manufacturing_year}
          model_year={model.model_year}
          fuel_type={model.fuel_type}
          mileage={model.mileage}
          ad_selling_price={model.ad_selling_price}
          image={model.image}
        />
      )

      return {
        rowInfo: info,
        rowRef: 'Inserindo dados no sistema',
        rowPlate: 'Inserindo dados no sistema',
        rowDate: 'Inserindo dados no sistema',
      }
    })

    setTableInfo({ tableColumns, tableRows })
  }, [tableData])

  const isFetchingData = !tableData.length
  return (
    <>
      <VehiclesContainer>
        <VehiclesHeader>
          <div>
            <h1>Veículos</h1>

            <Searchbar>
              <input
                type="text"
                placeholder="Buscar..."
                onChange={handleFilter}
              />
              <img src={iconMagnifier} alt="" />
            </Searchbar>
          </div>

          <div>
            <FilterButton type="button">
              <img src={iconTune} alt="" />
              Filtrar
            </FilterButton>
            <AddButton type="button">
              <img src={iconPlus} alt="" />
              Adicionar
            </AddButton>
          </div>
        </VehiclesHeader>

        <VehiclesTable>
          <DataTable
            columns={tableInfo.tableColumns}
            data={tableInfo.tableRows}
            progressPending={isFetchingData}
            // noDataComponent={<DisplayNoData />}
            progressComponent={<RenderDataFallback />}
            selectableRows={false}
            selectableRowsVisibleOnly={false}
            selectableRowsHighlight={false}
            dense={false}
            responsive
            // striped
            highlightOnHover
            pointerOnHover
            fixedHeader
            persistTableHead
            pagination
            paginationDefaultPage={1}
            onRowClicked={handleClickRowElement}
            paginationComponentOptions={CUSTOM_DATATABLE_PAGINATION}
            customStyles={CUSTOM_DATATABLE_STYLES}
          />
        </VehiclesTable>
      </VehiclesContainer>
    </>
  )
}
