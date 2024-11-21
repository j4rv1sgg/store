import { useAppSelector } from './app/hooks';
import Navbar from './components/Navbar';
import { useGetAllProductsQuery } from './services/product';

function App() {
  const { data, isLoading } = useGetAllProductsQuery(null);
  const { theme } = useAppSelector((state) => state.theme)
  return (
    <div data-theme={theme}>
      <Navbar />
      <div  className="flex flex-wrap gap-4 gap-y-4">
        {isLoading && <div>Loading...</div>}
        {!data && <div>No data</div>}
        {data &&
          data.map((item) => (
            <div className="card bg-base-300 w-52 shadow-xl">
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                {/* <p>{item.description}</p> */}
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
