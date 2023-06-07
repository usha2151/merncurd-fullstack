import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import { NavLink } from "react-router-dom";

const Home = () => {

  const [getuserdata,setUserdata] = useState([]);

  const getdata = async(e)=>{
     const res = await  fetch("/getdata",{
       method:"GET",
       headers:{
          "Content-Type":"application/json"
       }
     });
  
     const data = await res.json();
    //  console.log(data);
  
     if(res.status === 422 || !data){
         console.log("error");
     }else{
         setUserdata(data);
         console.log("get data");
     }
  
  }


  useEffect(()=>{
    getdata();
  },[]);


  const deleteuser = async(id) => {
    const res2 = await fetch(`/deleteuser/${id}`,{
      method:"DELETE",
       headers:{
          "Content-Type":"application/json"
       }
    });

    const deletedata = await res2.json();
    console.log(deletedata);
 
    if(res2.status === 422 || !deletedata){
      alert("error");
  }else{
    alert("user deleted");
    getdata();
  }

  }

  return (
    <>
    {/* <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Succes!</strong> user added succesfully!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> */}

    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <NavLink to="/login" className="btn btn-secondary">Login</NavLink>
          <NavLink to="/register" className="btn btn-primary m-4"><AddIcon />Add data</NavLink>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
               getuserdata.map((element,id)=>{
                return(
                  <>
                   <tr>
                     <th scope="row">{id + 1}</th>
                     <td>{element.name}</td>
                     <td>{element.email}</td>
                     <td>{element.work}</td>
                     <td>{element.mobile}</td>
                     <td className="d-flex justify-content-between">
                     <NavLink to={`view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
                     <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><CreateIcon /></button></NavLink>
                     <button className="btn btn-danger" onClick={()=>deleteuser(element._id)}><DeleteOutlineIcon /></button>
                     </td>
                   </tr>
                  </>
                )
               })
            }
           
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Home;
