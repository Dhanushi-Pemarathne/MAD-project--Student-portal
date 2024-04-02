import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Header from "./Components/Header";
import { TextInput } from 'react-native-paper'
export default function Registration() {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [C_Password, setC_password] = React.useState("");
  return (
<View>
  <Header/>

    <View style={styles.container}>
    <TextInput
      label="FirstName"
      value={firstname}
      onChangeText={firstname => setFirstname(firstname)}
      style={styles.input}
    />

<TextInput
      label="LastName"
      value={lastname}
      onChangeText={lastname => setLastname(lastname)}
      style={styles.input}
    />

<TextInput
      label="Email"
      value={email}
      onChangeText={email => setEmail(email)}
      style={styles.input}
    />

<TextInput
      label="Password"
      value={password}
      onChangeText={password => setPassword(password)}
      secureTextEntry //it is use for not showing the password when it entering.
      style={styles.input}
    />
<TextInput
      label="Confirm Password"
      value={C_Password}
      onChangeText={C_password => setC_password(C_password)}
      secureTextEntry //it is use for not showing the password when it entering.
      style={styles.input}
      />
<Button mode='contained' style={styles.reg}>
  Registration
</Button>

  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    padding: 30,
  },
  input: {
    marginBottom: 30,
  },
  reg: {
    marginBottom: 100
  }
});
