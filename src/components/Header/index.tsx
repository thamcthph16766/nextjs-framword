import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuList } from "./data-menu";
import styles from "./header.module.css";
type Props = {};

const Header = (props: Props) => {
    const router = useRouter();
    console.log(router.pathname);

    return (
        <>
            <ul className="menu">
                {MenuList.map((menu, index) => (
                    <li key={index}>
                        <Link href={menu.path}>
                            <a
                                className={clsx({
                                    active: router.pathname === menu.path,
                                })}
                            >
                                {menu.label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>

        // <nav className="navbar navbar-expand-xxl navbar-dark bg-dark" aria-label="Seventh navbar example">
        //     <div className="container-fluid">
        //     <a className="navbar-brand" href="#">Expand at xxl</a>
        //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleXxl" aria-controls="navbarsExampleXxl" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>

        //     <div className="collapse navbar-collapse" id="navbarsExampleXxl">
        //         <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        //         <li className="nav-item">
        //             <a className="nav-link active" aria-current="page" href="#">Home</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="#">Link</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
        //         </li>
        //         <li className="nav-item dropdown">
        //             <a className="nav-link dropdown-toggle" href="#" id="dropdownXxl" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
        //             <ul className="dropdown-menu" aria-labelledby="dropdownXxl">
        //             <li><a className="dropdown-item" href="#">Home</a></li>
        //             <li><a className="dropdown-item" href="#">Products</a></li>
        //             <li><a className="dropdown-item" href="#">About us</a></li>
        //             </ul>
        //         </li>
        //         </ul>
        //     </div>
        //     </div>
        // </nav>
    );
};

export default Header;
