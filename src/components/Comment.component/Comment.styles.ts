import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
