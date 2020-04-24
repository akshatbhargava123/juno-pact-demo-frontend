import { useState, useRef, useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import { SlideIn, Modal, ModalBody, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, Button } from '@chakra-ui/core';
import ReactQuill from 'react-quill';

const NoteModal = ({ showModal, onClose }) => {
	const [value, setValue] = useState('');
	const [title, setTitle] = useState('Title');
	const [editable, setEditable] = useState(false);

	const editorProps = {
		theme: 'snow',
	};

	if (!editable) {
		editorProps.modules = { toolbar: null };
		editorProps.readOnly = true;
	}

	return (
		<SlideIn duration={200} delay={50} in={showModal}>
			{styles => (
				<Modal isOpen={true} onClose={onClose} closeOnOverlayClick={false} size="40rem">
					<ModalOverlay opacity="0.9" />
					<ModalContent pb={5} {...styles} height="70vh">
						<ModalHeader>
							<input
								value={title}
								className="outline-none border-b border-gray-500 text-2xl"
							/>
							<ModalCloseButton onClick={onClose} />
						</ModalHeader>
						<ModalBody>
							<div style={{ height: 400 }} onClick={() => setEditable(true)}>
								<ReactQuill
									style={{ height: '100%' }}
									{...editorProps}
									value={value}
									onChange={setValue}
								/>
							</div>
						</ModalBody>
						<ModalFooter>
							<div className="flex">
								<Button color="red.500" mr="4px">Close</Button>
								<Button color="blue.500">Save</Button>
							</div>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}
		</SlideIn>
	);
};

export { NoteModal };
