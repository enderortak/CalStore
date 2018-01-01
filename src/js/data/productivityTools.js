const
  toolTypes = ["MATLAB_TOOL", "CONCERTO_SCRIPT", "EXCEL_MACRO", "ATI_INCA_SCRIPT"],
  toolTypesSemantic = ["Matlab Tool", "Concerto Script", "Excel Macro", "ATI/INCA Script"],
  authors = ["Metin Yılmaz", "Ender Ortak"],
  addedOn = "01.01.2017",
  lastUpdatedOn = "01.06.2017",
  versions = ["1.0.0", "0.1.0", "2.1.2", "1.1.4", "3.0.1", "2.3.1", "1.0.7", "2.2.1"],
  numOfDownloads = [75, 42, 55, 81, 94],
  ratings = [2, 3, 4, 5],
  numOfComments = [1, 3, 4, 8, 11, 15],
  getRandom = array => array[Math.floor(Math.random() * array.length)];

const productivityTools = [];
for (let i = 0; i < 10; i += 1) {
  for (let k = 0; k < toolTypes.length; k += 1) {
    productivityTools.push({
      name: `${toolTypesSemantic[k]} ${i + 1}`,
      imageUrl: "",
      type: toolTypes[k],
      version: getRandom(versions),
      isFeatured: Math.random() >= 0.5,
      description: `This is a brief description for ${toolTypesSemantic[k]} ${i + 1}`,
      author: getRandom(authors),
      addedOn,
      lastUpdatedOn,
      numOfDownloads: getRandom(numOfDownloads),
      rating: getRandom(ratings),
      numOfComments: getRandom(numOfComments),
      comments: [],
    });
  }
}

export default productivityTools;
