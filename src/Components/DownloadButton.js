import React from "react";

function DownloadButton(file) {
  const download = () => {};

  return (
    <div>
      <a href={file.file} download onClick={() => download()}>
        <i className="fa fa-download" />
        download
      </a>
    </div>
  );
}
export default DownloadButton;
