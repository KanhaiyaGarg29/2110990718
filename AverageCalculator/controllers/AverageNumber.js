const axios = require('axios');
exports.getNumber=async(req,res)=>{
    try{
        const numberId=req.params.numberid;
        if(numberId==='p' || numberId==='f' || numberId==='e'){
            let token;
            axios.get('http://20.244.56.144/test/auth')
            .then((response)=>token=response.data.access_token)
            .catch((error)=>console.log(error))


             let windowPrevState=[];
             let windowCurrState=new Array(10);
             let numbers=[];
             axios.get('http://20.244.56.144/test/primes',{ headers: { Authorization: `Bearer ${token}` }})
             .then((response)=>numbers.concat(response.data))
             .catch((error)=>console.log(error))
             if(numbers.length<=10){
                windowCurrState.concat(numbers);
             }
             let sum;
             let avg;
             windowCurrState.forEach((num)=>{
                sum=sum+num;
             })
             avg=sum/windowCurrState.length;
            
            return res.status(200).json({
                windowPrevState:windowPrevState,
                windowCurrState:windowCurrState,
                numbers:numbers,
                avg:avg
            })
        }
        else{
            return res.status(400).json({
                message:"Wrong API, Check and try again"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message:"Network failure try again later"
        })
    }
}