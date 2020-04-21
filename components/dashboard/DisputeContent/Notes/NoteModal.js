import { useState, useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import { SlideIn, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton } from '@chakra-ui/core';

const NoteModal = ({ showModal, onClose }) => {
	const [editorState, setEditorState] = useState('');

	
	useEffect(() => {
		if (showModal) {
			const editor = new EditorJS({
				holderId: 'editorjs',
				placeholder: 'Write note content here...',
				autofocus: true,
				tools: {},
			});
		}
	});

	return (
		<SlideIn duration={200} delay={50} in={showModal}>
			{styles => (
				<Modal isOpen={true} onClose={onClose} closeOnOverlayClick={false}>
					<ModalOverlay opacity="0.9" />
					<ModalContent pb={5} {...styles} height="60%">
						<ModalHeader>Login now</ModalHeader>
						<ModalCloseButton onClick={onClose} />
						<ModalBody>
							<div id="editorjs"></div>
						</ModalBody>
					</ModalContent>
				</Modal>
			)}
		</SlideIn>
	);
};

export { NoteModal };
