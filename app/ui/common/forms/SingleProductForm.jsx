import { updateProduct } from "@/app/lib/actions";
import { FormButton } from "../..";

const SingleProductForm = ({ product }) => {
  return (
    <form className="bg-secondary rounded-md p-4" action={updateProduct}>
      <div className="flex flex-col gap-1 mb-3 ">
        <input type="hidden" name="id" value={product.id} />
        <label className="text-xs">Title</label>
        <input
          type="text"
          name="title"
          placeholder={product.title}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Price</label>
        <input
          type="number"
          name="price"
          placeholder={product.price}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Stock</label>
        <input
          type="number"
          name="stock"
          placeholder={product.stock}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Color</label>
        <input
          type="text"
          name="color"
          placeholder={product.color}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Size</label>
        <input
          type="number"
          name="size"
          placeholder={product.size}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Category</label>
        <select
          id="category"
          name="iscategory"
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        >
          <option value="false" selected>
            Kitchen
          </option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Description</label>
        <textarea
          type="text"
          name="desc"
          rows={5}
          placeholder={product.desc}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="w-full">
        <FormButton text={"Update"} />
      </div>
    </form>
  );
};

export default SingleProductForm;
