"use client";

import { ProjectsContext } from '@/context/ProjectsContext';
import Image from 'next/image'
import React, { useContext } from 'react'
import { useForm } from "react-hook-form";


const AddProject = () => {
    const {addNewProject} = useContext(ProjectsContext)


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => {
        addNewProject(data)
        console.log(data);
        reset();
      };

      
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
            
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-3'>
                    <label className='form-label'>Project Name</label>
                    <input   {...register("name", { required: true })} type='text' className='form-control' />
                    {errors.name?.type === "required" && (
                    <div className="text-danger fs-6" role="alert">
                      Project Name is Required
                    </div>
                  )}
                    </div>

                    <div  className='mb-3'>
                    <label className='form-label'>Project link</label>
                    <input  {...register("link", { required: true })} type='text'  className='form-control' />
                    {errors.name?.type === "required" && (
                    <div className="text-danger fs-6" role="alert">
                      Project Link is Required
                    </div>
                  )}
                    </div>

                    <div  className='mb-3'>
                    <label className='form-label'>Project Image</label>
                    <input accept="image/png, image/gif, image/jpeg, , image/webp"  {...register("image", { required: true })} type='file'  className='form-control' />
                    {errors.name?.type === "required" && (
                    <div className="text-danger fs-6" role="alert">
                      Project Image is Required
                    </div>
                  )}
                    </div>

                    <div  className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea  {...register("description", { required: true })}  className='form-control'></textarea>
                    {errors.name?.type === "required" && (
                    <div className="text-danger fs-6" role="alert">
                      Project Description is Required
                    </div>
                  )}
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