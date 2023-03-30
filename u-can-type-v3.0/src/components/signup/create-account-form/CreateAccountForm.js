import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Card from "../../UI/card/Card";
import { useFormik } from "formik";
import { signUpSchema } from "../schema/schema";
import Validation from "../../UI/validation/Validation";

const CreateAccountForm = (props) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log({ values });
        action.resetForm();
      },
    });

  return (
    <Card>
      <h3>Create your account</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input
            type="name"
            name="name"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <Validation>{errors.name}</Validation>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">E-mail</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <Validation>{errors.email}</Validation>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            autoComplete="nope"
            id="exampleInputPassword1"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <Validation>{errors.password}</Validation>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            className="form-control"
            autoComplete="nope"
            id="exampleInputConfirmPassword1"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <Validation>{errors.confirm_password}</Validation>
          ) : null}
        </div>

        <Button type="submit">SignUp</Button>
        <p className="new-ac">
          Already have an account? <Link to={"/"}>Sign In now</Link>
        </p>
      </form>
    </Card>
  );
};

export default CreateAccountForm;
