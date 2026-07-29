"use client";

import { useMemo, useState } from "react";

const MIN = 25;
const MAX = 500;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function RevenueCalculator() {
  const [trucks, setTrucks] = useState(150);

  const values = useMemo(
    () => ({
      cost: trucks * 2,
      billedLow: trucks * 5,
      billedHigh: trucks * 10,
      marginLow: trucks * 3,
      marginHigh: trucks * 8,
    }),
    [trucks],
  );

  return (
    <div
      className="calculator"
      aria-labelledby="calculator-title"
      data-reveal="up"
    >
      <div className="calculator__top">
        <div>
          <h3 id="calculator-title">What could monitoring add?</h3>
        </div>
        <output className="truck-count" htmlFor="truck-count">
          {trucks} trucks
        </output>
      </div>

      <label className="sr-only" htmlFor="truck-count">
        Number of trucks under monitoring
      </label>
      <input
        id="truck-count"
        className="calculator__range"
        type="range"
        min={MIN}
        max={MAX}
        step="25"
        value={trucks}
        // WebKit cannot paint a filled track on its own; feed it the position.
        style={
          {
            "--range-progress": `${((trucks - MIN) / (MAX - MIN)) * 100}%`,
          } as React.CSSProperties
        }
        onChange={(event) => setTrucks(Number(event.target.value))}
      />
      <div className="range-labels" aria-hidden="true">
        <span>{MIN}</span>
        <span>{MAX}</span>
      </div>

      <div className="calculator__math">
        <div className="math-row">
          <span>Your GoTruckCheck cost</span>
          <strong>{money.format(values.cost)} / month</strong>
          <small>{trucks} × $2</small>
        </div>
        <div className="math-symbol" aria-hidden="true">
          →
        </div>
        <div className="math-row math-row--accent">
          <span>What you could bill</span>
          <strong>
            {money.format(values.billedLow)}–{money.format(values.billedHigh)} / month
          </strong>
          <small>{trucks} × $5–10</small>
        </div>
      </div>

      <p className="calculator__note">
        That leaves{" "}
        <strong>
          {money.format(values.marginLow)}–{money.format(values.marginHigh)}
        </strong>{" "}
        before the repeat tests the reminders book. You set your own customer price.
      </p>
    </div>
  );
}
