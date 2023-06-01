"use client" ; 
import React from 'react'; 
import MUIDataTable from "mui-datatables"; 
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'; 
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined'; 
const affTableCategories=(props)=>{ 
const[categories,setCategories]=React.useState(props.categories) 
 
 const handleDelete=async(id)=>{ 
 if(window.confirm("supprimer la catégorie O/N")) { 
 console.log(id) 
 const res=await (await
fetch('https://api.escuelajs.co/api/v1/categories/' + id, { 
 method: "DELETE"
 })).json(); 
 if (res) { 
 const newCategories = categories.filter((item) => item.id !== id);
 setCategories(newCategories); 
 
 } else { 
 console.log(res); 
 }
 } 
 } 
const columns = [ 
 { 
 label: "Name", 
 name: "name"
 }, 
 { 
 label: "Image", 
 name:"image", 
 options: { 
 customBodyRender : (rowdata) => ( 
 <img
 style={{ height: 50, width : 60, borderRadius: '10%' }}
 src= {`${rowdata}`}
 alt=""
 />
 ) 
 } 
 }, 
 { 
 name: "id", 
 label: "Actions", 
 options: { 
 customBodyRender: (value) => ( 
 <div>
 <span
 onClick={()=>{}}
 style={{ cursor: 'pointer'}}
 >
 <NoteAltOutlinedIcon color='success' />
 </span>
 <span
 onClick={(e) => handleDelete(value)}
 style={{ cursor: 'pointer'}}
 >
 <DeleteForeverRoundedIcon color='error' />
 </span>
 </div>
 ) 
 } 
 } 
 ];
 return( 
    <>
     {categories && categories?.length > 0 ? 
     
     <MUIDataTable 
     title="Categories List"
     data={categories}
     columns={columns}
     />
     
     :null}
     </> 
     ) 
    } 
    export default affTableCategories;