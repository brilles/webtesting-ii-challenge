import React from 'react';

export default function Display({
  ballCount,
  strikeCount,
  outsCount,
  hitCount
}) {
  return (
    <div className="display">
      <div className="display-left">
        <h2>Display </h2>
        <p>Strikes: {strikeCount}</p>
        <p>Balls: {ballCount}</p>
        <p>Outs: {outsCount}</p>
        <p>Hits: {hitCount}</p>
      </div>
    </div>
  );
}
