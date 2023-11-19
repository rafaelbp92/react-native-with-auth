import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { authenticate } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await authenticate(email, password);
    } catch (error) {
      Alert.alert("An error occurred while authenticating");
    }
    
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Loggin in user..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
