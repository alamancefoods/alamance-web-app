import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MyDropZone from '../operations/paParser/MyDropZone'

import {
  HOME, ANALYTICS, SALES, OPERATIONS, HUMAN_RESOURCES, SETTINGS
} from '../../constants/servicesAndRoles';

import Home from '../home/Home';
import Analytics from '../analytics/Analytics';
import Sales from '../sales/Sales';
import HumanResources from '../humanResources/HumanResources';
import Settings from '../settings/Settings';

export const ServiceSwitch = () => {
  const service = useSelector((state: any) => state.serviceReducer.service)
  const [selectedService, setSelectedService] = useState(<Home />)

  useEffect(() => {
    switch(service){
      case HOME:
        setSelectedService(<Home />)
        break;
      case ANALYTICS:
        setSelectedService(<Analytics />)
        break;
      case SALES:
        setSelectedService(<Sales />)
        break;
      case OPERATIONS:
        setSelectedService(<MyDropZone />)
        break;
      case HUMAN_RESOURCES:
        setSelectedService(<HumanResources />)
        break;
      case SETTINGS:
        setSelectedService(<Settings />)
        break;
      default:
        setSelectedService(<Home />)
        break;
    }
  }, [service])



  return(
    selectedService
  )
}
