document.getElementById('form').addEventListener('submit',async (e)=>{
          
       e.preventDefault();
       const value = document.getElementById('path').value;
       const res = await handleAPI('http://localhost:5001/api',value);
       if(res[0].status!=='ok'){
              const error_message = document.getElementById('error_message');
              if(res[0].message==='your path does not exist'){
                     error_message.innerHTML='your path does not exist';
              }else{
                     error_message[0].innerHTML=res.message;
              }
       }else{
            const myData={
                 
                   pdCount:res[0].pdCount,
                   docxCount:res[0].docxCount,
                   imageCount:res[0].imageCount
            }; 
            localStorage.setItem('statistics',JSON.stringify(myData));
            window.location.href='./Show/show.html'; 
       }      
});
async function handleAPI(endPoint,path_value){

       try{
             const responseData = await fetch(endPoint,{
                       
                      method:"POST",
                      headers:{
                        'Content-Type' : 'application/json'
                      },
                      body:JSON.stringify({'path':path_value})
             });

             return await responseData.json();

       }catch(err){

           console.error(err);
           return err
       }
}