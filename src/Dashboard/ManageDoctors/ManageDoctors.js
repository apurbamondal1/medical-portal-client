
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Footer/shared/Loading';


const ManageDoctors = () => {
    const {data: doctors,isLoading} = useQuery({
        queryKey:['doctors'],
        queryFn: async () => {
            try{
                const res =  await fetch ('http://localhost:5000/doctors' ,{
                    headers:{
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
               
                return data;
                

                }
           
            catch(error){
                // return [];
            }
        }

    });

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors: {doctors?.length}</h2>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Email</th>
        <th>Specialty</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
     
  
 {
    doctors.map((doctor, i ) =>    <tr key={doctor._id}>
    <th>{i+1}</th>
    <td>
    <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src = {doctor.image}  alt = ""/>
  </div>
</div>
    </td>
    <td>{doctor.name}</td>
    <td>{doctor.email}</td>
    <td>{doctor.specialty}</td>
    <td><button className="btn btn-secondary">Delete</button></td>
    
  </tr> )
 }
     
      
    </tbody>
  </table>
</div>
         
        </div>
    );
};

export default ManageDoctors;