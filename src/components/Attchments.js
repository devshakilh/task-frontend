// Inside your React component
import React, { useState } from 'react';
import Modal from './FileUpload'; // Import your modal component

const Attchments = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAttachmentClick = () => {
    setModalOpen(true);
    // Additional logic for handling attachment click
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handleAttachmentClick} className="btn">Open Modal</button>
      {isModalOpen && <Modal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default Attchments;