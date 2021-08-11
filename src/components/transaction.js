import { Link } from "react-router-dom";

function Transaction({ transaction }) {
  return (
    <tr>
      <td>
        {transaction.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={transaction.name} target="_blank" rel="noreferrer">
          {transaction.name}
          {transaction.amount}
          {transaction.from}
          {transaction.date}
        </a>
      </td>
      <td>
        <Link to={`/transaction/${transaction.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Transaction;
