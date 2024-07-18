import React, {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {SubmitHandler, useForm} from 'react-hook-form';
import Box from "../design-system/components/Box";

function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const theme = useAppTheme();
  const dispatch = useDispatch();

  const {control, handleSubmit, formState: {errors}, setError} = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  });


  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    setIsLoading(true);
    try {

      const response = await fetch(BASE_URL + "login", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: data.email, password: data.password}),
      })

      const responseData = response.json();

    } catch(error) {
      console.error(error)
    }

    if (data.email !== email || data.password !== password) {
      setError("email", {
        type: "custom",
        message: "Invalid credentials!",
      });
      setError("password", {
        type: "custom",
        message: "Invalid credentials!",
      });
      setIsLoading(false)
      return;
    };

    setIsLoading(false)
  };
    return (
        <Box>

        </Box>
    )
}

export default SignIn;