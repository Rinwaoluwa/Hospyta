import {Pressable, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Checkbox, TextInput as RNPaperTextInput} from 'react-native-paper';
import {zodResolver} from '@hookform/resolvers/zod';
import Box from "../design-system/components/Box";
import {signup, SignUpFormValues} from '../utils/schema';
import {TextInput} from '../design-system/components/TextInput';
import {Button} from '../design-system/components/buttons/button';
import {getComputedWidth} from '../design-system/layouts/responsive';
import Text from '../design-system/components/Text';
import {FLEX} from '../utils/constants';
import {useAppDispatch} from '../utils/redux/hooks';
import {setProfile} from '../utils/redux/slices/profile';
import {setIsAuthenticated} from '../utils/redux/slices/auth-tracker';


function SignUp() {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [hidePassword, setHidePassword] = useState(true);
    const [checked, setChecked] = React.useState(false);

    const {control, handleSubmit, formState: {errors}, setError} = useForm<SignUpFormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            checked,
        },
        mode: 'onSubmit',
        resolver: zodResolver(signup),
    });


    const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
        setIsLoading(true);
        try {
            dispatch(setProfile(data));
            dispatch(setIsAuthenticated(true));
        } finally {
            setIsLoading(false)
        }

    };

    return (
        <Box alignItems="center" style={[FLEX, styles.root]}>
            <ScrollView>

                <Box marginTop="space-96">

                <Box style={styles.header}>
                    <Text color="black" variant="heading-1">Register Account</Text>
                    <Text color="grey" variant="subtext-regular">
                    Fill your details or continue with social media
                    </Text>
                </Box>

                {/* INPUT CONTAINER OPEN*/}
                <Box style={styles.inputContainer}>
                    <TextInput
                    control={control}
                    label="First name"
                    placeholder="First name"
                    error={errors.firstName?.message}
                    name="firstname"
                    textContentType="name"
                    keyboardType="email-address"
                    containerStyle={{
                        backgroundColor: "#FFF",
                        borderRadius: 15,
                    }}
                    left={<RNPaperTextInput.Icon icon="account-outline" />}
                    />
                </Box>
                <Box style={styles.inputContainer}>
                    <TextInput
                    control={control}
                    label="Last name"
                    placeholder="Last name"
                    error={errors.lastName?.message}
                    name="firstname"
                    textContentType="name"
                    keyboardType="email-address"
                    containerStyle={{
                        backgroundColor: "#FFF",
                        borderRadius: 15,
                    }}
                    left={<RNPaperTextInput.Icon icon="account-outline" />}
                    />
                </Box>
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
                {/* CHECKBOX */}
                <Box flexDirection='row' alignItems='center'>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text variant="caption-regular">I acccept all the </Text>
                    <Text variant="caption-medium" style={{alignSelf: "center"}}>Terms and conditions</Text>
                </Box>
                <Button
                    marginTop="space-40"
                    title="Register"
                    onPress={handleSubmit(onSubmit)}
                    loading={isLoading}
                    disabled={isLoading}
                />

                <Box style={styles.div} marginTop="space-12">
                    <View style={styles.borderLines}></View>
                    <Text textAlign="center">Or sign up with</Text>
                    <View style={styles.borderLines}></View>
                </Box>

                {/* Sign in with google button */}
                <Box>
                    <Button
                    color='black'
                    title="Sign Up with Google"
                    backgroundColor='white'
                    variant='secondary'
                    marginTop="space-20"
                    />
                </Box>

                <Box marginTop="space-96" flexDirection="row" justifyContent="center">
                    <Text>Already have an account ? </Text>
                    <Pressable>
                    <Text color='blue'>Sign Up</Text>
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

export default SignUp;