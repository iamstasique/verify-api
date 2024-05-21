import { Button, CircularProgress } from '@mui/material';
import style from './DocumentForm.module.scss';
import DragDropFiles from '../drag-drop-files/DragDropFiles';
import { useEffect, useState } from 'react';
import { useSendDocumentMutation } from '../../api/documents.api';

function DocumentForm() {
  const [files, setFiles] = useState(null);
  const [sendDocument, { isLoading, isSuccess, isError, reset }] = useSendDocumentMutation();

  const onSave = () => {
    if (!files) {
      return;
    }

    const documentToSend = { file: files[0] };
    sendDocument(documentToSend);
  };

  const onReset = () => {
    setFiles(null);
  };

  useEffect(() => {
    if (isSuccess || isError) {
      reset();
      onReset();
    }
  }, [isSuccess, isError, reset]);

  return (
    <form className={style['form']}>
      <h3 className={style['form-header']}>Document Form</h3>

      {isLoading && (
        <div className={style['form-loading-overlay']}>
          <CircularProgress className={style['form-loader']} />
        </div>
      )}

      <div className={style['form-inputs']}>
        <DragDropFiles files={files} setFiles={setFiles} />
      </div>

      <div className={style['form-actions']}>
        <Button onClick={() => onSave()} disabled={!files || isLoading} variant='outlined'>
          Save
        </Button>
        <Button onClick={() => onReset()} disabled={!files || isLoading} color='error' variant='outlined'>
          Reset
        </Button>
      </div>
    </form>
  );
}

export default DocumentForm;
