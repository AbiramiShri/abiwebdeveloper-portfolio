import React from 'react';
import {Modal, Button} from 'react-bootstrap';

const ProjectModal = ({
  isOpen,
  onClose,
  title,
  description,
  techStack,
  roles,
  responsibility = [], // Ensure it's an array to avoid errors
  link,
}) => {
  return (
    <Modal className="custom_modal" show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="text-center">{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-0">
        <p>{description}</p>
        <h6 className="text-decoration-underline">Role:</h6> <p>{roles}</p>
        <h6 className="text-decoration-underline">Tech Stack:</h6>{' '}
        <p> {techStack}</p>
        <h6 className="text-decoration-underline">Responsibilities:</h6>
        {responsibility.length > 0 ? (
          responsibility.map((task, index) => (
            <p key={index}>
              <span className="list-icon">•</span> {task}
            </p>
          ))
        ) : (
          <p>No responsibilities listed.</p>
        )}
        <div className="text-center">
          {link && (
            <Button href={link} target="_blank">
              Visit Website
            </Button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
