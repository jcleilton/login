import React from 'react'
import { TouchableOpacity, View , Text} from 'react-native'
import styles from './Common/Styles'

export default props => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity>
                <Text style={styles.button}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}