
import React, { useState } from 'react';
import './App.css';

const recoveryPlan = [
  {
    phase: "Faza 1 (10-20 aprilie)",
    items: [
      "HGH 2 UI dimineata",
      "HGH 2 UI seara"
    ]
  },
  {
    phase: "Faza 2 (20-30 aprilie)",
    items: [
      "HCG 1000 UI (doar in zilele 20, 22, 24, 26, 28)",
      "HGH 4 UI dimineata"
    ]
  },
  {
    phase: "Faza 3 (1-30 mai)",
    items: [
      "Clomid 50 mg/zi",
      "Tamoxifen 20 mg/zi",
      "HGH 4 UI dimineata"
    ]
  },
  {
    phase: "Faza 4 (1-20 iunie)",
    items: ["HGH 3-4 UI/zi"]
  },
  {
    phase: "Faza 5 (20 iunie – Vacanta)",
    items: ["HGH 3-4 UI/zi"]
  }
];

function App() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (phase, item) => {
    const key = `${phase}-${item}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="App">
      <h1>Recovery Plan - JuliusMasters</h1>
      {recoveryPlan.map((section) => (
        <div key={section.phase} className="card">
          <h2>{section.phase}</h2>
          <ul>
            {section.items.map((item) => {
              const key = `${section.phase}-${item}`;
              return (
                <li key={key}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkedItems[key] || false}
                      onChange={() => toggleCheck(section.phase, item)}
                    />
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
