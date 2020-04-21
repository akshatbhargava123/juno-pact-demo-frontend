import { useState, useRef } from 'react';
import { SlideIn, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/core';

const NoteModal = ({ showModal, onClose }) => {
	const [editorState, setEditorState] = useState('');

	return (
		<SlideIn duration={200} delay={50} in={showModal}>
			{styles => (
				<Modal isOpen={true} onClose={onClose}>
				<ModalOverlay opacity={styles.opacity} />
					<ModalContent pb={5} {...styles} className="h-64">
						<ModalHeader>Login now</ModalHeader>
						<ModalCloseButton onClick={onClose} />
						<ModalBody>

						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</SlideIn>
	);
};

export { NoteModal };
