import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { authenticate } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authContext = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const responseToken = await authenticate(email, password);
      authContext.authenticate(responseToken);
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
