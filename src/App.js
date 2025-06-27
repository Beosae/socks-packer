import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [socksPerSet, setSocksPerSet] = useState(5);
  const [setCount, setSetCount] = useState(0);
  const [jukCount, setJukCount] = useState("");

  const totalPairs = socksPerSet * setCount;
  const totalJuk = totalPairs / 10;

  const jukToPair = jukCount * 10;
  const fullSet = socksPerSet > 0 ? Math.floor(jukToPair / socksPerSet) : 0;
  const leftover = socksPerSet > 0 ? jukToPair % socksPerSet : 0;

  return (
    <div className="container">
      <h1>🧦 양말 포장 단위 환산기</h1>

      <div className="input-row">
        <label>1세트 기준 켤레 수:</label>
        <input
          type="number"
          value={socksPerSet}
          onChange={(e) => setSocksPerSet(Number(e.target.value))}
        />
      </div>

      <div className="input-row">
        <label>총 세트 수:</label>
        <input
          type="number"
          value={setCount}
          onChange={(e) => setSetCount(Number(e.target.value))}
        />
      </div>

      <div className="results">
        <p>📦 총 켤레 수: <strong>{totalPairs}</strong> 켤레</p>
        <p>📦 죽 단위 환산: <strong>{totalJuk.toFixed(1)}</strong> 죽</p>
      </div>

      <hr />

      <div className="input-row">
        <label>죽 수 입력:</label>
        <input
          type="number"
          value={jukCount}
          onChange={(e) => setJukCount(Number(e.target.value))}
        />
      </div>

      <div className="results">
        <p>📦 총 켤레 수: <strong>{jukToPair}</strong> 켤레</p>
        <p>📦 세트 수: <strong>{fullSet}</strong> 세트 + 잔여 <strong>{leftover}</strong> 켤레</p>
      </div>

      {/* ✅ 하단 안내: 1번만 출력 */}
      <div className="note">
        ℹ️ <strong>1죽 = 10켤레</strong> 기준으로 계산됩니다.
      </div>
    </div>
  );
}
