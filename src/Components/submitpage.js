import React from "react";
export default function first(props){
    
   

const fileInput = document.getElementById('file-upload');
const uploadButton = document.querySelector('.upload-button');

fileInput.addEventListener('change', (e) => {
  const fileName = e.target.value.split('\\').pop(); 
  uploadButton.textContent = fileName;

}
)}
