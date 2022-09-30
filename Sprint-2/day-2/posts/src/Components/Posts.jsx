import React,{useState,useEffect} from 'react';

const getData =  (page) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then((res) => {
        return  res.json();
    })
}

const Posts = (data) => {

    
    const [posts,setPosts]=useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage]=useState(1);

    useEffect(()=>{
        fetchUpdatePosts(page)
    },[page])

    const fetchUpdatePosts = async(page) =>{
        try{
            setLoading(true);
            const data =await getData(page);
            
             setPosts(data);
             setLoading(false);
        }catch(err){
            setLoading(false);
            console.log("err :",err);
            
        }
    }

    const handlePage =(changeBy)=>{
        setPage(page+ changeBy );
    }
    
    // console.log("posts :", posts);
    if(loading){
        return <h1>Loading...</h1>
    }

  return (
    <div>
      <h1 style={{color:"teal"}}>Posts</h1>
     {/* <button onClick={fetchUpdatePosts} style={{padding:"10px 20px",fontSize:"20px",fontWeight:"bold"}} >Get Posts</button> */}

    <ul>
      {posts.map((postsItem)=>(
         <li key={postsItem.id}>{postsItem.id} - {postsItem.title}</li>
      ))}
    </ul>
    <button disabled={page===1} onClick={()=>handlePage(-1)}>PREV</button>
    <button>{page}</button>
    <button onClick={()=>handlePage(1)}>NEXT</button>
    </div>
  )
}

export default Posts
