import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { vip } from '../state/workSlice';

const VIP = () => {

    const {vacId}=useParams();

    const vacancies=useSelector(state=>state.vacancies.vacancies);

    const navigate=useNavigate()
    const vacancy=vacancies.find(x=>x.id==vacId);
    console.log(vacancy)
    const [bank, setBank]=useState('')
    const [cvv, setCvv]=useState('')
    const [exp, setExp]=useState('')

    const dispatch=useDispatch();

    const handleVIP=(vacId)=>{
        if(bank.trim('').length==16 && cvv!=='' && exp!==''){
            dispatch(vip(vacId))
            console.log("clicked" , vacId, vacancies)
            navigate('/')
        }else{
            alert("Zəhmət olmasa bütün inputları doldurun")
        }
    }
  return (
    <div className="row px-1 py-5 mt-5 section">
        <div className="border rounded shadow-sm col-sm-12 col-md-6 mx-auto" >
            <h3 className="text-center">
                Elanı VIP Et
            </h3>
            <div className="form p-4">
                <label htmlFor="bank">Bank Kartınızın Nömrəsi</label>
                <input id='bank' type="text" className="form-control" value={bank} onChange={(e)=>setBank(e.target.value)}/>
                <div className="row  g-4">
                <div className="col-6">
                <label htmlFor="exp">EXP</label>
                <input id='exp'  type="text" className="form-control " value={exp} onChange={(e)=>setExp(e.target.value)}/>
                </div>
                <div className="col-6">
                <label htmlFor="cvv">CVV</label>
                <input id='cvv' type="text" className="form-control " value={cvv} onChange={(e)=>setCvv(e.target.value)}/>
                </div>
                </div>
                <br />
                <p>Elanı VIP etmək üçün xidməthaqqı 6 AZN-dir</p>
                <small>Bu form şərti xarakter daşıyır və heç bir bank hesabı üçün hərhansı bir təhlükə yaratmır. 
                    Sadəcə formun aktivləşməsi üçün random ifadələrlə formu dolu tutmaq gərəkir
                </small>
                <div 
                onClick={()=>handleVIP(vacId)}
                className="btn btn-info w-50 float-end m-4">
                    Ödəniş et
                </div>
            </div>
        </div>
    </div>
  )
}

export default VIP