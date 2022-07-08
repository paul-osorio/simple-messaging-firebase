import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import MainContainer from "../../components/MainContainer";
import { AuthContext } from "../../context/AuthProvider";

const Profile = () => {
  const auth = useContext(AuthContext);
  const profile = auth?.user?.photoUrl;
  const name = auth?.user?.fullname;
  console.log(auth);

  return (
    <MainContainer>
      <div className="w-full p3 flex items-center justify-center bg-indigo-500 laptop:rounded-3xl h-full">
        <div className="bg-white p-2 rounded-xl shadow-lg">
          <div className="flex justify-center w-full mb-2">
            <img src={profile} alt="" className="h-20 w-20 rounded-full" />
          </div>
          <Formik
            initialValues={{
              name: name,
              email: auth?.user?.email,
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {() => (
              <Form>
                <Field
                  name="name"
                  className="block border px-2 py-1 rounded outline-none mb-2"
                />
                <Field
                  name="email"
                  className="block border px-2 py-1 rounded outline-none"
                />
                <button>Save Changes</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </MainContainer>
  );
};

export default Profile;
