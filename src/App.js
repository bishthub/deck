import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import pdfFile from './assets/deck.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const App = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js'>
      <div>
        <Viewer
          theme='dark'
          fileUrl={pdfFile}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
};

export default App;
