import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "../style";
import { Link } from "expo-router";

export default function Login(){
    return(
        //div principal
        <View style={styles.imagemBody}>
            {/*imagem logo senai8*/}
            <Image style={styles.imagemss} source={require('../../assets/sesi-senai.webp')} />

            {/* Inicio do formulario*/}
            <View style={styles.form}>
            
            {/*texto login8*/}
            <Text style={styles.text}>Senha nova:</Text>

            {/*input do login*/}
            <TextInput placeholder="Insira sua nova senha" style={styles.input}/>

            {/*texto da senha*/}
            <Text style={styles.text}>Confirme a senha:</Text>

            {/*input da senha */}
            <TextInput secureTextEntry placeholder="Confirme sua senha" style={styles.input}/>
    
            </View>
              {/*div pra alinhar o botao de entrada*/}
            <View style={styles.formbtn}>
                <Link href={'login'} style={styles.btn}>Alterar</Link>
            </View>
        </View>
    )
}