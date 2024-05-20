import { useGetDocumentsQuery } from '../api/documents.api';
import { Document } from '../types/document/document.type';
import { Meta } from '../types/meta/meta.type';
import style from './Main.module.scss';

function Main() {
  const { data } = useGetDocumentsQuery('') as {
    data: {
      documents: Document[];
      meta: Meta;
    };
  };

  if (!data) {
    return <></>;
  }

  const documents: Document[] = data.documents ?? [];
  const noDocumentsAvailableMessage = <h1>No documents available</h1>;

  return (
    <>
      {documents.length ? (
        <div className={style['documents-list']}>
          {documents.map((document: Document) => (
            <img key={document.id} src={document.img_thumbnail_url} alt='document-image' />
          ))}
        </div>
      ) : (
        noDocumentsAvailableMessage
      )}
    </>
  );
}

export default Main;
