import { useRef, useState, useEffect } from 'react';

export default function App() {
  const [on, setOn] = useState(false);
  const renderCount = useRef(0);

  // Update on state;
  function forceRender() {
    setOn((prevOn) => !prevOn);
    console.log(renderCount);
  }

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <main>
      <h3>Understanding refs</h3>
      <button onClick={forceRender}>Force re-render w/ state change</button>
      <h4>Render count: {renderCount.current}</h4>
    </main>
  );
}
