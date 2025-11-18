import { createContext, useReducer } from "react";

export const PostList=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{}
});

const postListReducer=(currPostList,action)=>{
  return currPostList;
}
const PostListProvider=({children})=>{


  const {postList,dispatchPostList}=useReducer(postListReducer,defaultPostList);


  const addPost=()=>{

  }

  const deletePost=()=>{

  }
  return <PostList.Provider value={{
    postList:postList,
  addPost:addPost,
  deletePost:deletePost
  }}>
    {children}
  </PostList.Provider>
}

const defaultPostList=[
  {
  id:'1',
  title:"Going to Mumbai",
  body:"Hi everyone I am going to my hometown Mumbai and hope to enjoy alot.",
  reactions:2,
  userId:'9',
  tags:['vacation','mumbai','happyLife']
},
{
  id:'2',
  title:"Got placed",
  body:"After immense struggle and huge hard work finally I got placed into my dream company.",
  reactions:15,
  userId:'12',
  tags:['unbelievable','hardworkpaysoff','happyLife','moretogo']
}

]
export default PostListProvider;