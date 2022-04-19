// Material icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {Dialog} from '@mui/material';
import SignIn from '../components/sign-in/signIn';

function createData(name, Price, order, spend, refuond) {
    return { name, Price, order, spend, refuond };
}
export const rows = [
    createData('Business Kit', "$130.992", 8.232, "$9.500", 4.0),
    createData('Nike v22 Running', "$80.250", 12.821, "$12.500", 4.3),
    createData('Black Chair', "$40.600", 2.421, "$6.000", 6.0),
    createData('Wireless Charger', "$91.300", 5.921, "$7.364", 4.3),
    createData('Mountain Trip Kit', "$140.925", 921, "$20.531", 3.9),
];

export const mark = (num) => {
    if(num > 4) return <ExpandLessIcon style={{color: "var(--green-color)" , transform: "translateY(6px)"}} />
    return <ExpandMoreIcon style={{color: "var(--red-color)" , transform: "translateY(6px)"}} />
}

export function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;
    
    const handleClose = () => {
      onClose(selectedValue);
    };
    
    return (
      <Dialog onClose={handleClose} open={open}>
        <SignIn />
      </Dialog>
    );
  }