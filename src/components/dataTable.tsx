import React, {useState} from 'react'
import { Table, Radio, Divider } from 'antd';
import Unit from './unit';


const columns = [
  {
    title: 'Id',
    dataIndex: 'Id',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'Name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Costs',
    dataIndex: 'Costs',
  },
];
interface DataType {
  key: React.Key;
  id: number;
  name: string;
  age: string;
  address: string;
}
interface DataTable {
  data: any

}

const DataTable =(props:DataTable)=> {
 
    return (
      <div>

      <Table
       
        columns={columns}
        dataSource={props.data}
      />
    </div>
    )

}

export default DataTable;
