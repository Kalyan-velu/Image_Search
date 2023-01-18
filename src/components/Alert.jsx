import InfoIcon from '@mui/icons-material/Info';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

export default function Alerts({ error: E, setError }) {
   const items = [
      { title: 'Error', color: 'danger', icon: <ReportIcon /> },
   ];
   React.useEffect(() => {
      setTimeout(() => {
         setError(null)
      }, 1000)
   }, [error])
   return (
      <Box sx={{
         display: 'flex',
         gap: 2, width: '40%',
         flexDirection: 'column',
         position: "fixed",
         bottom: 5,
         left: "40%",
         zIndex: "50"

      }}>
         {items.map(({ title, color, icon }) => (
            <Alert
               key={"Error"}
               sx={{ alignItems: 'flex-start' }}
               startDecorator={React.cloneElement(icon, {
                  sx: { mt: '2px', mx: '4px' },
                  fontSize: 'xl2',
               })}
               variant="outlined"
               color={"danger"}
               endDecorator={
                  <IconButton variant="soft" size="sm" color={color}>
                     <CloseRoundedIcon />
                  </IconButton>
               }
            >
               <div>
                  <Typography fontWeight="lg" mt={0.25}>
                     {title}
                  </Typography>
                  <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
                     {E || "This is an error"}
                  </Typography>
               </div>
            </Alert>
         ))}
      </Box>
   );
}