import { useGetProductQuery } from '@app/services/product/api';
import Button from '@components/Button';
import CardLayout from '@layout/CardLayout';
import { useParams } from 'react-router-dom';

const ProductEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetProductQuery({ id });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Unable to fetch data</div>;
  }

  return (
    <div>
      <div className="w-full flex justify-between mb-5">
        <p>test</p>
        <Button onClick={() => {}} text="View Offer" />
      </div>
      <CardLayout {...data?.layoutProps}>
        <div>Edit Page</div>
      </CardLayout>
    </div>
  );
};

export default ProductEdit;
