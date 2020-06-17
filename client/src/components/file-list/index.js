import React from "react";
import { Description } from '@material-ui/icons';

import { Container, FileInfo } from "./styles";

const FileList = ({ files, onDelete }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.name}>
        <FileInfo>
          <div>
            <Description/>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}{" "}
              {!!uploadedFile && (
                <button onClick={() => onDelete()}>
                  Excluir
                </button>
              )}
            </span>
          </div>
        </FileInfo>
      </li>
    ))}
  </Container>
);

export default FileList;