/**
 * @vinsjo/create-microbundle example function
 * replace with your own code :)
 * @param {...number[]} numbers
 */
export function add(...numbers) {
	return numbers.reduce((sum, current) => sum + current, 0);
}
