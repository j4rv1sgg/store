import { useNavigate } from 'react-router-dom';
import { Product } from '../../types';

export default function ProductList({ data }: { data: Product[] }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-4 gap-y-4">
      {data &&
        data.map((item) => (
          <div
            className="card bg-base-300 w-52 shadow-xl"
            key={item.id}
            onClick={() => navigate(`/products/${item.id}`)}
          >
            <figure className="h-80">
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              {/* <p>{item.description}</p> */}
              <div className="card-actions justify-end">
                {/* <button className="btn btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
