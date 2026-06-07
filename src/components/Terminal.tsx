import React, { useEffect, useState } from 'react';

const LINES = [
  { text: '$ pip install xrtm', delay: 400 },
  { text: '', delay: 200 },
  { text: '$ xrtm start', delay: 600 },
  { text: '', delay: 200 },
  { text: 'Loaded 5 questions from real-binary corpus', delay: 300 },
  { text: '[1/5] Will the Federal Reserve raise rates?', delay: 500 },
  { text: '  p=0.850  brier=0.0225', delay: 300 },
  { text: '[2/5] Will the ECB raise its key interest rates?', delay: 500 },
  { text: '  p=0.900  brier=0.0100', delay: 300 },
  { text: '[3/5] Will Bitcoin trade above $40,000?', delay: 500 },
  { text: '  p=0.780  brier=0.0484', delay: 300 },
  { text: '[4/5] Will the S&P 500 close above 4,500?', delay: 500 },
  { text: '  p=0.430  brier=0.3249', delay: 300 },
  { text: '[5/5] Will Tesla deliver 1.8M vehicles?', delay: 500 },
  { text: '  p=1.000  brier=0.0000', delay: 300 },
  { text: '', delay: 200 },
  { text: '═══════════════════════════════════════', delay: 200 },
  { text: '  Mean Brier: 0.089  |  Accuracy: 90%', delay: 400 },
  { text: '  Forecasts: 5      |  Duration: 12.4s', delay: 400 },
  { text: '═══════════════════════════════════════', delay: 200 },
  { text: '', delay: 200 },
  { text: '→ Artifacts written to runs/20260607T004903Z/', delay: 500 },
  { text: '$ ', delay: 99999, prompt: true },
];

export default function Terminal({ className }: { className?: string }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentDelay = 0;

    for (let i = 0; i < LINES.length; i++) {
      currentDelay += LINES[i].delay;
      timeout = setTimeout(() => setVisibleLines(i + 1), currentDelay);
    }
    return () => clearTimeout(timeout);
  }, []);

  const getLineStyle = (line: (typeof LINES)[0]) => {
    if (line.text.startsWith('$')) return { color: '#50fa7b', fontWeight: 600 };
    if (line.text.startsWith('→')) return { color: '#ff79c6' };
    if (line.text.startsWith('══')) return { color: '#6272a4' };
    if (line.text.match(/^\[/)) return { color: '#8be9fd' };
    if (line.text.match(/Mean Brier|Forecasts/)) return { color: '#50fa7b' };
    if (line.text.match(/p=/)) return { color: '#f1fa8c' };
    return { color: '#f8f8f2' };
  };

  return (
    <div
      className={className}
      style={{
        background: '#1e1e2e',
        borderRadius: 12,
        overflow: 'hidden',
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
        fontSize: '0.82rem',
        lineHeight: 1.7,
        boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ background: '#181825', padding: '0.5rem 1rem', display: 'flex', gap: 8, alignItems: 'center', borderBottom: '1px solid #313244' }}>
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5c57' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f3c13a' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#51c455' }} />
        <span style={{ color: '#6c7086', fontSize: '0.75rem', marginLeft: '0.5rem' }}>terminal — xrtm demo</span>
      </div>
      <div style={{ padding: '1.25rem', minHeight: 320 }}>
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={getLineStyle(line)}>
            {line.text || ' '}
            {line.prompt && <span className="cursor-blink" style={{ color: '#50fa7b' }}>▊</span>}
          </div>
        ))}
      </div>
      <style>{`
        .cursor-blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
