export const fileDownloader = (path: string, fileName: string) => {
  // using Java Script method to get PDF file
  fetch(path).then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob);

      // Setting various property values
      const alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = fileName;
      alink.click();
    });
  });
};
