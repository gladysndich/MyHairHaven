
import { Link } from "react-router-dom";

 export default function Navbar(){
    return(
      <nav class="navbar bg-light">
      <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-success me-5" type="button"><Link className="nav-link" to="/login">LOGIN</Link></button>
        <button class="btn btn-outline-success me-5" type="button"><Link className="nav-link" to="/register">REGISTER</Link></button>
        <button class="btn btn-outline-success me-5" type="button"><Link className="nav-link" to="/home">HOME</Link></button>
        <button class="btn btn-outline-success me-5" type="button"> <Link className="nav-link" to="/hairstyles">HAIRSTYLES</Link></button>
        <button class="btn btn-outline-success me-5" type="button"> <Link className="nav-link" to="/hairdressers">HAIRDRESSERS</Link></button>
        <button class="btn btn-outline-success me-5" type="button"> <Link className="nav-link" to="/appointments">APPOINTMENTS</Link></button>
        <button class="btn btn-outline-success me-5" type="button"> <Link className="nav-link" to="/appointmentform">APPOINTMENTFORM</Link></button>

      </form>
    </nav>         

    )

 }

