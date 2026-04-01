import Silk from '@components/Silk';

function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Silk
        speed={5}
        scale={1}
        color="#2563eb"
        noiseIntensity={1.5}
        rotation={0}
      />
    </div>
  );
}

export default App;
