import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    
    <div class="container ">
    <div class="top">
 <img src="./Cloud.png" alt="" ></img>
      
      <div class="top_right">
    <h1>Upload files</h1>
    <p>Select and upload the files of your choice</p>
   
  </div>
  </div>
  <hr/>
    <div class="upload-area">
      <img src='./Components/Cloud_pic.png' alt="Image Symbol"></img>
      <label  for="upload">Choose a file or drag & drop it here</label>
      <h4 >JPEG,PNG,PDG and MP4 formats,upto 50MB</h4>
<button class="browse_button" className="file-label">Browse File</button>
 <input type="file" class="file-input" multiple /> 

 <input type="file" id="fileInput" class="file-input" multiple ></input>
 <div class="file-list" id="fileList"></div>
    </div>
</div>


    </>
  );
}

export default App;
