```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here. The return function should cancel the timeout.
    let timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return <div>Count: {count}</div>;
}
```