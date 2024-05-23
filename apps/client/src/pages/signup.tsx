import {Signup} from "../../../../packages/ui/components";



export default function SigninPage(){
    return <div>
        <Signup onClick={async (username, password)=>{
            // const response = await axios.post("google.com",{
            //     username,
            //     password
            // })
        }}/>
    </div>
}