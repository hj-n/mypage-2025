import YAML from 'yaml';

export const readYaml = async (file) => {
	/**
	 * Reads a YAML file and returns the parsed object.
   * @param {string} file - The file object earned by 'require' function.}
	 * @returns {object} - The parsed object. (in dictionary)
	 */
	let info;
	await fetch(file)
					.then(response => response.text())	
					.then(text => {
						info = YAML.parse(text);
					});
	
	return info;
}