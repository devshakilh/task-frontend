// Inside your React component
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making API requests
import { FaFileUpload } from 'react-icons/fa'; // Import the file upload icon

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const handleFileUpload = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);

    // Upload files to the server
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('attachments', file);
    });

    try {
      await axios.post('http://localhost:3001/upload', formData);
   console.log(formData)
    } catch (error) {
      console.error('File upload failed', error);
      // Handle error, e.g., display an error message
    }
  };


  return (
    <div>
      {/* Your component content */}
      <label className="flex items-center space-x-2 cursor-pointer">
        <span className="text-gray-500">
          <FaFileUpload />
        </span>
        <span className="text-gray-700">{files.length > 0 ? `${files.length} ` : '0'}</span>
        <input type="file" multiple onChange={handleFileUpload} className="hidden" />
      </label>
    </div>

  );
};

export default FileUpload