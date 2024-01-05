import Image from 'next/image'
import React from 'react'

const AddProject = () => {
  return (
    <section className='add-project'>
        <div className='container py-4'>
            <div className='text-center mb-4'>
                <h2 className='mb-0'>
                    Add Project
                </h2>
                <Image alt='heading line' height={4} width={100} className='img-fluid' src="/heading-line.svg" />
            </div>

            <div className='col-12'>
            
                <form>
                    <div className='mb-3'>
                    <label className='form-label'>Project Name</label>
                    <input  className='form-control' />
                    </div>

                    <div  className='mb-3'>
                    <label className='form-label'>Project link</label>
                    <input  className='form-control' />
                    </div>

                    <div  className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea  className='form-control'></textarea>
                    </div>

                    <div className='text-end'>
                        <button className='btn btn-warning'>Add</button>
                    </div>
                    
                </form>

            </div>
            


        </div>

        <div>
        
        <Image alt='section background' className='img-fluid w-100' src="/section-bottom.png" width={1436} height={112} />
        </div>
    </section>
  )
}

export default AddProject