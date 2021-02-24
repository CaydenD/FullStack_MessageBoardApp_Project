import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
//import { getValueTransition } from "framer-motion/types/animation/utils/transitions";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
//import { useMutation } from "urql";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          //console.log(values);
          const response = await register(values);
          console.log(response);
          if (response.data?.register.errors) {
            //console.log("there was an error");
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
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
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
