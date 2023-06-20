import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAccess = ()=>{
    const access = useSelector((state)=>state.access)
	const navigate = useNavigate();

	useEffect(()=>{
		!access && navigate("/");
	},[access])
}

