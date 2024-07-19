import React, {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {SubmitHandler, useForm} from 'react-hook-form';
import Box from "../design-system/components/Box";
import {sigin, SignInFormValues} from '../utils/schema';
import {TextInput} from '../design-system/components/TextInput';
import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../design-system/components/buttons/button';
import {getComputedWidth} from '../design-system/layouts/responsive';
import Text from '../design-system/components/Text';
import {FLEX} from '../utils/constants';
import {TextInput as RNPaperTextInput} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from '../utils/redux/hooks';
import {RootState} from '../utils/redux/store';
import { setIsAuthenticated } from '../utils/redux/slices/auth-tracker';
import Icon from '../assets/svgs/icon';

function SignIn({ navigation }: any) {
  const {email, password} = useAppSelector((state: RootState) => state);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const {control, handleSubmit, formState: {errors}, setError, getValues} = useForm<SignInFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: zodResolver(sigin),
  });


  const onSubmit: SubmitHandler<SignInFormValues> = (data) => {
    setIsLoading(true);
    try {

      if (data.email !== email || data.password !== password) {
        throw {name: "password", message: "Invalid email or password."}
      };

      dispatch(setIsAuthenticated(true));

    } catch(error: {name: string; message: string;}) {
      setError(error?.name, {
        type: "custom",
        message: error?.message,
      });
    } finally {
      setIsLoading(false)
    }
  };

    return (
      <Box alignItems="center" style={[FLEX, styles.root]}>
        <ScrollView>

          <Box marginTop="space-m">
            <Box style={styles.header}>
              <Text color="black" variant="heading-1">Hello Dr!</Text>
              <Text color="grey" variant="subtext-regular">
                Fill your details or continue with social media
              </Text>
            </Box>

            {/* INPUT CONTAINER OPEN*/}
            <Box style={styles.inputContainer}>
              <TextInput
                control={control}
                label="Email addresss"
                placeholder="Email address"
                error={errors.email?.message}
                name="email"
                textContentType="emailAddress"
                keyboardType="email-address"
                containerStyle={{
                  backgroundColor: "#FFF",
                  borderRadius: 15,
                }}
                left={<RNPaperTextInput.Icon icon="email-outline" />}
              />
            </Box>

            <Box style={styles.inputContainer}>
              <TextInput
                control={control}
                label="Password"
                placeholder="Password"
                error={errors.password?.message}
                name="password"
                textContentType="password"
                secureTextEntry={hidePassword}
                containerStyle={{
                  backgroundColor: "#FFF",
                  borderRadius: 15,
                }}
                left={<RNPaperTextInput.Icon icon="lock" />}
                right={
                  <RNPaperTextInput.Icon
                    onPress={() => setHidePassword(!hidePassword)}
                    icon={hidePassword ? "eye-off-outline" : "eye-outline"}
                  />
                }
              />
              {/* INPUT CONTAINER CLOSE*/}

            </Box>
            <Text variant="caption-regular" textAlign="right">Forgot password ?</Text>
            <Button
              marginTop="space-40"
              title="Sign In"
              onPress={handleSubmit(onSubmit)}
              loading={isLoading}
              disabled={isLoading}
            />

            <Box style={styles.div} marginTop="space-12">
              <View style={styles.borderLines}></View>
                <Text textAlign="center">Or sign in with</Text>
              <View style={styles.borderLines}></View>
            </Box>

            {/* Sign in with google button */}
            <Box>
              <Button
                color='black'
                title="Sign In with Google"
                backgroundColor='white'
                variant='secondary'
                marginTop="space-20"
                left={<Icon name='google' />}
              />
            </Box>

            <Box marginTop="space-96" flexDirection="row" justifyContent="center">
              <Text>Don't have an account ? </Text>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text color='blue'>Register</Text>
              </Pressable>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#F2F2F2"
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 10,
  },
  div: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  securityIcon: {
    position: "absolute",
    top: getComputedWidth(20),
    right: getComputedWidth(20),
    alignSelf: "center",
  },
  borderLines: {
    flex: 1,
    height: 1,
    backgroundColor: '#C2BCBC',
  }
});

export default SignIn;