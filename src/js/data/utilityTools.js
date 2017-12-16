const
  toolTypes = ["MATLAB_TOOL", "CONCERTO_SCRIPT", "EXCEL_MACRO", "ATI_INCA_SCRIPT"],
  toolTypesSemantic = ["Matlab Tool", "Concerto Script", "Excel Macro", "ATI/INCA Script"],
  authors = ["Metin Yılmaz", "Ender Ortak"],
  addedOn = "01.01.2017",
  numOfDownloads = [75, 42, 55, 81, 94],
  ratings = [2, 3, 4, 5],
  numOfComments = [1, 3, 4, 8, 11, 15],
  getRandom = array => array[Math.floor(Math.random() * array.length)];

const utilityTools = [];
for (let i = 0; i < 10; i += 1) {
  for (let k = 0; k < toolTypes.length; k += 1) {
    utilityTools.push({
      name: `${toolTypesSemantic[k]} ${i + 1}`,
      imageUrl: "",
      type: toolTypes[k],
      description: `This is a brief description for ${toolTypesSemantic[k]} ${i + 1}`,
      author: getRandom(authors),
      addedOn,
      numOfDownloads: getRandom(numOfDownloads),
      rating: getRandom(ratings),
      numOfComments: getRandom(numOfComments),
    });
  }
}

const a = [
  { name: "Tool 1", toolType: "MATLAB_TOOL" },
  { name: "Script 1", toolType: "CONCERTO_SCRIPT" },
  { name: "Tool 2", toolType: "MATLAB_TOOL" },
  { name: "Script 2", toolType: "CONCERTO_SCRIPT" },
  { name: "Tool 3", toolType: "MATLAB_TOOL" },
  { name: "Script 3", toolType: "CONCERTO_SCRIPT" },
  { name: "Tool 4", toolType: "MATLAB_TOOL" },
  { name: "Script 4", toolType: "CONCERTO_SCRIPT" },
  { name: "Tool 5", toolType: "MATLAB_TOOL" },
  { name: "Script 5", toolType: "CONCERTO_SCRIPT" },
  { name: "Tool 6", toolType: "MATLAB_TOOL" },
  { name: "Script 6", toolType: "CONCERTO_SCRIPT" },
  { name: "Tool 7", toolType: "MATLAB_TOOL" },
  { name: "Script 7", toolType: "CONCERTO_SCRIPT" },
];

export default utilityTools;
