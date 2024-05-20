import { useGetDocumentsQuery } from '../api/documents.api';
import { Document } from '../types/document/document.type';
import style from './Main.module.scss';

function Main() {
  const { data: documents } = useGetDocumentsQuery('') as { data: Document[] | undefined };

  if (!documents) {
    return <></>;
  }

  const noDocumentsAvailableMessage = <h1>No documents available</h1>;

  return (
    <>
      {documents.length ? (
        <div className={style['documents-list']}>
          {documents.map((document: Document) => (
            <span>{document.id}</span>
          ))}
        </div>
      ) : (
        noDocumentsAvailableMessage
      )}
    </>
  );
}

export default Main;
