
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

export default function RecoveryChecklist() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (phase, item) => {
    const key = `${phase}-${item}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">Recovery Plan - JuliusMasters</h1>
      {recoveryPlan.map((section) => (
        <Card key={section.phase} className="bg-zinc-900 text-white">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">{section.phase}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => {
                const key = `${section.phase}-${item}`;
                return (
                  <li key={key} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={checkedItems[key] || false}
                      onChange={() => toggleCheck(section.phase, item)}
                    />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ))}
      <div className="text-center mt-6 text-sm text-zinc-500">
        Add this to your iPhone Home Screen to track daily ✔️
      </div>
    </div>
  );
}
