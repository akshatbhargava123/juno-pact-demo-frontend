import Quill from 'quill';
import MagicUrl from 'quill-magic-url';
import ReactQuill from 'react-quill';

Quill.register('modules/magicUrl', MagicUrl);

const ChatInput = () => {
	return (
		<div className="h-full rounded border border-gray-600">
			<ReactQuill
				theme="snow"
				modules={{
					toolbar: [
						['bold', 'italic', 'underline'],
						['code-block', 'link'],
					],
					magicUrl: true,
				}}
				placeholder="Message Satwik"
			/>
		</div>
	);
};

export default ChatInput;
