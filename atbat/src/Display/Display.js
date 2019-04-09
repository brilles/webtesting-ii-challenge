import React from 'react';

export default function Display({ ballCount, strikeCount }) {
  return (
    <div className="display">
      <h2>Display </h2>
      <p>Strikes: {strikeCount}</p>
      <p>Balls: {ballCount}</p>
    </div>
  );
}
