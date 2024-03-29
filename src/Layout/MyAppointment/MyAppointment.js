import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);

const url = `http://localhost:5000/bookings?email=${user?.email}`;
const {data : bookings = []}= useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async() =>{

        // const res = await fetch(url);
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          }
        });
    


        const data = await res.json();
        
        return data;
    }
})

console.log(bookings)
    return (
        <div>
          <h3 className='text-3xl mb-5'>My Apoointments</h3> 
          <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
    { 
        bookings?.map((booking, i) =>  <tr key={booking._id}>
            <th>{i+1}</th>
            <td>{booking.patient}</td>
            <td>{booking.treatment}</td>
            <td>{booking.appointmentDate}</td>
            <td>{booking.slot}</td>
            {
              booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
              <button className='btn btn-primary btn-small'>
                pay
              </button></Link>
            }
            {
              booking.price && booking.paid && <span className='text-primary'>paid</span>
            }
          </tr>)
    }
  </table>
</div> 
        </div>
    );
};

export default MyAppointment;
