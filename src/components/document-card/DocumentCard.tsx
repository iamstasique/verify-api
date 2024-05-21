import style from './DocumentCard.module.scss';
import { Document } from '../../types/document/document.type';

function DocumentCard({ document }: { document: Document }) {
  return <div className={style['document-card']}>{document.currency_code}</div>;
}

export default DocumentCard;
