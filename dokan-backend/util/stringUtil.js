/**
 * create slug from string
 * @param {*} text 
 * @param {*} delimiter 
 * 
 */
const slugify = (text, delimiter = '-') => {
  // "This is tshirt" => "this-is-tshirt"
  return text.trim().toLowerCase().replace(/\s+/g, delimiter);
}

module.exports = {
  slugify,
};