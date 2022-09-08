/**
 * @param {string} src
 * @param {string} dest
 */
export function copy(src, dest) {
	fs.statSync(src).isDirectory()
		? copyDir(src, dest)
		: fs.copyFileSync(src, dest);
}

/**
 * @param {string} targetDir
 */
export function formatTargetDir(targetDir) {
	return targetDir?.trim().replace(/\/+$/g, '') || '';
}

/**
 * @param {string} srcDir
 * @param {string} destDir
 */
export function copyDir(srcDir, destDir) {
	fs.mkdirSync(destDir, { recursive: true });
	for (const file of fs.readdirSync(srcDir)) {
		const srcFile = path.resolve(srcDir, file);
		const destFile = path.resolve(destDir, file);
		copy(srcFile, destFile);
	}
}

/**
 * @param {string} path
 */
export function isEmpty(path) {
	const files = fs.readdirSync(path);
	return files.length === 0 || (files.length === 1 && files[0] === '.git');
}
/**
 * @param {string} dir
 */
export function emptyDir(dir) {
	if (!fs.existsSync(dir)) return;
	for (const file of fs.readdirSync(dir)) {
		if (file === '.git') continue;
		fs.rmSync(path.resolve(dir, file), { recursive: true, force: true });
	}
}

/**
 * @param {string} projectName
 */
export function isValidPackageName(projectName) {
	return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
		projectName
	);
}

/**
 * @param {string} projectName
 */
export function toValidPackageName(projectName) {
	return projectName
		.trim()
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/^[._]/, '')
		.replace(/[^a-z0-9-~]+/g, '-');
}
