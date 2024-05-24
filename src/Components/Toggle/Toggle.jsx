import { useState } from "react";

export default function Toggle() {
  const [isShow, setIsShow] = useState(true);
  const [isOne, setIsOne] = useState(1);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const handleChangeNumber = () => {
    setIsOne(!isOne);
  };

  return (
    <div>
      <button onClick={handleToggle}>{isShow ? "Hide" : "Show"}</button>
      {isShow && (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam non,
          aliquid repellendus magnam repudiandae, deserunt a quae tenetur iste
          porro officiis aperiam recusandae voluptatem maxime ratione culpa
          nulla vero ipsum.
        </p>
      )}

      <button onClick={handleChangeNumber}>{isOne ? "1" : "2"}</button>
      {isOne ? <p>1</p> : <p>2</p>}
    </div>
  );
}
