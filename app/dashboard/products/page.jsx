import { deleteProduct } from "@/app/lib/actions";
import { fetchProducts } from "@/app/lib/data";
import { MainButton, Pagination, Search } from "@/app/ui";
import { productsTableHeadings } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <div className="bg-secondary p-4">
      <section className="flex justify-between items-center mb-2">
        <Search placeholder={"Search for a user"} />
        <Link href="/dashboard/products/add">
          <MainButton text={"Add New"} />
        </Link>
      </section>
      <section>
        <table className="w-full">
          <thead>
            <tr className="text-sm text-start px-2">
              {productsTableHeadings.map((heading, i) => (
                <th key={i} className="text-start py-2">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr
                  className="text-sm text-start hover:bg-links  rounded-lg px-2"
                  key={product.id}
                >
                  <td>
                    <div className="flex gap-2 items-center justify-start py-2">
                      {product.img ? (
                        <Image
                          src={product.img}
                          alt="pic"
                          width={35}
                          height={35}
                          className="rounded-full "
                        />
                      ) : (
                        <Image
                          src="/noavatar.png"
                          alt="pic"
                          width={35}
                          height={35}
                          className="rounded-full "
                        />
                      )}
                      {product.title}
                    </div>
                  </td>
                  <td>
                    <span className="py-2">{product.desc}</span>
                  </td>
                  <td className="py-2">$ {product.price}</td>
                  <td className="py-2">
                    {product.createdAt.toString().slice(4, 16)}
                  </td>
                  <td className="py-2">{product.stock}</td>
                  <td className="py-2 flex gap-2 items-center">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className="bg-teal-700 cursor-pointer p-1 px-2 rounded-md text-xs">
                        view
                      </button>
                    </Link>
                    <form action={deleteProduct}>
                      <input className="hidden" type="text" name="id" value={product.id} />
                      <button className="bg-red-700 cursor-pointer p-1 px-2 rounded-md text-xs">
                        delete
                      </button>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section>
        <Pagination count={count} />
      </section>
    </div>
  );
};

export default ProductsPage;
