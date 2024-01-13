// Inside your React component
import React, { useState } from 'react';
import Modal from './FileUpload'; // Import your modal component

const Attchments = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAttachmentClick = () => {
    setModalOpen(true);
   
  };

  return (
    <div>
    
      <button onClick={handleAttachmentClick} className="btn">Open Modal</button>
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default Attchments;