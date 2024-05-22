import { Document } from '../../types/document/document.type';
import { LineItem } from '../../types/document/line-item.type';
import style from './DocumentCard.module.scss';

function DocumentCard({ document }: { document: Document }) {
  // Сouldn’t delete documents, so I don’t display those that were uploaded as regular pictures using "document.line_items?.length" condition.
  if (!document || document.line_items?.length === 0) {
    return <></>;
  }

  const getItemFullDescription = (item: LineItem) => {
    if (!item.price) {
      return item.description;
    }

    return `${item.description} (${item.quantity}x${item.price}${document.currency_code})`;
  };

  const getItemTotalPrice = (item: LineItem) => {
    if (!item.price) {
      return `0 ${document.currency_code}`;
    }

    const totalPrice = +(item.quantity * item.price).toFixed(2);

    return `${totalPrice} ${document.currency_code}`;
  };

  const getDocumentTitle = () => document.document_title ?? 'receipt';
  const getCashbackValue = () => `${document.cashback ?? '0'} ${document.currency_code}`;

  const getTotalPrice = () => {
    let totalPrice: number = 0;

    if (document.line_items && document.line_items.length > 0) {
      totalPrice = document.line_items.reduce((acc, curr) => (acc += curr.price * curr.quantity), 0);
    }

    totalPrice = +totalPrice.toFixed(2);

    return `${totalPrice} ${document.currency_code}`;
  };

  const getTotalDiscount = () => {
    let totalDiscount: number = 0;

    if (document.line_items && document.line_items.length > 0) {
      totalDiscount = document.line_items.reduce((acc, curr) => (acc += curr.discount * curr.quantity), 0);
    }

    totalDiscount = +totalDiscount.toFixed(2);

    return `${totalDiscount} ${document.currency_code}`;
  };

  const getDocumentCreatedDate = () => {
    if (!document.date) {
      return '';
    }
    const date = new Date(document.date);
    const year = date.getFullYear();

    // Months start at 0
    const month = date.getMonth() + 1;
    const day = date.getDay();

    const resultMonth: string = month < 10 ? '0' + month : month.toString();
    const resultDay: string = day < 10 ? '0' + day : day.toString();

    return `${resultDay}.${resultMonth}.${year}`;
  };

  return (
    <div className={style['document-card']}>
      <div className={style['document-card-header']}>
        <h2 className={style['document-card-header-title']}>{getDocumentTitle()}</h2>
        <hr style={{ width: '100%' }} />
        <div className={style['document-card-header-category']}>{document.category}</div>
      </div>

      {document.line_items?.length === 0 ? (
        <></>
      ) : (
        <ul className={style['document-card-line-items']}>
          {document.line_items!.map((item: LineItem) => (
            <li className={style['document-card-line-items-element']}>
              <span className={style['document-card-line-items-element-description']}>{getItemFullDescription(item)}</span>
              <span className={style['document-card-line-items-element-price']}>{<b>{getItemTotalPrice(item)}</b>}</span>
            </li>
          ))}
        </ul>
      )}

      <div className={style['document-card-final-information']}>
        {document.date ? <div>Date: {getDocumentCreatedDate()}</div> : <></>}
        <div>Cashback: {getCashbackValue()}</div>
        <div>Discount: {getTotalDiscount()}</div>
        <div>
          <b>Total: {getTotalPrice()}</b>
        </div>
      </div>
    </div>
  );
}

export default DocumentCard;
