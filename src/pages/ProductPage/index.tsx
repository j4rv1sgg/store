import { useParams } from 'react-router';
import { useGetProductByIdQuery } from '../../services/product';
export default function ProductPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(Number(id));
  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (data) {
    return (
      <div className="p-14 flex ">
        <div className='w-1/3'>
            <img src={data.image} className="max-h-screen mx-auto" alt={data.title} />
        </div>
        <div className='text-left p-5 w-2/3 '>
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="my-6">{data.description}</p>
          <p className='my-6 font-bold'>{data.price}$</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    );
  }
}
