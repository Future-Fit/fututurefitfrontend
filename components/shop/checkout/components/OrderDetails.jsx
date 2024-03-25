const OrderDetails = () => {
  return (
    <div className="order-box">
      <h3>Your Order</h3>
      <table>
        <thead>
          <tr>
            <th>
              <strong>Product</strong>
            </th>
            <th>
              <strong>Subtotal</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="cart-item">
            <td className="product-name"></td>
            <td className="product-total"></td>
          </tr>

          <tr className="cart-item">
            <td className="product-name"></td>
            <td className="product-total"></td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="cart-subtotal">
            <td>Subtotal</td>
            <td>
              <span className="amount"></span>
            </td>
          </tr>
          <tr className="cart-subtotal">
            <td>Shipping</td>
            <td>
              <span className="amount"></span>
            </td>
          </tr>
          <tr className="order-total">
            <td>Total</td>
            <td>
              <span className="amount"></span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderDetails;
