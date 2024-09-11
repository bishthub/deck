import './App.css';
import pdfFile from './assets/deck.pdf';

function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <iframe src={pdfFile} type='application/pdf' width='100%' height='100%' />
    </div>
  );
}

export default App;
