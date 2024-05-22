import { Alert, Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSendDocumentMutation } from '../../api/documents.api';
import { AlertTypes } from '../../enums/alert-types.enum';
import { AlertContent } from '../../types/alert-content.type';
import DragDropFiles from '../drag-drop-files/DragDropFiles';
import style from './DocumentForm.module.scss';

function DocumentForm() {
  const [files, setFiles] = useState(null);
  const [sendDocument, { isLoading, isSuccess, isError, reset }] = useSendDocumentMutation();
  const [alertContent, setAlertContent] = useState<AlertContent | null>(null);

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
    const showAlert = () => {
      const alert: AlertContent = {
        type: isSuccess ? AlertTypes.Success : AlertTypes.Error,
        message: isSuccess ? 'Your document has been sent' : 'Something went wrong',
      };

      const timeout = setTimeout(() => {
        setAlertContent(null);
        clearTimeout(timeout);
      }, 3000);

      setAlertContent(alert);
    };

    if (isSuccess || isError) {
      reset();
      onReset();
      showAlert();
    }
  }, [isSuccess, isError, reset]);

  return (
    <>
      {alertContent && (
        <Alert className={style['alert']} severity={alertContent.type}>
          {alertContent.message}
        </Alert>
      )}
      
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
          <Button onClick={() => onSave()} disabled={!files || isLoading} variant='contained'>
            Save
          </Button>
          <Button onClick={() => onReset()} disabled={!files || isLoading} color='error' variant='contained'>
            Reset
          </Button>
        </div>
      </form>
    </>
  );
}

export default DocumentForm;
