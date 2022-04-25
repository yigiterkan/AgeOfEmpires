import React from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';


const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    render: (data) => <Link to={"/unitDetails/"+ data}>{data}</Link>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Costs',
    dataIndex: 'cost',
    render: cost => (
      <div>
        <p>Wood: {cost?.Wood}</p>
        <p>Food: {cost?.Food}</p>
        <p>Gold: {cost?.Gold}</p>
        </div>
      
    )
  }
];
interface DataType {
  id: React.Key;
  name: string;
  age: string;
  address: string;
}
interface DataTable {
  data: any

}

const DataTable = (props: DataTable) => {
  return (
    <div>
      <Table rowKey='id'
        columns={columns}
        dataSource={props.data}
      />
    </div>
  )

}

export default DataTable;
