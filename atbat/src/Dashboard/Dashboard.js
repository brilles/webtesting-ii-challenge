import React from 'react';

export default function Dashboard({ strike, ball, foul, hit, reset }) {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={strike}>strike</button>
      <button onClick={ball}>ball</button>
      <button onClick={foul}>foul</button>
      <button onClick={hit}>hit</button>
      <button onClick={reset}>reset stats</button>
    </div>
  );
}
