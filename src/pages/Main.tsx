import { useGetDocumentsQuery } from '../api/documents.api';
import DocumentForm from '../components/document-form/DocumentForm';
import DocumentsList from '../components/documents-list/DocumentsList';
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
    <div className={style['main-page']}>
      <div className={style['main-page-list']}>{documents.length ? <DocumentsList documents={documents} /> : noDocumentsAvailableMessage}</div>

      <DocumentForm />
    </div>
  );
}

export default Main;
