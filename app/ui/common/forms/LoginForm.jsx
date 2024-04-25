import { authenticate } from "@/app/lib/actions";
import { FormButton } from "../..";

const LoginForm = () => {
  return (
    <div className="bg-secondary rounded-md p-4 w-80 h-80 flex flex-col justify-center items-center">
      <h2 className="mb-3">Login</h2>
      <form action={authenticate} className="w-full">
        <div className="my-3 w-full">
          <input
            type="text"
            name="username"
            placeholder="username"
            className="p-5 w-full rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
          />
        </div>
        <div className="my-3 w-full">
          <input
            type="password"
            name="password"
            placeholder="password"
            className="p-5 w-full rounded-sm bg-primary text-xs border-2 border-links focus:outline-none"
          />
        </div>
        <div className="w-full">
          <FormButton text={"Login"} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
