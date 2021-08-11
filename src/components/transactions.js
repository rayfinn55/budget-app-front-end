import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import  { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

export default function Transactions() {
    const [ transactions, setTransactions ] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE}/transactions`)
        .then(res => setTransactions(res.data))
      }, []);

      return (
          <div>
              <h3>Budget Lists</h3>
              <ul>
                  {transactions.map((transaction, i) => {
                      <li key={i}>
                          <Link to={`/transactions/${i}`}>{transactions.name}</Link>
                      </li>
                  }
                  )}
              </ul>
          </div>
      )
}