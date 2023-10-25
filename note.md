笔记

useState是React的状态管理钩子，用于在函数组件中创建和管理局部状态。
通过调用useState，你可以初始化一个状态变量，并提供其初始值。
useState返回一个包含当前状态值和更新状态值的数组，通常用解构赋值来访问这两个值。
当状态值发生变化时，React会重新渲染组件。

example:
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```



useRef是React的引用管理钩子，用于获取对DOM元素的引用，或者在组件渲染之间存储可变值。
useRef返回一个ref对象，它的current属性用于存储和访问引用的值。
useRef中的值可以在多次渲染中保持不变，因此它通常用于访问DOM元素或在不触发重新渲染的情况下存储数据。

```
import React, { useRef, useEffect } from 'react';

function InputFocus() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

```

useEffect是React的副作用管理钩子，用于处理组件的副作用操作，如数据获取、DOM操作、订阅事件等。
useEffect接受一个函数，该函数包含了要进行的副作用操作，以及一个可选的依赖数组，用于控制何时执行副作用。
副作用函数可以返回一个清理函数，以处理副作用的清理工作。

```
import React, { useEffect, useState } from 'react';

function DataFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // 空依赖数组表示副作用只在组件挂载和卸载时运行

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

```