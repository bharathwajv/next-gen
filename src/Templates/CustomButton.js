import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '17px 50px',
    borderRadius: '50px',
    backgroundColor: theme.palette.action.active,
    color: '#FFFFFF',
    borderWidth: '3px',
    borderStyle: 'solid',
  },
}));

export default function CustomButton(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;

  return (
    <h3 className={`${classes.button} ${className}`} {...rest}>
      {children}
    </h3>
  );
}
