import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authContext = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const responseToken = await createUser(email, password);
      authContext.authenticate(responseToken);
    } catch (error) {
      Alert.alert("An error occurred while singing up");
      console.log(error)
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..."/>;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
