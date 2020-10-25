import React,{Component} from "react";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import petFoodService from '../Services/petFoodService';
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const style = {
  papersty: {
    minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 20,
  },
  cardsty: {
    minWidth: 270,
    backgroundColor:'#fafafa',
    margin: 20
  }
}

function Alert(props) {
  return <MuiAlert evevation={6} variant="filled" {...props} />
}

export default class AddNewFoodItem extends Component {
   constructor(props){
     super(props);
     this.state = {
        title: '',
        price:'',
        description:'',
        avatarUrl:'',
        imageUrl:'',
        animalType:'',
        message: null,
        SnackbarOpen: false,
        colors:'',
        type:''
    };
    this.saveFood = this.saveFood.bind(this);

    // this.loadFood = this.loadFood.bind(this);
   }

   handelClose =(event, reson) =>{
     if(reson === "clickaway"){
       return;
     }

     this.setState({SnackbarOpen:false})
   }

   saveFood = (e) => {
    e.preventDefault();
    if(this.state.title && this.state.price && this.state.description && this.state.avatarUrl && this.state.imageUrl && this.state.animalType){ 
    console.log('Hiiiiiiiiiiii');
    let food = {title: this.state.title, price: this.state.price, description: this.state.description, avatarUrl: this.state.avatarUrl, imageUrl: this.state.imageUrl, animalType: this.state.animalType};
    petFoodService.createPetFoods(food)
        .then(res => {
            this.setState({SnackbarOpen:true ,message : 'Food added successfully.', colors: 'success'});
            // this.props.history.push('/food');
        },
        (error)=>{
          this.setState({SnackbarOpen:true ,message : 'failed.', colors: 'error'})
        });
    }else{
      this.setState({SnackbarOpen:true ,message : 'Food added failed.', colors: 'error'})
    }
}

onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });





  handleSubmit(event) {
    alert('Pet details are submitted' );
    event.preventDefault();
  }


//   loadUser() {
//     ApiService.fetchUserById(window.localStorage.getItem("userId"))
//         .then((res) => {
//             let user = res.data;
//             this.setState({
//                 id: user.id,
//                 username: user.username,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 age: user.age,
//                 salary: user.salary,
//             })
//         });
// }



















  render(){

    return(
      <>

      <div>
        <Snackbar 
          open={this.state.SnackbarOpen} 
          autoHideDuration={3000} 
          onClose={this.handelClose} 
          anchorOrigin={{ vertical: 'top', horizontal:'right'}}
        >
          <Alert onClose={this.handelClose} severity={this.state.colors}>
            {this.state.message}
          </Alert>
        </Snackbar>
      </div>

        <Grid container spacing={3}>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <ValidatorForm onSubmit={this.saveFood}>
            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={8}>
                <CardContent style={style.cardsty}>
                  <CardActions>
                    <CardContent>
                      <FontAwesomeIcon icon={faEdit}/>Add New food ilems
                      <br/>
                      <br/>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextValidator
                            id="Title"
                            name="title"
                            type="text"
                            label="Food Title"
                            value={this.state.title}
                            onChange={this.onChange}
                            helperText="Enter food's Title"
                            variant="outlined"
                            validators={['required']}
                            errorMessages={['This fieled is required']}
                            fullWidth
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextValidator
                            id="price"
                            name="price"
                            type="number"
                            label="Food price"
                            value={this.state.price}
                            onChange={this.onChange}
                            helperText="Enter food's price"
                            variant="outlined"
                            validators={['required']}
                            errorMessages={['This fieled is required']}
                            fullWidth
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextValidator
                            id="description"
                            name="description"
                            type="text"
                            label="Food description"
                            value={this.state.description}
                            onChange={this.onChange}
                            helperText="about food item"
                            variant="outlined"
                            validators={['required']}
                            errorMessages={['This fieled is required']}
                            fullWidth
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextValidator
                            id="avatarUrl"
                            name="avatarUrl"
                            type="Url"
                            label="Food avatarUrl"
                            value={this.state.avatarUrl}
                            onChange={this.onChange}
                            helperText="Enter food's avatarUrl"
                            variant="outlined"
                            validators={['required']}
                            errorMessages={['This fieled is required']}
                            fullWidth
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextValidator
                            id="animalType"
                            name="animalType"
                            type="text"
                            label="Food animalType"
                            value={this.state.animalType}
                            onChange={this.onChange}
                            helperText="Enter food's avatarUrl"
                            variant="outlined"
                            validators={['required']}
                            errorMessages={['This fieled is required']}
                            fullWidth
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextValidator
                            id="imageUrl"
                            name="imageUrl"
                            type="Url"
                            label="Food imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.onChange}
                            helperText="Enter food's imageUrl"
                            variant="outlined"
                            validators={['required']}
                            errorMessages={['This fieled is required']}
                            fullWidth
                          />
                        </FormControl>
                      </Grid>
                      </Grid>
                    </CardContent>

                  </CardActions>
                  <CardActions style={{float: 'right'}}>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          value="submit"
                          type="submit"
                          color="primary"
                          // onClick={this.saveFood}
                          startIcon={<SaveIcon />}>
                            <span>Save</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="/admin" variant="contained" color="primary"
                          startIcon={<ClearIcon />}>
                            <span>Cancel</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>

                    </CardActions>
                </CardContent>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
            </ValidatorForm>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </>
    )
  }
}
