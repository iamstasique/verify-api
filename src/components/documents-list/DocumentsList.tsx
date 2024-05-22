import { Document } from '../../types/document/document.type';
import DocumentCard from '../document-card/DocumentCard';

import style from './DocumentsList.module.scss'

function DocumentsList({ documents }: { documents: Document[] }) {
  return (
    <div className={style['documents-list']}>
      {documents.map((document: Document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
}

export default DocumentsList;
