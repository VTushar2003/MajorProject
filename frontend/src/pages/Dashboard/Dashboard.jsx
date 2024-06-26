import React from 'react'
import DefaultLayout from '../../components/layout/Layout';
import { Col, Row, Space, Typography } from 'antd';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";
import { MdOutlineRemoveShoppingCart ,MdOutlineShoppingCart} from "react-icons/md";
const Dashboard = () => {
  return (
    <DefaultLayout>
      <h1 className='text-black text-[2rem] pb-2 font-thin'>Inventory Stats</h1>
      <Row className=' h-32   mx-auto overflow-x-auto'>
        <Space size={20}>
        <Col className='bg-[--light-blue]  w-[13rem] h-[15vh] flex items-center pl-[.5rem] rounded-md justify-evenly hover:-translate-y-2 transition-all'>
        <MdOutlineShoppingCart className='text-[2.5rem] p-[.5rem] text-white rounded-full border-2' />
        <div>
        <Typography.Text className='text-[1rem] font-semibold text-white'> Total Products</Typography.Text>
        <h1 className='text-center font-[grifter] text-[1.5rem]'>100</h1>
        </div>
        </Col>
        <Col className='hover:-translate-y-2 transition-all bg-green-600 w-[13rem] h-[15vh] flex items-center pl-[.5rem] rounded-md justify-evenly'>
        <FaIndianRupeeSign className='text-[2.5rem] p-[.5rem] text-white rounded-full border-2' />
        <div>
        <Typography.Text className='text-[1rem] font-semibold text-white'> Total Store Value</Typography.Text>
        <h1 className='text-center font-[grifter] text-[1.5rem]'>100</h1>
        </div>
        </Col>
        <Col className='hover:-translate-y-2 transition-all bg-red-600 w-[13rem] h-[15vh] flex items-center pl-[.5rem] rounded-md justify-evenly'>
        <MdOutlineRemoveShoppingCart className='text-[2.5rem] p-[.5rem] text-white  rounded-full border-2' />
        <div>
        <Typography.Text className='text-[1rem] font-semibold text-white'> Out of stock</Typography.Text>
        <h1 className='text-center font-[grifter] text-[1.5rem]'>100</h1>
        </div>
        </Col>
        <Col className=' hover:-translate-y-2 transition-all bg-[--light-blue] w-[13rem] h-[15vh] flex items-center pl-[.5rem] rounded-md justify-evenly'>
        <TbCategory className='text-[2.5rem] p-[.5rem] text-white rounded-full border-2' />
        <div>
        <Typography.Text className='text-[1rem] font-semibold text-white'>Total Categories</Typography.Text>
        <h1 className='text-center font-[grifter] text-[1.5rem]'>100</h1>
        </div>
        </Col>
        </Space>
      </Row>
    </DefaultLayout>
  )
}

export default Dashboard