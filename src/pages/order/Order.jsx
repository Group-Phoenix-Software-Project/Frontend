import "./order.css";

export default function order() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h2 className="widgetLgTitle">Orders</h2>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
        <th className="widgetLgTh">OrderID</th>
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Contact Number</th>
          <th className="widgetLgTh">Delivery Address</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
        <td className="widgetLgDate">0001</td>
          <td className="widgetLgUser">
            <span className="widgetLgName">Sahan Fernando</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgDate">0712502505</td>
          <td className="widgetLgDate">Katubedda, Moratuwa</td>
          <td className="widgetLgAmount">Rs.122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        
        <tr className="widgetLgTr">
        <td className="widgetLgDate">0002</td>
          <td className="widgetLgUser">
            <span className="widgetLgName">Nimal Perera</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgDate">0712502505</td>
          <td className="widgetLgDate">Katubedda, Moratuwa</td>
          <td className="widgetLgAmount">Rs.122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        
        <tr className="widgetLgTr">
        <td className="widgetLgDate">0003</td>
          <td className="widgetLgUser">
            <span className="widgetLgName">Ananda sugathapala</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgDate">0712502505</td>
          <td className="widgetLgDate">Katubedda, Moratuwa</td>
          <td className="widgetLgAmount">Rs.122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        
        <tr className="widgetLgTr">
        <td className="widgetLgDate">0004</td>
          <td className="widgetLgUser">
            <span className="widgetLgName">Nalani Fernando</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgDate">0712502505</td>
          <td className="widgetLgDate">Katubedda, Moratuwa</td>
          <td className="widgetLgAmount">Rs.122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        
      </table>

      
    </div>
  );
}
