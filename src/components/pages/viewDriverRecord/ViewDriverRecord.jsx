import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./viewDriverRecord.css"

export default function ViewDriverRecord() {
    const columns  = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'vehicle',
          headerName: 'Vehicle',
          type: 'string',
          width: 100,
        },
        { 
          field: 'status',
          headerName: 'Status',
          width: 100,
        },
        {
            field: 'transaction',
          headerName: 'Transaction',
          width: 100,
        },
        
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        //   valueGetter: (params) =>
        //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        // },
      ];
      
      const rows = [
        { id: 1, lastName: 'Ali', firstName: 'Murtaza', vehicle: 'mazda', status: 'active', transaction: '10,000' },
        { id: 2, lastName: 'Uzair', firstName: 'Sheikh', vehicle: 'shahzore' ,status: 'active' , transaction: '40,000'  },
        { id: 3, lastName: 'Rasool', firstName: 'Baksh', vehicle: 'mazda' ,status: 'active' ,transaction: '100,000'},
        { id: 4, lastName: 'Furqan', firstName: 'Arain', vehicle: 'suzuki' ,status: 'active' , transaction: '70,000' },
        { id: 5, lastName: 'Gulaam', firstName: 'Ali', vehicle: 'bradfold', status: 'non-active' , transaction: '90,000'  },
        { id: 6, lastName: 'Meesan', firstName: 'Baksh', vehicle: 'pickup',status: 'active' ,transaction: '65,000'  },
        { id: 7, lastName: 'Danish', firstName: 'Barkat', vehicle: 'hi-roof' ,status: 'active' ,transaction: '870,000' },
        { id: 8, lastName: 'Mustafa', firstName: 'Saien', vehicle: 'mazda'  ,status: 'non-active', transaction: '100,000' },
        { id: 9, lastName: 'Sunny', firstName: 'Ali', vehicle: 'suzuki' ,status: 'active' ,transaction: '160,000'},
        { id: 10, lastName: 'Ammar', firstName: 'Zia', vehicle: 'mazda' ,status: 'active',transaction: '230,000'  },
        { id: 11, lastName: 'Momin', firstName: 'Saqib', vehicle: 'pickup' ,status: 'active', transaction: '107,000' },
        { id: 12, lastName: 'Fayyaz', firstName: 'Ahmed', vehicle: 'suzuki',status: 'active', transaction: '910,000'  },
        { id: 13, lastName: 'Waqar', firstName: 'Noor', vehicle: 'mazda' ,status: 'non-active',transaction: '710,000' },
        { id: 14, lastName: 'Haji', firstName: 'Akhtar', vehicle: 'nissan' ,status: 'active' ,transaction: '150,000'},
        { id: 15, lastName: 'Sheer', firstName: 'Khan', vehicle: 'mazda',status: 'non-active' ,transaction: '910,000' },
        { id: 16, lastName: 'Hamza', firstName: 'Dattu', vehicle: 'datsun',status: 'active',transaction: '410,000'  },
        { id: 17, lastName: 'Sarmad', firstName: 'Ali', vehicle: 'mazda',status: 'active' ,transaction: '210,000' },
        { id: 18, lastName: 'Haji', firstName: 'Mushtaq', vehicle: 'suzuki' ,status: 'non-active',transaction: '610,000' },
        { id: 19, lastName: 'baber', firstName: 'Ali', vehicle: 'mazda' ,status: 'active',transaction: '140,000' },
        { id: 20, lastName: 'Hadi', firstName: 'Murtaza', vehicle: 'pickup',status: 'active' ,transaction: '610,000' },

      ];
  return (
    <div className='record' style={{ height: 500, width: '80%' }}>
    <DataGrid
    rows={rows}
    columns={columns}
    pageSize={7}
    rowsPerPageOptions={[7]}
    checkboxSelection
  />
    </div>
  )
}
