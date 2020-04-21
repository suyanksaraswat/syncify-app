import styles from '../../styles';

const DEFAULT_HEADER_OPTIONS = {
  headerTitleStyle: {
    fontSize: styles.metrics.getWidthFromDP('5.5%'),
    fontFamily: 'CircularStd-Bold',
    fontWeight: undefined,
  },
  headerTitle: () => null,
  headerBackTitleVisible: false,
  headerStyle: {
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerTintColor: styles.colors.text,
};

export default DEFAULT_HEADER_OPTIONS;
