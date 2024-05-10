import { Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetail() {
    const {id} = useParams()

    const [dataDetail,setDataDetail] = useState({})
    console.log(id)

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then(({data}) => {
                setDataDetail(data)
            })
            .catch((err) => {
                setDataDetail({})
            })
    },[])

    console.log(dataDetail)
    return (
        <div>   
            <Typography.Title>Product Detail</Typography.Title>
            <Typography.Text>{dataDetail.title}</Typography.Text>
            <br/>
            <Typography.Text>{dataDetail.description}</Typography.Text>
            <br/>
            <Typography.Text>{dataDetail.price}</Typography.Text>
            <br/>
            <Typography.Text>{dataDetail.discountPercentage}</Typography.Text>
        </div>
    )
}

export default ProductDetail
