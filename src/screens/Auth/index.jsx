
import {
  Alert,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useReducer, useState, useEffect } from "react";
import styles from "./style";
import Card from "../../components/Card";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/auth.action";
import Ionicons from "@expo/vector-icons/Ionicons";
import Input from "../../components/input";
import 'expo-dev-client'
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from "@react-native-firebase/auth"

const SignIn = ({ newStyles, navigation }) => {
  const dispatch = useDispatch();
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState();
  const [error, setError] = useState(null);
  
  const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, [])

  if (user){
    console.log(user)
    AsyncStorage.setItem(
      "UserLoggedInData",
      JSON.stringify({ user, loggedIn: true })
    )
  }else{
    console.log("no user")
  }

  //Sign in con Google 
  GoogleSignin.configure({
    webClientId: '467375038847-o452bdtfrhhjofgkssrpd1d82hr6s461.apps.googleusercontent.com',
  })

  const onGoogleButtonPress = async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const user_sign_in = auth().signInWithCredential(googleCredential)
    user_sign_in.then((user) => {
      console.log("userGoogleObjeto", user)
      auth().onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          if (user) {
            AsyncStorage.setItem(
              "UserLoggedInData",
              JSON.stringify({ user, loggedIn: true })
            )
          }
        }
      });
    }).catch((error) =>
      console.log(error))
  }

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false)

    console.log(user)
  }

  if(initializing)return null

  const formReducer = (state, action) => {
    console.log(action);
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      const updatedValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      };
      let updatedFormIsValid = true;
      for (const key in updatedValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
      }
      return {
        inputValues: updatedValues,
        inputValidities: updatedValidities,
        formIsValid: updatedFormIsValid,
      };
    }
    return state;
  };


  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
      name: ""
    },
    inputValidities: {
      email: false,
      password: false,
      name: false,
    },
    formIsValid: false,
  });


  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  //Enviar formulario
  const handleSignUp = () => {
    // createUserWithEmailAndPassword(auth, formState.inputValues.email, formState.inputValues.password)
    const user = { email: formState.inputValues.email, password: formState.inputValues.password, name: formState.inputValues.name }
    console.log("user recibido", user)
    if (formState.formIsValid) {

      AsyncStorage.setItem(
        "UserLoggedInData",
        JSON.stringify({ user, loggedIn: true })
      )
      
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password, formState.inputValues.name)
      )


    } else {
      Alert.alert("Formulario invalido", "Ingrese email y password validos", [
        { test: "Ok" },
      ]);
    }
  };

  const handleNavigation = () => {
    navigation.navigate("LogIn");
  };

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...newStyles }}>MIJOVY</Text>
      <View style={styles.inputContainer}>
        <Input
          id="name"
          label="Nombre"
          keyboardType="default"
          autoCorrect={false}
          returnKeyType="next"
          required
          name
          onInputChange={onInputChangeHandler}
          initialValue=""
        />
        <Input
          id="email"
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          required
          email
          errorText={"Por favor ingrese un email valido"}
          onInputChange={onInputChangeHandler}
          initialValue=""
        />
        <Input
          id="password"
          label="Contraseña"
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          required
          password
          secureTextEntry
          errorText={"Por favor ingrese una contraseña valida"}
          onInputChange={onInputChangeHandler}
          initialValue=""
        />
        <Card otherStyles={styles.card}>
          <TouchableOpacity style={styles.cardText} onPress={handleSignUp}>
            <Text style={{ fontWeight: "bold" }}>Registrarse</Text>
          </TouchableOpacity>
        </Card>
      </View>
      <View style={styles.signIn}>
        <TouchableOpacity
          style={styles.questionText}
          onPress={handleNavigation}
        >
          <Text>Ya eres usuario?</Text>
          <Text style={styles.SignIn}>Inicia Sesion</Text>
        </TouchableOpacity>
        <View style={styles.mediaContainer}>
          <Card otherStyles={styles.mediaCard}>
            <TouchableOpacity  styles={styles.mediaCard} onPress={() => onGoogleButtonPress().then(() =>
              console.log("Sign in with Google"))}>
              <Ionicons name="logo-google" size={25} />
              <Text style={styles.signInText}>Ingresar con Google</Text>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default SignIn;
