import React  , {useEffect, useState} from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../api/product";
import {ProductType} from "../types/product";

type ProductEditProps = {
    onUpdate: (product: ProductType) => void;
}
type Props = {};
type FormInput = {
    name: String,
    price: Number
}
const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm<FormInput>();
    const Navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const {data} = await read(id);  
            reset(data);
        }
        getProducts();
    },[])
    
    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log(data)
        props.onUpdate(data);
        Navigate("/admin/product")
        //bắn data ra ngoài app.tsx
        //redirect sang trang products
    }
    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', {required:true})} />
            <input type="number" {...register('price')} />
            <button>Update</button>
        </form>
    )
}
export default ProductEdit;