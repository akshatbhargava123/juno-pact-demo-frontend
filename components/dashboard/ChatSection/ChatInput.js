import ReactQuill from "react-quill"

const ChatInput = () => {
	return (
		<div className="h-full rounded border border-gray-600">
			<ReactQuill
				theme="snow"
				modules={{
					toolbar: [
						['bold', 'italic', 'underline'],
						['code-block', 'link'],
					]
				}}
				toolbar={{ maxHeight: 200 }}
				placeholder="Message Satwik"
			/>
		</div>
	);
};

export default ChatInput;
