import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
//import { getValueTransition } from "framer-motion/types/animation/utils/transitions";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
//import { useMutation } from "urql";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

export const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, login] = useLoginMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          //console.log(values);
          const response = await login({ options: values });
          console.log(response);
          if (response.data?.login.errors) {
            //console.log("there was an error");
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            //console.log("success");
            //worked
            router.push("/");
          }
        }}
      >
        {(props) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            ></InputField>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="password"
                type="password"
              ></InputField>
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={props.isSubmitting}
              colorScheme="teal"
            >
              login
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Login;
