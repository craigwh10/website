export const stringToHtml = (string: string) => {
  var temporaryDiv = document.createElement("div");
  temporaryDiv.innerHTML = string;
  return temporaryDiv.firstChild;
};
