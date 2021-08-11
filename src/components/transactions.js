import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL.js";
import Transaction from "./Transaction"
const API = apiURL();

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then(
        (response) => {
          setTransactions(response.data);
        },
        (e) => {
          console.log("axios error", e);
        }
      )
      .catch((e) => {
        console.log("caught", e);
      });
  }, []);
  return (
    <div className="Transactions">
      <section>
        <table>
          <tbody>
            {transactions.map((transaction) => {
              return <Transaction key={transaction.id} transaction={transaction} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;
