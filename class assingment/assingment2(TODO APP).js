import {Text , TextInput  ,View, StyleSheet, TouchableOpacity, Alert, FlatList, SafeAreaView,Modal} from 'react-native';
import React,{Component} from 'react';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';


const HomeScreen = ()=>{

    //state to add my todo into array
    const [getTodo,SetTodoArray] = useState([]);

    //state to and get and set the  user input 
    const [getTodoText ,setTodoTextFromInput] = useState("");

    //to make model visibility True or false
    const[isModalVisibal , SetModelVisibility ]=useState(false) ;

    //to update Todo
    const [updatedTodoText ,setUpdateTodo ]= useState();
    //get id of todo u want to update
    const [selectedTodoId,setSelectedTodoId]=useState();

    //check the todo is empty
    const isEmpty = getTodo.length == 0;

    //on press edit item 
    const onPressEditButton = (item)=>{
        setSelectedTodoId(item.id);
        SetModelVisibility(true);
    }

    //add todo
    const handleSubmit= ()=>{
        if(getTodoText !=""){
        SetTodoArray([...getTodo,{id:Date.now().toString(),todo:getTodoText}]);
        setTodoTextFromInput("");
        }else{
            Alert.alert("Enter atleast one todo !");
        }
    }

    //delete todo
    const handleDelete=(id)=>{
        let deleteTodo = getTodo.filter((ele)=>ele.id!==id);
        SetTodoArray(deleteTodo);
    }

    //update Todo
    const handleUpdate = () => {
        getTodo.map((ele)=>{
            if(ele.id===selectedTodoId){
                ele.todo = updatedTodoText;
                return ele;
            }
            return ele;
        });
        SetModelVisibility(false);
    };
    
    const renderTodo = ({item, index})=>{
        return( 
            <View style={styles.taskList}>
               <Text>{item.todo}</Text>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={() =>{
                        onPressEditButton(item)}} >
                    <IconButton icon='pencil'/>
                    </TouchableOpacity>
                    <Modal
                    visible={isModalVisibal}
                    onRequestClose={()=>SetModelVisibility(false)}
                    animationType='fade'
                    >
                        <View style={styles.view}>
                            <TextInput style={styles.textBox}  onChangeText={setUpdateTodo}/>
                            <TouchableOpacity  onPress={()=>handleUpdate()} style={[styles.TouchableButton, {marginTop:20, width:200}]}
                            >
                                <Text style={{color:'white' , fontSize:15}}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <IconButton icon='trash-can'/>
                    </TouchableOpacity>
                </View>
               
            </View>
        );
    }

    return (
        <SafeAreaView>
        <View style={styles.view}>
                <Text style={styles.text1}>Todo
                    <Text style= {[styles.text1,styles.text2]}> App</Text>
                </Text>
                <View style={{display:'flex',flexDirection:'row',marginTop:30}}>
                <TextInput 
                    placeholder="Enter Todo's"
                    style={styles.textBox}
                    value={getTodoText}
                    onChangeText={setTodoTextFromInput}  
                />
                <TouchableOpacity 
                style={styles.TouchableButton}
                onPress={handleSubmit}>
                    <IconButton style={styles.AddButtonText} icon='plus'/>
                </TouchableOpacity>
                </View>
                <View style={styles.scrollView}>
                <Text style={styles.taskheading}>Your Task</Text>
                <View style={{flex: 1}}>
                    <FlatList
                    data={getTodo}
                    renderItem={renderTodo}
                    keyExtractor={(item, index) => index.toString()} // Provide a key extractor
                    />
                </View>
                </View>
        </View>
        </SafeAreaView>
    );
}


//style sheet
const styles=StyleSheet.create({

view:{
    margin:30,
    padding:20,
    alignItems: 'center',
},
scrollView: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 0, 
    width: 370,
    borderRadius: 15,
    borderColor: "black",
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.6)',
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 8,
},

taskheading:{
    backgroundColor:'#5C4F99',
    color:"white",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomWidth:1,
    textAlign:'center',
    fontWeight:'700',
    padding:20,
},
taskList: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    margin:10,
    padding:15,
    fontSize:13,
    fontWeight:'400',
    borderRadius: 20,
    backgroundColor:'white',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7
},

text1:{
    fontSize:38,
    fontWeight:'900',
    color:"white",
},
text2:{
    color:"#5C4F99",
},
textBox:{
    textAlign:'center',
    borderColor:'black',
    color:'black',
    fontWeight:'400',
    backgroundColor:'white',
    borderRadius:17,
    fontSize:17,
    paddingLeft:15,
    paddingRight:15,
    width:255,
    height:50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5.62,
    elevation: 7,
},
TouchableButton:{ 
    backgroundColor:"black",
    marginLeft:10,
    width:60,
    height:55,
    borderRadius:30,
    borderColor:'white',
    borderWidth:1.5,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
AddButtonText:{
    color: "white",
    height:200,
},
iconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 10, // Adjust this value as per your preference
},
})
export default HomeScreen;