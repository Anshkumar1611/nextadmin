import { addProduct } from "@/app/lib/actions";
import { FormButton } from "../..";

const AddProductForm = () => {
  return (
    <form action={addProduct} className="bg-secondary rounded-md p-4">
      <div className="flex justify-between my-2 mb-8 gap-24 ">
        <input
          type="text"
          name="title"
          placeholder="title"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2 "
        />
        <select
          id="admin"
          name="isAdmin"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        >
          <option value="false" selected>
            choose a category
          </option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>
      <div className="flex justify-between my-10 gap-24">
        <input
          type="number"
          name="price"
          placeholder="price"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        />
        <input
          type="number"
          name="stock"
          placeholder="stock"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        />
      </div>

      <div className="flex justify-between my-10 gap-24">
        <input
          type="text"
          name="color"
          placeholder="color"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        />
        <input
          type="number"
          name="size"
          placeholder="size"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        />
      </div>

      <div className=" my-2 w-full">
        <textarea
          type="text"
          name="desc"
          rows={10}
          placeholder="Description"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2 w-full"
        />
      </div>
      <div className="w-full">
        <FormButton text={"Submit"} />
      </div>
    </form>
  );
};

export default AddProductForm;
