import { Button } from '@mui/material';
import { DragEvent, useRef } from 'react';
import style from './DragDropFiles.module.scss';

function DragDropFiles(props: { files: FileList | null; setFiles: any }) {
  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * JPEG/JPG, PNG, and PDF are some of the accepted file formats.
   * See https://docs.veryfi.com/api/getting-started/document-processing/
   */
  const acceptableFormats = ['.jpeg', '.jpg', '.png', '.pdf'];

  const handleDrag = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    props.setFiles(event.dataTransfer.files);
  };

  if (props.files) {
    return (
      <span className={style['selected-item-message']}>
        You selected: <b>{props.files[0].name}</b>
      </span>
    );
  }

  return (
    <>
      {!props.files && (
        <div className={style['dropzone']} onDragOver={handleDrag} onDrop={handleDrop}>
          <span>
            <b>Drag and Drop File to Upload</b>
          </span>
          <span>or</span>

          <input
            type='file'
            accept={acceptableFormats.join(',')}
            onChange={(event: any) => props.setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />

          <Button variant='contained' onClick={() => inputRef.current?.click()}>
            <b>Select File</b>
          </Button>
        </div>
      )}
    </>
  );
}

export default DragDropFiles;
