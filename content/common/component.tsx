import React, { useEffect, useState } from "react";

// const fullString: string = `
// Hi there!
// I'm Nizar Hmain, a software engineer
// currently based in Copenhagen (DK)
// `;
//
//
const MyComponent = (props: { input: string }) => {
  const [stuff, setStuff] = useState<string>("");
  const { input: fullString } = props;

  useEffect(() => {
    let counter = 0;

    const interval = setInterval(() => {
      if (counter < fullString?.length) {
        // type more stuff
        counter++;
        setStuff(() => `${fullString?.substring(0, counter)}_`);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p style={{ fontSize: "1.5em", fontFamily: "monospace" }}>{stuff}</p>
    </div>
  );
};

export default MyComponent;
