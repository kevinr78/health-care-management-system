import { useNavigate } from "react-router";
import InputWithLabel from "../../components/common/Input";
import API_REQUEST from "../../utils/API";
import { toast } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const userType = new URLSearchParams(window.location.search).get("type");

  async function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(document.getElementById("login_form"));
    formData.append("type", userType);
    const request = new API_REQUEST(
      "POST",
      `/login/${userType}`,
      Object.fromEntries(formData)
    );
    const response = await request.send();

    if (!response.ok) {
      toast.error(response.message);
      return;
    }
    localStorage.setItem(`token`, response.token);
    navigate(`/${userType}/home?id=${response.data._id}&type=${userType}`);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {userType === "patient"
                ? "Let's connect back with the doctor"
                : "Patients are waiting!"}
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              method="POST"
              id="login_form"
            >
              <InputWithLabel
                label={"Email"}
                type={"email"}
                id={"email"}
                name={"email"}
                placeholder={"Email"}
                required={true}
              />
              <InputWithLabel
                label={"Password"}
                type={"password"}
                name={"password"}
                id={"password"}
                placeholder={"password"}
                required={true}
              />

              <input type="hidden" name="type" value={userType} />
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full text-white bg-sky-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  onClick={() => {
                    navigate(`/register/${userType}`);
                  }}
                >
                  New Here?{" "}
                  {userType === "patient"
                    ? "Register and set up profile"
                    : "Join us!"}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
