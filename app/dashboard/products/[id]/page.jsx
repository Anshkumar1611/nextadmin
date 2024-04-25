import { fetchProduct } from "@/app/lib/data";
import { SingleProductForm } from "@/app/ui";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className="flex justify-start gap-8">
      <section className="bg-secondary p-4 rounded-md">
        <Image
          src={`${product.img} || /noavatar.png`}
          height={250}
          width={250}
          alt="profile"
          className="rounded-md"
        />
        <p className="my-2 text-sm">{product.title}</p>
      </section>
      <section className="flex-1">
        <SingleProductForm product={product} />
      </section>
    </div>
  );
};

export default SingleUserPage;
