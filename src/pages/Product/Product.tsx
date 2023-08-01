import { useGetProductQuery } from '@app/services/product/api';
import Breadcrumb from '@components/Breadcrumb';
import Button from '@components/Button';
import CardLayout from '@layout/CardLayout';
import { useNavigate, useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetProductQuery({ id });
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Unable to fetch data</div>;
  }

  const navigateToEditPage = () => {
    navigate(`/product/${id}/edit`);
  };

  return (
    <div>
      <div className="w-full flex justify-between mb-5">
        <Breadcrumb
          route={[
            { to: '/', title: 'Offers' },
            { to: '/', title: 'Intelligent Finite Elements in Structural mechanics' },
          ]}
        />
        <Button onClick={navigateToEditPage} text="Edit" />
      </div>
      <CardLayout {...data?.layoutProps}>
        <div>hello</div>
      </CardLayout>
    </div>
  );
};

export default Product;
