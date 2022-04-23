import React, {useState} from 'react'
import { Table, Radio, Divider } from 'antd';

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
  onDataChange: any

}
const data: DataType[] = [
  {
    key: 1,
    id: 1,
    name:'Archer',
    age: 'Food:25 Gold:45',
    address: 'New York No. 1 Lake Park',
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === '', // Column configuration not to be checked
    name: record.name,
  }),
};

const DataTable =()=> {
 
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
  
    return (
      <div>
      <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
       
      </Radio.Group>

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
    )

}

export default DataTable;
