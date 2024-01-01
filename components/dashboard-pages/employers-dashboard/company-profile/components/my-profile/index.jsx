"use client"
import FormInfoBox from "./FormInfoBox";
import LogoCoverUploader from "./LogoCoverUploader";
import apiConfig from "@/app.config";
import axios from "axios";
import jwt from 'jsonwebtoken';
import { useEffect, useState } from "react";
const index = () => {
    const [company,setCompany] =  useState(null);
    const [businessStream,setBusinessStream]  = useState([]);
    const token = localStorage.getItem("accessToken");
    const decodedUser = jwt.decode(token);
 
    useEffect(()=>{
        getComany();
      
    },[])
    useEffect(()=>{
    fetchBusinessStream();
    },[])

   const getComany  = async ()=>{
    try{
        const company  = await axios.get(`${apiConfig.url}/company/my-company`,{headers:{Authorization:`Bearer ${token}`}})    
        
     
        setCompany(company.data);

    }catch(err){
        console.error("can not fetch company",err);
    }
}
const fetchBusinessStream  = async ()=>{
    try{
      const response = await axios.get(`${apiConfig.url}/business-streams`);
      console.log(response.status,response.data.result,"check it ");
      if(response.status == 200){
          var obj  = [];
     
          for(let i=0; i < response.data.result.length; i++){
  
              obj.push({value:response.data.result[i].id,label:response.data.result[i].name});
          }
   
          setBusinessStream(obj);
          console.log(businessStream);
      }
  
    }catch(ex){
      console.error(ex);
    }
  
    }
return (
        <div className="widget-content">
            <LogoCoverUploader company={company} />
            {/* End logo and cover photo components */}

       <FormInfoBox   businessStream={businessStream} company={company} /> 
            {/* compnay info box */}
        </div>
    );
};

export default index;
