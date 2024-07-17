import React, { useState } from 'react';
import './Course_detail.css';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Navbar from '../../Components/Navbar/Navbar';

const Course_detail = () => {
  const isLoggedIn = true;
  const { className, description } = useParams();
  const [editorHtml, setEditorHtml] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const classDetails = {
    name: className,
    courseName: description,
  };

  const handleAddFolder = () => {
    // Logic to handle adding a folder for materials
    if (selectedFile) {
      alert(`File "${selectedFile.name}" added successfully.`);
    } else {
      alert('Please select a file to add.');
    }
  };

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="course-detail-container">
      <Navbar isLoggedIn={isLoggedIn}/>
      <h1>Course Detail: {classDetails.name}</h1>
      <div className="class-detail">
        <div className="detail-text">
          <p>Class Name: {classDetails.name}</p>
          <p>Course Name: {classDetails.courseName}</p>
        </div>
      </div>
      <div className="add-folder-button">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleAddFolder}>Add Folder</button>
      </div>
      <div className="editor-container">
        <ReactQuill
          theme="snow"
          value={editorHtml}
          onChange={handleEditorChange}
        />
      </div>
      <div className="updated-content">
        <h2>Updated Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
      </div>
      <button className="scroll-to-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default Course_detail;
