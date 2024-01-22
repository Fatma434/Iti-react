import { memo, useState } from "react";
import "../styles/Greetingfun.css";
import Types from "prop-types";

const Greetingfun = (props) => {
  const [count, setCount] = useState(props.count);

  console.log(props);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const conditionalStyle = count > 10 ? "upperthanten" : "lowerthanten";

  return (
    <>
      <div className={conditionalStyle}>{count}</div>
      <button onClick={handleAdd}> + </button>
    </>
  );
};

Greetingfun.propTypes = {
  count: Types.number.isRequired,
};

Greetingfun.defaultProps = {
  count: -10,
};

export default memo(Greetingfun);
