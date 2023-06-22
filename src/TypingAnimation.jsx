import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
	// Create reference to store the DOM element containing the animation
	const typingRef = useRef(null);

	useEffect(() => {
		// An object of the animation objects
		const options = {
			// An array of strings or HTML elements to be displayed/typed.
			strings: [
				// You can use HTML elements:
				'<strong>This is a typing effect with its tag styled in CSS</strong>',

				// You can give the elements a class and style the class in CSS (NOTE: Not `className` but `class`)
				'<em class="emphasis">This is an emphasis tag with its class styled in CSS</em>',

				// Or you can just pass a regular string
				'^3000 Bye Bye',
			],

			// The speed at which characters are typed in milliseconds. In this example, 100 milliseconds.
			typeSpeed: 100,

			// The speed at which characters are deleted (when going back) in milliseconds.
			backSpeed: 50,

			// The delay before deleting the previous string (in milliseconds)
			backDelay: 3000,

			// A boolean indicating whether the typing animation should loop
			loop: true,

			// A boolean indicating whether to show/hide the default blinking vertical line cursor
			showCursor: true,

			// What the cursor should look like.
			cursorChar: '____',

			fadeOut: true,

		};

		const typingInstance = new Typed(typingRef.current, options);

		return () => {
			// Make sure you always destroy the Typed instance during cleanup to stop animation and memory leaks
			typingInstance.destroy();
		};
	}, []);
	return <span ref={typingRef}></span>;
};

export default TypingAnimation;
