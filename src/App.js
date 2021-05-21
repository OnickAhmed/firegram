import { useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid/ImageGrid';
import ImgModal from './components/ImgModal/ImgModal';
import Title from './components/Title/Title';
import UploadForm from './components/UploadForm/UploadForm';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImg && <ImgModal selectedImg = {selectedImg} setSelectedImg = {setSelectedImg}/>}
    </div>
  );
}

export default App;
