import { addUser } from "@/app/lib/actions";
import { FormButton } from "../..";

const AddUserForm = () => {
  return (
    <form action={addUser} className="bg-secondary rounded-md p-4">
      <div className="flex justify-between my-2 mb-8 gap-24 ">
        <input
          type="text"
          name="username"
          placeholder="username"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2 "
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        />
      </div>
      <div className="flex justify-between my-10 gap-24">
        <input
          type="password"
          name="password"
          placeholder="password"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        />
        <input
          type="number"
          name="phone"
          placeholder="phone number"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        />
      </div>

      <div className="flex justify-between my-10 gap-24">
        <select
          id="admin"
          name="isAdmin"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2"
        >
          <option value="false" selected>
            isAdmin
          </option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
        <select
          id="active"
          name="isActive"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2 "
        >
          <option value="false" selected>
            isActive
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div className=" my-2 w-full">
        <textarea
          type="text"
          name="address"
          rows={10}
          placeholder="Address"
          className="p-4 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none basis-1/2 w-full"
        />
      </div>
      <div className="w-full">
        <FormButton text={"Submit"} />
      </div>
    </form>
  );
};

export default AddUserForm;
