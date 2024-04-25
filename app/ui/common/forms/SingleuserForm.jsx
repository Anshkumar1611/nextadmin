import React from "react";
import { FormButton } from "../..";
import { updateUser } from "@/app/lib/actions";

const SingleUserForm = ({ user }) => {
  return (
    <form className="bg-secondary rounded-md p-4" action={updateUser}>
      <div className="flex flex-col gap-1 mb-3 ">
        <input type="hidden" name="id" value={user.id} />
        <label className="text-xs">Username</label>
        <input
          type="text"
          name="username"
          placeholder={user.username}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Email</label>
        <input
          type="email"
          name="email"
          placeholder={user.email}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Password</label>
        <input
          type="password"
          name="password"
          placeholder={user.password}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Phone</label>
        <input
          type="number"
          name="phone"
          placeholder={user.phone}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Address</label>
        <textarea
          type="text"
          name="address"
          placeholder={user.address}
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Is Admin ?</label>
        <select
          id="admin"
          name="isAdmin"
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
        >
          <option value={false} selected={!user.isAdmin}>
            No
          </option>
          <option value={true} selected={user.isAdmin}>
            Yes
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-1 my-3 ">
        <label className="text-xs">Is Active ?</label>
        <select
          id="active"
          name="isActive"
          className="p-3 rounded-sm bg-primary text-xs border-2 border-links focus:outline-none "
        >
          <option value="false" selected>
            isActive
          </option>
          <option value={true} selected={user.isActive}>
            Yes
          </option>
          <option value={false} selected={!user.isActive}>
            No
          </option>
        </select>
      </div>
      <div className="w-full">
        <FormButton text={"Update"} />
      </div>
    </form>
  );
};

export default SingleUserForm;
