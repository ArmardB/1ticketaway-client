import React from 'React';
import { Text, View } from 'react-native';

const SectionTitle = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10
  }
};

export default SectionTitle;