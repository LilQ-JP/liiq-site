import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TCG Nexus | LilQ',
  description: 'ブラウザで遊べるTCGオンライン対戦ツール',
};

export default function TCGNexusPlayPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#000' }}>
      <iframe
        src="https://lilq-jp.github.io/tcg-nexus/"
        style={{ width: '100%', height: '100%', border: 'none' }}
        allow="camera; microphone; fullscreen; clipboard-write; clipboard-read"
        title="TCG Nexus"
      />
    </div>
  );
}
