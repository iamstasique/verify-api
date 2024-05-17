import { useGetDocumentsQuery } from '../api/documents.api';

function Main() {
  const { data: documents } = useGetDocumentsQuery('');

  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default Main;
