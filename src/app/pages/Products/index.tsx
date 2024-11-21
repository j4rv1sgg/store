import { useGetAllProductsQuery } from '../../../services/product';
import ProductList from '../../../components/ProductList';

export default function Products() {
  const { data, isLoading } = useGetAllProductsQuery(null);
  return (
    <div>
      <h3>Products </h3>
      <div className="flex flex-wrap gap-4 gap-y-4">
        {isLoading && <div>Loading...</div>}
        {!data && <div>No data</div>}
        <ProductList data={data} />
      </div>
    </div>
  );
}
