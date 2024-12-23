import { Button } from "@mui/material";
import logo from '../../assets/image-removebg-preview.png'
export default function Nav() {
    return <>
      <div className="flex items-center justify-between mx-16 mt-10">
        <img className="w-28" src={logo}></img>
        <nav className="space-x-5">
            <Button variant="contained" href="/login">Login</Button>
            <Button variant="outlined" href="/signup" >Sign up</Button>
        </nav>
      </div>
    </>
}