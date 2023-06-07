import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();

const [inpval, setINP] = useState({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    desc:""
})

const setdata =  (e) => {
  const {name,value} = e.target;
  setINP((preval) => {
    return {
        ...preval,
        [name]:value
    }
  })

}

const addinpdata = async(e)=>{
  e.preventDefault();

  const {name,email,work,add,mobile,desc,age} = inpval;

   const res = await  fetch("/register",{
     method:"POST",
     headers:{
        "Content-Type":"application/json"
     },
     body:JSON.stringify({
       name,email,work,add,mobile,desc,age
     })
   });

   const data = await res.json();
  //  console.log(data);

   if(res.status === 422 || !data){
       alert("error");
       console.log("error");
   }else{
       alert("data added");
       navigate("/");
   }

}

  return (
    <div className="container">
      <NavLink to="/" className="btn btn-primary mt-4">
        Home
      </NavLink>

      <form className="mt-4">
        <div className="row">
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={setdata}
            value={inpval.name}
            name="name"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            onChange={setdata}
            value={inpval.email}
            name="email"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={setdata}
            value={inpval.age}
            name="age"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Mobile
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            onChange={setdata}
            value={inpval.mobile}
            name="mobile"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Work
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={setdata}
            value={inpval.work}
            name="work"
          />
        </div>
        <div className="mb-3 col-lg-6 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={setdata}
            value={inpval.add}
            name="add"
          />
        </div>
        <div className="mb-3 col-lg-12 col-md-12 col-12">
          <label for="exampleInputPassword1" className="form-label">
            Description
          </label>
          <textarea className="form-control" cols="30" rows="5" name="desc" value={inpval.desc} onChange={setdata}
           />
        </div>
         
        <button type="submit" className="btn btn-primary" onClick={addinpdata}>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
