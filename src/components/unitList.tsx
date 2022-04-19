import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Actions from "../actions";

export const UnitList = () => {
    const units = useSelector((state) => state.units);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch((Actions.unitActions.getUnit()));
    }, [dispatch]);
  
    return (
      <>
      <ul>
          {units.map((unit) =>{
              return <li key={unit.id}>{unit.name}</li>
          })}
      </ul>
        
      </>
    );
  };