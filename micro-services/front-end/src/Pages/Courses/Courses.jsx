import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faTimes, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Courses.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Courses = () => {
  const isLoggedIn = true;

  // State for managing courses data
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [errorText, setErrorText] = useState('');

  const [classes, setClasses] = useState(() => {
    // Initialize state with classes from localStorage or a default value
    const storedClasses = localStorage.getItem('classes');
    return storedClasses ? JSON.parse(storedClasses) : [
      { name: 'Class 1', description: 'Description 1', teacher: 'Teacher 1', startDate: '2023-01-01', endDate: '2023-01-31', tags: ['Tag1'], image: '' },
      { name: 'Class 2', description: 'Description 2', teacher: 'Teacher 2', startDate: '2023-02-01', endDate: '2023-02-28', tags: ['Tag2'], image: '' },
      { name: 'Class 3', description: 'Description 3', teacher: 'Teacher 3', startDate: '2023-03-01', endDate: '2023-03-31', tags: ['Tag3'], image: '' }
    ];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Effect to update localStorage whenever classes change
  useEffect(() => {
    localStorage.setItem('classes', JSON.stringify(classes));
  }, [classes]);

  const handleClickOpen = () => {
    setOpen(true);
    setErrorText(''); // Clear any previous error message
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditIndex(null);
    setClassName('');
    setDescription('');
    setTeacherName('');
    setStartDate('');
    setEndDate('');
    setTags([]);
    setImage(null);
    setImagePreview('');
    setErrorText(''); // Clear any previous error message
  };

  const handleCreateOrEditClass = () => {
    // Check if any required fields are empty
    if (!className || !description || !teacherName || !startDate || !endDate || tags.length === 0 || !imagePreview) {
      setErrorText('You must fill all the required information!');
      return;
    }

    const newClass = { name: className, description, teacher: teacherName, startDate, endDate, tags, image: imagePreview };
    if (isEditing && editIndex !== null) {
      const updatedClasses = classes.map((cls, index) => (index === editIndex ? newClass : cls));
      setClasses(updatedClasses);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setClasses([...classes, newClass]);
    }
    setOpen(false);
    setClassName('');
    setDescription('');
    setTeacherName('');
    setStartDate('');
    setEndDate('');
    setTags([]);
    setImage(null);
    setImagePreview('');
    setErrorText(''); // Clear error message after successful submission
  };

  const handleAddTag = () => {
    if (tag.trim()) {
      setTags([...tags, tag.trim()]);
      setTag('');
    }
  };

  const handleDeleteTag = () => {
    if (tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const handleDeleteClass = (index) => {
    setDeleteIndex(index);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteClass = () => {
    const updatedClasses = classes.filter((_, i) => i !== deleteIndex);
    setClasses(updatedClasses);
    setShowDeleteConfirm(false);
    setDeleteIndex(null);
  };

  const cancelDeleteClass = () => {
    setShowDeleteConfirm(false);
    setDeleteIndex(null);
  };

  const handleEditClass = (index) => {
    const classToEdit = classes[index];
    setClassName(classToEdit.name);
    setDescription(classToEdit.description);
    setTeacherName(classToEdit.teacher);
    setStartDate(classToEdit.startDate);
    setEndDate(classToEdit.endDate);
    setTags(classToEdit.tags);
    setImagePreview(classToEdit.image);
    setEditIndex(index);
    setIsEditing(true);
    setOpen(true);
    setErrorText(''); // Clear any previous error message
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  return (
    <div className="courses-container">
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search anything" className="search-input" onChange={(e) => setSearchTerm(e.target.value)}/>
          <button type="submit" className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <button className="create-button" onClick={handleClickOpen}>
          <FontAwesomeIcon icon={faPlus} /> Create new
        </button>
      </div>
      <ul className="class-list">
        {classes.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.teacher.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((item, index) => (
          <li key={index} className="list-item">
            {/* Link to Course_detail.jsx with class name parameter */}
            <Link to={`/course/${encodeURIComponent(item.name)}`}>
              <img src={item.image} alt="Class" className="class-image" />
            </Link>
            <div className="list-text">
              <div className="class-name"><strong>{item.name}</strong></div>
              <div className="class-description"><strong>Description:</strong> {item.description}</div>
              <div className="class-teacher"><strong>Teacher:</strong> {item.teacher}</div>
              <div className="class-dates"><strong>Times:</strong> From <strong>{item.startDate}</strong> to <strong>{item.endDate}</strong></div>
              <div className="class-tags">
                {item.tags.map((tag, idx) => (
                  <button key={idx} className="tag-button">{tag}</button>
                ))}
              </div>
            </div>
            <div className="action-buttons">
              <button className="edit-button" onClick={() => handleEditClass(index)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button className="delete-button" onClick={() => handleDeleteClass(index)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {open && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-title">
              <span>{isEditing ? 'Edit Class' : 'Create New Class'}</span>
              <button className="dialog-close-button" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="dialog-content">
              <input
                type="text"
                placeholder="Class Name"
                className="dialog-input"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
              <textarea
                placeholder="Description"
                className="dialog-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                placeholder="Teacher Name"
                className="dialog-input"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
              />
              <input
                type="date"
                className="dialog-input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <input
                type="date"
                className="dialog-input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <div className="tag-container">
                <input
                  type="text"
                  placeholder="Add Tag"
                  className="dialog-input"
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                />
                <button className="tag-add-button" onClick={handleAddTag}>
                  <FontAwesomeIcon icon={faPlus} /> Add
                </button>
                <button className="tag-delete-button" onClick={handleDeleteTag}>
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </div>
              <div className="tag-list">
                {tags.map((tag, index) => (
                  <span key={index} className="tag-item">{tag}</span>
                ))}
              </div>
              <input
                type="file"
                accept="image/*"
                className="dialog-input"
                onChange={handleImageChange}
              />
              {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
              {errorText && <p className="error-text">{errorText}</p>}
            </div>
            <div className="dialog-actions">
              <button className="dialog-button" onClick={handleCreateOrEditClass}>
                {isEditing ? 'Update Class' : 'Create Class'}
              </button>
            </div>
          </div>
        </div>
      )}
      {showDeleteConfirm && (
        <div className="delete-confirm-overlay">
          <div className="delete-confirm-dialog">
            <p>Are you sure you want to delete this class?</p>
            <div className="delete-confirm-actions">
              <button className="delete-confirm-button" onClick={confirmDeleteClass}>Yes</button>
              <button className="delete-cancel-button" onClick={cancelDeleteClass}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Courses;
