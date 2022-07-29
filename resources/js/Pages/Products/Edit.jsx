import { Inertia } from '@inertiajs/inertia'
import { Link, Head } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
const Edit = (props) => {

    const [formData, setFormData] = useState(props.product);
    const { errors, flash } = props

    const saveProduct = async (e) => {
        e.preventDefault()
        Inertia.put(`/products/${formData.id}`, formData);
    }

  return (
    <>
        <Head title="Edit Product" />
        <div className="p-5 flex flex-wrap flex-col items-center justify-center">
            <h1 className='text-xl font-bold'>Edit Products</h1>
            <form className='my-5' onSubmit={(saveProduct)}>
                { 
                    flash.message != null && <div className='px-4 py-2 text-center text-white bg-green-400 rounded-md w-full'>{flash.message}</div>
                }
                <div className='flex flex-wrap flex-col my-3'>
                    <label htmlFor="name">Product Name</label>
                    <input id="name" 
                    className='border border-black p-2 w-[300px] rounded-md' 
                    placeholder='Enter product name' 
                    type="text"
                    value={formData.name || ""}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    {
                        errors.name && <small className='text-red-500 italic my-1'>{errors.name}</small>
                    }
                </div>
                <div className='flex flex-wrap flex-col my-3'>
                    <label htmlFor="price">Product Price</label>
                    <input id="price" type="number" className='border border-black p-2 w-[300px] rounded-md' 
                    placeholder='Enter product price' 
                    value={formData.price || ""}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    />
                    {
                        errors.price && <small className='text-red-500 italic my-1'>{errors.price}</small>
                    }
                </div>
                <div className='flex flex-wrap my-3'>
                    <button type='submit' className='px-6 py-2 bg-sky-400 hover:bg-sky-500 rounded-md w-full text-white font-bold'>Save</button>
                </div>
            </form>
            <Link href='/products' className="text-sky-400">See all Products</Link>
        </div>
    </>
  )
}

export default Edit