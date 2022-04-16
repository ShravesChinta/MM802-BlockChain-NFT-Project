import React, { useEffect, useState } from "react"
// import data from "./data/images.json"
import Modal from "./components/Modal"
import './AssetsGallery.css'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios'
import {Link} from "react-router-dom";


const drawerWidth = 240;

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
    }),
}),
);
  
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

function AssetsGallery(props) {
//   console.log(id);
  const theme = useTheme();
  const [data, setData] = useState({});
  const [clickedImg, setClickedImg] = useState(null);
  const [clickedImgDesc, setClickedImgDesc] = useState('');
  const [clickedImgName, setClickedImgName] = useState('');
  const [model, setModel] = useState(false);
//   const [imageInfo, setImageInfo] = useState('');
  
  const [open, setOpen] = React.useState(false);
  const [account, setAccount] = useState('');
  const [loading, setLoading] = useState(false);

  const [tester,setTester] = useState('');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setModel(true);
  };

  const handleClose = () => {
    setModel(false);
  };

  const handleSend = () => {

    alert("Send Button Is Called ...");
   //setModel(false);
  };



  const handleClick = (item, index) => {
    // setCurrentIndex(index);
    console.log("assets gallery on clicked")
    setClickedImg(item.image_url);
    setClickedImgDesc(item.description);
    setClickedImgName(item.name);
    // setImageInfo(item.id);
    setModel(true);
    };


    useEffect( () => {
        const fetchData = async () => {
//            await axios.get('https://test-server-nft.azurewebsites.net/api/getNFT/0x1C2DB58d008854e2a77611829c9E7c04De2B411e')
            await axios.get('https://test-server-nft.azurewebsites.net/api/getNFT/' + props.match.params.id)
                .then(res => {
                    setData(res.data.assets);
                    //console.log(data);
                    setAccount(res.data.assets[0].creator.address);
                   //setTester(res.data.assets[0].creator.address);
                    console.log("Account:" + account);
                })
                setLoading(true);
        };

        fetchData();

        // if (typeof id === 'undefined') {
        //     console.log("AssetsGallery gets undefined account id");
        // }
        // else {
        //     console.log(id);
        //     setAccount(id);
        //     console.log(account);
        // }
        
    }, [tester]);


  return (
    <div className="AssetsGallery"> 
      {/* https://mui.com/material-ui/react-drawer/ */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
        <Toolbar>
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            Browse Your NFTs 
            </Typography>
            {/*<Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            id : {account}
            </Typography>*/}
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
            >
            <MenuIcon />
            </IconButton>
        </Toolbar>
        </AppBar>
        </Box>
        <Main open={open}>
        
        {loading ? 
        (data.map((item, index)=> (
            <div key={index} className="pics">
                <img 
                    src={item.image_url} 
                    alt={item.id}
                    onClick={() => handleClick(item, index)}
                />
                <h4 padding-left= "50 px"> <b>{item.name} </b> </h4>
                <br></br>
            </div>    
        ))
        ) : 
        (
            <CircularProgress />
        )}


      <Dialog
        open={model}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth='md' 
      >
        
        <DialogTitle><b>{"NFT: " + clickedImgName}</b></DialogTitle>
        <DialogContent>
          <img src={clickedImg} />
          <p> {clickedImgDesc} </p>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleSend}> Send</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

        </Main>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <Link to="/"><h4> <b>Home</b></h4></Link>
            {<p>account id: {account}</p>}
            <Divider />
        </Drawer>
    </div>

  )
}

export default AssetsGallery
