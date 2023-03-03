import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div class="container-fluid pb-2">
                    <a class="navbar-brand" href="/"><strong>WORKOUT BUDDY</strong></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Help</a>
                            </li>
                        </ul>

                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <button class="btn btn-light px-3 me-3">
                                Login
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;