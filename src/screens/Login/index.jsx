import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useCallback, useReducer, useState, useEffect } from "react";
import styles from "./style";
import Card from "../../components/Card";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/auth.action";
import Input from "../../components/input";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

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

const Login = ({ newStyles }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("Ha ocurrido un error", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert("Formulario invalido", "Ingrese email y password validos", [
        { test: "Ok" },
      ]);
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      console.log(inputIdentifier, inputValue, inputValidity);
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={50}
    >
      <Text style={{ ...styles.text, ...newStyles }}>MIJOVY</Text>
      <View style={styles.inputContainer}>
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
            <Text>Registrarse</Text>
          </TouchableOpacity>
        </Card>
      </View>
      <View style={styles.signIn}>
        <View style={styles.questionText}>
          <Text>Ya eres usuario?</Text>
          <Text style={styles.logIn}>Inicia Sesion</Text>
        </View>
        <View style={styles.mediaContainer}>
          <Card otherStyles={styles.mediaCard}>
            <Text style={styles.signInText}>Ingresar con Google</Text>
          </Card>
          <Card otherStyles={styles.mediaCard}>
            <Text style={styles.signInText}>Ingresar con Facebook</Text>
          </Card>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
