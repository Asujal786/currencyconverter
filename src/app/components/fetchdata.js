"use client"

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default async function fetchData(oldCurrency,newCurrency){

    const[data,setData]=useState();

    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_tv8HB6K13FzIuEC2vBniPbLKGMGmqb5kRZkIDa9O&currencies=${newCurrency}&base_currency=${oldCurrency}`;

    useEffect(() => {
      const datafetch = async () => {
        try {
          const response = await axios.get(url);

          setData(response.data); 
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      datafetch();
    }, [url]);

}