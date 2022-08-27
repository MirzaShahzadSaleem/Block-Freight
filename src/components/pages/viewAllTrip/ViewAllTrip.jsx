import React from 'react'
import "./viewAllTrip.css"
import { DataGrid } from '@mui/x-data-grid/DataGrid'

export default function ViewAllTrip() {
  const columns  = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'tripID', headerName: 'TripID', width: 130 },
    { field: 'driverID', headerName: 'DriverID', width: 130 },
    {
      field: 'tripInitiator',
      headerName: 'Trip Initiator',
      type: 'string',
      width: 150,
    },
    { 
      field: 'paymentStatus',
      headerName: 'Payment Status',
      width: 100,
    },
    {
        field: 'bill',
      headerName: 'Bill',
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
    { id: 1, tripID: '234', driverID: '87', tripInitiator: 'candyland', paymentStatus: 'clear', bill: '10,000' },
    { id: 2, tripID: '342', driverID: '341', tripInitiator: 'bisconi' ,paymentStatus: 'pending' , bill: '40,000'  },
    { id: 3, tripID: '245', driverID: '298', tripInitiator: 'iqra-uni' ,paymentStatus: 'clear' ,bill: '100,000'},
    { id: 4, tripID: '45', driverID: '7243', tripInitiator: 'uniliver' ,paymentStatus: 'clear' , bill: '70,000' },
    { id: 5, tripID: '465', driverID: '324', tripInitiator: 'uniliver', paymentStatus: 'clear' , bill: '90,000'  },
    { id: 6, tripID: '67', driverID: '3241', tripInitiator: 'engro',paymentStatus: 'pending' ,bill: '65,000'  },
    { id: 7, tripID: '68', driverID: '134', tripInitiator: 'nestle' ,paymentStatus: 'clear' ,bill: '870,000' },
    { id: 8, tripID: '864', driverID: '977', tripInitiator: 'candyland'  ,paymentStatus: 'clear', bill: '100,000' },
    { id: 9, tripID: '467', driverID: '652', tripInitiator: 'bisconi' ,paymentStatus: 'clear' ,bill: '160,000'},
    { id: 10, tripID: '784', driverID: '762', tripInitiator: 'engro' ,paymentStatus: 'pending',bill: '230,000'  },
    { id: 11, tripID: '2834', driverID: '1343', tripInitiator: 'nestle' ,paymentStatus: 'clear', bill: '107,000' },
    { id: 12, tripID: '854', driverID: '753', tripInitiator: 'candyland',paymentStatus: 'clear', bill: '910,000'  },
    { id: 13, tripID: '34', driverID: '230', tripInitiator: 'nestle' ,paymentStatus: 'clear',bill: '710,000' },
    { id: 14, tripID: '456', driverID: '871', tripInitiator: 'bisconi' ,paymentStatus: 'clear' ,bill: '150,000'},
    { id: 15, tripID: '345', driverID: '1324', tripInitiator: 'bisconi',paymentStatus: 'clear' ,bill: '910,000' },
    { id: 16, tripID: '356', driverID: '1348', tripInitiator: 'candyland',paymentStatus: 'clear',bill: '410,000'  },
    { id: 17, tripID: '56', driverID: '139', tripInitiator: 'engro',paymentStatus: 'pending' ,bill: '210,000' },
    { id: 18, tripID: '35', driverID: '987', tripInitiator: 'bisconi' ,paymentStatus: 'clear',bill: '610,000' },
    { id: 19, tripID: '324', driverID: '889', tripInitiator: 'candyland' ,paymentStatus: 'clear',bill: '140,000' },
    { id: 20, tripID: '23', driverID: '193', tripInitiator: 'bisconi',paymentStatus: 'clear' ,bill: '610,000' },

  ];
  return (
    <div className='viewAllTrip' style={{ height: 500, width: '80%' }}>
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
