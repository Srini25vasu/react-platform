import { useRef, useState } from "react";

//https://react.dev/reference/react/useRef#usage
export default function Stopwatcher() {
  const [startTime, setStartTime] = useState<number>();
  const [now, setNow] = useState<number>();
  const intervalRef = useRef<number | undefined>(undefined);

  let timePassed = 0;
  if (startTime && now) {
    timePassed = now - startTime;
  }
  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 1);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-20 text-slate-900 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 mx-auto max-w-6xl items-start">
        <div>Time passed: {timePassed}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleStart}> Start Timer </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleStop}>Stop Timer</button>
      </div>
    </main>
  );
}
