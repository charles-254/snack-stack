import "../App.css";
import { headerItems } from "./data";

function HeaderItems({ icon, text }) {
    return (
        <>
            <div className="header-items">
                <span>
                    <button className="icon">{icon}</button>
                </span>
                <span>
                    <p>{text}</p>
                </span>
            </div>
        </>
    );
}

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-items-container">
                    {headerItems.map((data, idx) => {
                        return <HeaderItems key={idx} icon={<data.icon />} text={data.text} />;
                    })}
                </div>

                <button className="view-all-btn">View All</button>
            </div>
        </>
    );
}

export default Header;
