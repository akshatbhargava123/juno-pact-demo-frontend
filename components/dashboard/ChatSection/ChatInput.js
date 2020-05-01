import Quill from 'quill';
import MagicUrl from 'quill-magic-url';
import ReactQuill from 'react-quill';
import { useRef, useEffect, useState } from 'react';

Quill.register('modules/magicUrl', MagicUrl);

const getQuillCustomModule = (shiftEnterHandler = () => {}) => ({
	toolbar: [
		['bold', 'italic', 'underline'],
		['code-block', 'link'],
	],
	magicUrl: true,
	keyboard: {
		bindings: {
			custom: {
				key: 13,
				handler: shiftEnterHandler,
			},
		},
	},
});

const ChatInput = ({ onSend }) => {
	const quillRef = useRef()
	const [editorState, setEditorState] = useState('<p><strong>Hi</string><p>');
	const [quillJSModules, setQuillJSModules] = useState();

	const sendMessageHandler = () => {
		console.log('send message')
	};

	useEffect(() => {
		setQuillJSModules(getQuillCustomModule(sendMessageHandler));
	}, []);

	return (
		<div className="h-full rounded border border-gray-600">
			<ReactQuill
				theme="snow"
				ref={quillRef}
				value={editorState}
				modules={quillJSModules}
				placeholder="Message Satwik"
				onChange={value => setEditorState(value)}
			/>
		</div>
	);
};

export default ChatInput;
