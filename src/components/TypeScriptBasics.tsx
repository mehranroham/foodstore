import { useEffect } from 'react';

const TypeScriptBasics = () => {
  const add = (num1: number, num2: number) => {
    return num1 + num2;
  };

  //   let person: { name: string; age: number }[];

  useEffect(() => {
    console.log(add(3, 4));
  }, []);

  return <div>TypeScriptBasics</div>;
};

export default TypeScriptBasics;
