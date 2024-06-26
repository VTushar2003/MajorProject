import React, { useState, useEffect } from 'react';
import { Space, Table } from 'antd';
import axios from 'axios';
import {EditOutlined,EyeOutlined,DeleteOutlined} from '@ant-design/icons'

const ProductData = () => {
  const [item, setItem] = useState([]);
  const url = "http://localhost:3000";

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get(`${url}/api/products/GetAllProducts`);
        setItem(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  const columns = [
    {
      title: 'Product_Id',
      dataIndex: 'productId',
      key: 'productId',
      responsive: ['sm'],
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      responsive: ['sm'],
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      responsive: ['sm'],
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      responsive: ['sm'],
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      responsive: ['sm'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      responsive: ['sm'],
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="middle">
          <a><EyeOutlined /></a>
          <a><EditOutlined /></a>
          <a className='hover:text-red-700'><DeleteOutlined /></a>
        </Space>
      ),
      responsive: ['sm'],
    },
  ];

  return (
    <Table columns={columns} dataSource={item} scroll={{ x: '100%' }} />
  );
};

export default ProductData;
