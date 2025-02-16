import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';

export default function Table({ rows, pagination, loading, handleLoadData, handleDelete }) {
  const router = useRouter();
  const columns: GridColDef<(typeof rows)[number]>[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 300,
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: 'name',
      headerName: 'Full name',
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
      valueGetter: (value, row) => (row.gender === 'F' ? 'Female' : 'Male'),
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: 'updatedAt',
      headerName: 'Updated At',
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
    },
    {
      field: 'action',
      headerName: 'Aksi',
      width: 200,
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: (params) => (
        <>
          <Button
            variant='contained'
            color='info'
            size='small'
            onClick={() => router.push(`/users/${params.row.id}`)}
            style={{ marginRight: 8 }}
          >
            Edit
          </Button>
          <Button
            variant='contained'
            color='error'
            size='small'
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        paginationMode='server'
        rows={rows}
        columns={columns}
        rowCount={pagination.totalData}
        initialState={{ pagination: { paginationModel: pagination } }}
        sx={{ border: 0 }}
        checkboxSelection={false}
        disableRowSelectionOnClick
        loading={loading}
        onPaginationModelChange={(meta) => {
          handleLoadData(meta);
        }}
      />
    </Box>
  );
}
