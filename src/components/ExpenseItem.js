import "./ExpenseItem.css";
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYeart();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item_description"></div>
      <h2>my first component!</h2>
      <h2>{props.title}</h2>
      <h2>{props.amt}</h2>
      <h2>{props.date.toDateString()}</h2>
      <div className="expense-item__price">100$</div>
    </div>
  );
}

export default ExpenseItem;
