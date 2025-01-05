```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearTimeout(timeoutId); // Cleanup function
  }, [count]);

  return <div>Count: {count}</div>;
}
```