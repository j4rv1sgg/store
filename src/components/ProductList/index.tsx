import { Product } from "../../types";

export default function ProductList({data}: {data: Product[]}) {
  return (
    <div>
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
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}
