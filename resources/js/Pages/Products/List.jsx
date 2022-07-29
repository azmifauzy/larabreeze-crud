import { Inertia } from '@inertiajs/inertia'
import { Link, Head } from '@inertiajs/inertia-react'
import React from 'react'

const List = (props) => {
  const { errors, flash } = props
  const deleteProduct = async (id) => {
    Inertia.delete(`/products/${id}`)
  }

  return (
    <>
        <Head title="List Product" />
        <div className="container my-10">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap justify-between">
                <h1 className='text-xl font-bold'>List Products</h1>
                <Link href='/products/create' className='px-4 py-2 bg-sky-400 text-white rounded-md'>Add Product</Link>
              </div>
              { 
                  flash.message != null && <div className='px-4 py-2 my-3 text-center text-white bg-green-400 rounded-md w-full'>{flash.message}</div>
              }
              <div className='flex flex-wrap my-5 justify-center'>
                  { props.products.length != 0 ? props.products.map((product) => (
                      <div className='border mx-3 my-3 border-slate-500 shadow-md rounded-md p-5' key={product.id}>
                          <h1 className='text-xl'>{product.name}</h1>
                          <small className='italic'>Rp. {product.price}</small>
                          <div className='mt-3'>
                            <button 
                            className='bg-red-500 p-2 rounded-md mr-1 text-white active:bg-red-600' 
                            type='button'
                            onClick={() => deleteProduct(product.id)}>Delete</button>
                            <Link href={'/products/'+product.id+'/edit'} className='bg-blue-500 p-2 rounded-md ml-1 text-white'>Edit</Link>
                          </div>
                      </div>
                  )) : "Tidak ada Data" }
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default List