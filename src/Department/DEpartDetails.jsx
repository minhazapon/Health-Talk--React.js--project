


const DEpartDetails = ({depart}) => {
      
      const {image, name, service, Details} = depart


    return (
        <div className="  ">

<div className="card w-96 h-[700px] border-[3px] border-blue-100 p-3 bg-base-100 shadow-xl">
  <figure><img className=" h-[300px] w-[400px]" src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      
      <div className="badge bg-blue-100 p-3  ">Category: {name} </div>
    </h2>
    <p className=" text-xl">Service Time: {service} </p>
    <p className=" -mt-14 text-xl text-slate-500"> {Details} </p>
   
  </div>
</div>
            
        </div>
    );
};

export default DEpartDetails;