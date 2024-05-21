import { Button } from '@mui/material';
import style from './DocumentForm.module.scss';
import DragDropFiles from '../drag-drop-files/DragDropFiles';
import { useState } from 'react';

function DocumentForm() {
  const [files, setFiles] = useState(null);

  const onSave = () => {
    console.log(files);
  };

  const onReset = () => {
    setFiles(null);
  };

  return (
    <form className={style['form']}>
      <h3 className={style['form-header']}>Document Form</h3>

      <div className={style['form-inputs']}>
        <DragDropFiles files={files} setFiles={setFiles} />
      </div>

      <div className={style['form-actions']}>
        <Button onClick={() => onSave()} variant='outlined'>
          Save
        </Button>
        <Button onClick={() => onReset()} disabled={!files} color='error' variant='outlined'>
          Reset
        </Button>
      </div>
    </form>
  );
}

export default DocumentForm;
