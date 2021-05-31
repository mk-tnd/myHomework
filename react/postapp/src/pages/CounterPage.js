import ExCounter from "../component/ExCounter";
import { useState } from "react";

function CounterPage() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle && <ExCounter />}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default CounterPage;
